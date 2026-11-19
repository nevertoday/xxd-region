#!/usr/bin/env python3
"""README 头图：一段循环播放的 SVG 动画，把新手三课讲的事演一遍。

    python3 tools/build_hero.py

输出 assets/hero.svg（中文）和 assets/en/hero.svg（英文）。左边是标题和新手三课（课名从 src/data/nav.js 的 LESSONS 读），
右边是一台手机上的两个登录位：iCloud 一直是你自己的账户，只有「媒体与购买项目」换成外区账户；
换完以后 App Store 变成美国的商店，国区搜不到的 App 出现了；最后一行确认你的主账户地区没改。
第 1 课在一开始亮起（地区决定商店里有什么），换账户时第 2 课亮，主账户那一行打勾时第 3 课亮。
换之前的样子（pre 开头的类）元素自己写 opacity="0"，只在动画开头露面；其余元素自己的属性就是最后的样子。
所以不播动画的地方（静态渲染、系统设了「减少动效」）看到的是换好以后的样子。不用 transform。
文字改 TEXT，时间改 T，位置改下面的常量。图里不画 Apple 的标志和图标。
"""
import os
import re
from html import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, H, DUR, FADE_OUT = 1200, 660, 12.0, 11.0
BG, PANEL, INK, MUTED, HOT, LINE = "#171612", "#211f1a", "#f3f0ea", "#a7a194", "#ff7a4d", "#3a372f"
MONO = "ui-monospace,Menlo,monospace"
FONT = {"zh": "'PingFang SC','Noto Sans SC','Microsoft YaHei',sans-serif",
        "en": "'Avenir Next','Segoe UI',Helvetica,Arial,sans-serif"}
REDUCE = "@media (prefers-reduced-motion:reduce){*{animation:none!important}}"

TEXT = {
    "zh": {
        "brand": "外区 Apple ID 新手教程",
        "h1": ["主账户不动", "只给商店换个区"], "h1_size": 58,
        "src": "对照 Apple 官方支持文章和条款 · 非官方",
        "title": "一台手机上的两个登录位",
        "demo": "示意",
        "icloud": ("iCloud", "你自己的账户 · 中国大陆", "一直不动"),
        "media": ("媒体与购买项目", "你自己的账户 · 中国大陆", "外区账户 · 美国", "只换这里"),
        "store": ("App Store", "中国大陆 · ¥", "美国 · $"),
        "search": "搜索：朋友推荐的那个 App",
        "miss": "这个地区没有上架",
        "hit": ("找到了", "获取"),
        "main": ("你的主账户", "地区还是中国大陆"),
    },
    "en": {
        "brand": "Apple Account regions, for beginners",
        "h1": ["Keep your account,", "switch the store"], "h1_size": 54,
        "src": "Checked against Apple's support articles and terms · unofficial",
        "title": "Two sign-ins on one phone",
        "demo": "Illustration",
        "icloud": ("iCloud", "Your own account · China mainland", "Stays put"),
        "media": ("Media & Purchases", "Your own account · China mainland", "Second account · United States", "Only this one"),
        "store": ("App Store", "China mainland · ¥", "United States · $"),
        "search": "Search: the app a friend told you about",
        "miss": "Not available in this region",
        "hit": ("Found it", "Get"),
        "main": ("Your main account", "Region still China mainland"),
    },
}

# 每件事发生的时间（秒）
T = {"lesson0": 0.5, "miss": 0.9, "lesson1": 2.6, "swap": 3.0, "keep": 3.4, "store": 4.4, "hit": 5.0, "lesson2": 6.6, "tick": 6.6}

RX, RR = 640, 1160            # 右栏的左右边
ROW_TOP, ROW_H = (78, 190), 96
STORE_TOP, STORE_H = 318, 196
MAIN_TOP, MAIN_H = 534, 78


def read_lessons():
    """从 src/data/nav.js 的 LESSONS 读每课的中英文课名和时间。"""
    src = open(os.path.join(ROOT, "src", "data", "nav.js"), encoding="utf-8").read()
    block = re.search(r"export const LESSONS = \[(.*?)\n\];", src, re.S).group(1)
    out = []
    for line in re.findall(r"^\s*\{ n: \d.*$", block, re.M):
        zh, en = line.split("en: {", 1)
        field = lambda part, key: re.search(key + r': "([^"]*)"', part).group(1)
        out.append({"zh": (field(zh, "title"), field(zh, "minutes")), "en": (field(en, "title"), field(en, "minutes"))})
    if len(out) != 3:
        raise SystemExit(f"expected 3 lessons in src/data/nav.js, found {len(out)}")
    return out


def width(s, size):
    """估一行字有多宽（PingFang / Avenir Next 的大致字宽），只用来定卡片宽度和折行，最后以截图检查为准。"""
    w = 0
    for ch in s:
        w += 1.0 if ord(ch) > 0x2e7f else .3 if ch == " " else .68 if ch.isupper() or ch.isdigit() else .56
    return w * size


def pct(t, total=DUR):
    return f"{t / total * 100:.2f}%"


def anim(name, frames, total=DUR):
    return f"@keyframes {name}{{{frames}}}.{name}{{animation:{name} {total}s infinite}}"


def show(name, t):
    """t 秒淡入，播完淡出。"""
    return anim(name, f"0%,{pct(t)}{{opacity:0}}{pct(t + .45)},{pct(FADE_OUT)}{{opacity:1}}{pct(FADE_OUT + .6)},100%{{opacity:0}}")


def before(name, t):
    """换之前的样子：一开始就在，t 秒淡出。元素自己写 opacity="0"，静态时看不到。"""
    return anim(name, f"0%,{pct(t)}{{opacity:1}}{pct(t + .35)},100%{{opacity:0}}")


def light(name, t, prop, off, on):
    """t 秒从 off 变成 on（元素自己的属性写 on，静态时就是亮的）。"""
    return anim(name, f"0%,{pct(t)}{{{prop}:{off}}}{pct(t + .3)},{pct(FADE_OUT)}{{{prop}:{on}}}{pct(FADE_OUT + .6)},100%{{{prop}:{off}}}")


def txt(x, y, s, size, fill, font, weight=400, anchor="start", cls="", extra=""):
    c = f' class="{cls}"' if cls else ""
    return f'<text{c} x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}"{extra}>{escape(s)}</text>'


def mark(cx, cy, r, fill=INK, ink=BG):
    """本站标志：墨色圆片上挖出一个地球（一圈外框、一条经线、一条赤道）。和 public/favicon.svg 同一个形状。"""
    k = r / 10
    p = lambda dx, dy: f"{cx + dx * k:.1f} {cy + dy * k:.1f}"
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}"/>'
            f'<circle cx="{cx}" cy="{cy}" r="{6.4 * k:.1f}" fill="none" stroke="{ink}" stroke-width="{1.5 * k:.1f}"/>'
            f'<path d="M{p(0, -6.4)} C{p(-2.4, -4.4)} {p(-2.4, 4.4)} {p(0, 6.4)} C{p(2.4, 4.4)} {p(2.4, -4.4)} {p(0, -6.4)} M{p(-6.4, 0)} H{cx + 6.4 * k:.1f}" '
            f'fill="none" stroke="{ink}" stroke-width="{1.5 * k:.1f}"/>')


def tick_box(x, y, s, cls=""):
    c = f' class="{cls}"' if cls else ""
    return (f'<g{c}><rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{HOT}"/>'
            f'<path d="M{x + s * .24:.1f} {y + s * .52:.1f} l{s * .2:.1f} {s * .2:.1f} l{s * .34:.1f} -{s * .38:.1f}" stroke="{BG}" stroke-width="{s * .12:.1f}" fill="none"/></g>')


def badge(x_right, y, s, f, filled, cls=""):
    """右对齐的小标签。filled 是实心主色，否则是主色描边。"""
    w = int(width(s, 15)) + 24
    c = f' class="{cls}"' if cls else ""
    fill, ink = (HOT, BG) if filled else (PANEL, HOT)
    return (f'<g{c}><rect x="{x_right - w}" y="{y}" width="{w}" height="30" fill="{fill}" stroke="{HOT}" stroke-width="2"/>'
            f'{txt(x_right - w / 2, y + 20, s, 15, ink, f, 700, "middle")}</g>')


def svg(lang):
    t, f = TEXT[lang], FONT[lang]
    lessons = [it[lang][0] for it in read_lessons()]

    css = [light(f"s{i}", T[f"lesson{i}"], "fill", LINE, HOT) + light(f"s{i}t", T[f"lesson{i}"], "fill", MUTED, INK) for i in range(3)]
    css += [before("premedia", T["swap"]), show("media", T["swap"] + .2), show("swapb", T["swap"] + .2), show("keep", T["keep"]),
            light("mediabox", T["swap"], "stroke", LINE, HOT),
            before("prestore", T["store"]), show("store", T["store"] + .2),
            # 「没有上架」先淡入，商店换成美国以后淡出
            anim("premiss", f"0%,{pct(T['miss'])}{{opacity:0}}{pct(T['miss'] + .4)},{pct(T['store'])}{{opacity:1}}{pct(T['store'] + .35)},100%{{opacity:0}}"),
            show("hit", T["hit"]), show("tick", T["tick"]), light("mainbox", T["tick"], "stroke", LINE, HOT), REDUCE]

    label = (f'{"".join(t["h1"]) if lang == "zh" else " ".join(t["h1"])}. {t["title"]}: '
             f'{t["icloud"][0]}: {t["icloud"][1]}, {t["icloud"][2]}; {t["media"][0]}: {t["media"][2]}; '
             f'{t["store"][0]}: {t["store"][2]}, {t["hit"][0]}; {t["main"][0]}: {t["main"][1]}. ' + " · ".join(lessons))
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="{escape(label)}">',
           f"<style>{''.join(css)}</style>",
           f'<rect width="{W}" height="{H}" fill="{BG}"/>']

    # 左栏：标志、标题、出处、新手三课
    out.append(mark(78, 64, 14))
    out.append(txt(104, 72, t["brand"], 22, INK, f, 600))
    out.append(txt(64, 182, t["h1"][0], t["h1_size"], INK, f, 700))
    out.append(txt(64, 252, t["h1"][1], t["h1_size"], HOT, f, 700))
    out.append(txt(64, 302, t["src"], 18 if lang == "en" else 20, MUTED, f))
    for i, title in enumerate(lessons):
        y = 372 + i * 62
        out.append(f'<rect class="s{i}" x="64" y="{y}" width="34" height="34" fill="{HOT}"/>')
        out.append(txt(81, y + 23, f"0{i + 1}", 16, BG, MONO, 700, "middle"))
        size = 22 if width(title, 22) < 470 else 19
        out.append(txt(114, y + 24, title, size, INK, f, 600, cls=f"s{i}t"))

    # 右栏：两个登录位
    out.append(txt(RX, 52, t["title"], 16, MUTED, f, 600))
    (ic, ic_sub, ic_keep), (md, md_pre, md_post, md_badge) = t["icloud"], t["media"]
    y0, y1 = ROW_TOP
    out.append(f'<rect x="{RX}" y="{y0}" width="{RR - RX}" height="{ROW_H}" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>')
    out.append(txt(RX + 28, y0 + 42, ic, 22, INK, f, 700))
    out.append(txt(RX + 28, y0 + 72, ic_sub, 16, MUTED, f, 500))
    out.append(badge(RR - 24, y0 + 33, ic_keep, f, False, "keep"))
    out.append(f'<rect class="mediabox" x="{RX}" y="{y1}" width="{RR - RX}" height="{ROW_H}" fill="{PANEL}" stroke="{HOT}" stroke-width="2"/>')
    out.append(txt(RX + 28, y1 + 42, md, 22, INK, f, 700))
    out.append(txt(RX + 28, y1 + 72, md_pre, 16, MUTED, f, 500, cls="premedia", extra=' opacity="0"'))
    out.append(txt(RX + 28, y1 + 72, md_post, 16, HOT, f, 600, cls="media"))
    out.append(badge(RR - 24, y1 + 33, md_badge, f, True, "swapb"))

    # 连线：媒体与购买项目 → App Store
    cx = RX + 60
    out.append(f'<rect x="{cx - 2}" y="{y1 + ROW_H}" width="4" height="{STORE_TOP - y1 - ROW_H}" fill="{LINE}"/>')
    out.append(f'<rect class="media" x="{cx - 2}" y="{y1 + ROW_H}" width="4" height="{STORE_TOP - y1 - ROW_H}" fill="{HOT}"/>')

    # App Store：地区标签、搜索框、结果
    name, pre_region, post_region = t["store"]
    out.append(f'<rect x="{RX}" y="{STORE_TOP}" width="{RR - RX}" height="{STORE_H}" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>')
    out.append(txt(RX + 28, STORE_TOP + 44, name, 22, INK, f, 700))
    for s, cls, filled, op in [(pre_region, "prestore", False, ' opacity="0"'), (post_region, "store", True, "")]:
        w = int(width(s, 16)) + 28
        fill, ink = (HOT, BG) if filled else (PANEL, MUTED)
        stroke = HOT if filled else LINE
        out.append(f'<g class="{cls}"{op}><rect x="{RR - 24 - w}" y="{STORE_TOP + 22}" width="{w}" height="32" fill="{fill}" stroke="{stroke}" stroke-width="2"/>'
                   f'{txt(RR - 24 - w / 2, STORE_TOP + 44, s, 16, ink, f, 700, "middle")}</g>')
    sy = STORE_TOP + 74
    out.append(f'<rect x="{RX + 28}" y="{sy}" width="{RR - RX - 56}" height="44" fill="{BG}" stroke="{LINE}" stroke-width="2"/>')
    out.append(f'<circle cx="{RX + 52}" cy="{sy + 21}" r="8" fill="none" stroke="{MUTED}" stroke-width="2.5"/>'
               f'<path d="M{RX + 58} {sy + 27} l7 7" stroke="{MUTED}" stroke-width="2.5"/>')
    out.append(txt(RX + 76, sy + 28, t["search"], 16, MUTED, f, 500))
    ry = sy + 92
    out.append(f'<g class="premiss" opacity="0"><path d="M{RX + 34} {ry - 12} l14 14 M{RX + 48} {ry - 12} l-14 14" stroke="{MUTED}" stroke-width="3"/>'
               f'{txt(RX + 64, ry + 1, t["miss"], 18, MUTED, f, 600)}</g>')
    hit, get = t["hit"]
    gw = int(width(get, 16)) + 36
    out.append(f'<g class="hit"><rect x="{RX + 28}" y="{ry - 22}" width="30" height="30" fill="{INK}"/>'
               f'{txt(RX + 72, ry + 1, hit, 18, INK, f, 700)}'
               f'<rect x="{RR - 28 - gw}" y="{ry - 22}" width="{gw}" height="30" fill="{HOT}"/>'
               f'{txt(RR - 28 - gw / 2, ry - 1, get, 16, BG, f, 700, "middle")}</g>')

    # 主账户：地区没改
    m1, m2 = t["main"]
    out.append(f'<rect class="mainbox" x="{RX}" y="{MAIN_TOP}" width="{RR - RX}" height="{MAIN_H}" fill="{PANEL}" stroke="{HOT}" stroke-width="2"/>')
    out.append(txt(RX + 28, MAIN_TOP + 47, m1, 20, INK, f, 700))
    out.append(txt(RX + 28 + width(m1, 20) + 18, MAIN_TOP + 47, m2, 17, MUTED, f, 500))
    out.append(tick_box(RR - 52, MAIN_TOP + 24, 30, "tick"))

    out.append(txt(RR, H - 18, t["demo"], 14, MUTED, f, 400, "end"))
    out.append("</svg>")
    return "".join(out) + "\n"


if __name__ == "__main__":
    for lang, sub in [("zh", ""), ("en", "en")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, "hero.svg"), "w") as fh:
            fh.write(svg(lang))
        print(f"wrote assets/{sub + '/' if sub else ''}hero.svg")
