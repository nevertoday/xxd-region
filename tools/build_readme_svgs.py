#!/usr/bin/env python3
"""README 里的两张配图（SVG，轻动画，和头图 hero.svg 同一套深色风格，颜色、字体、标志都从 build_hero 拿）。

    python3 tools/build_readme_svgs.py

输出 assets/readme/<名字>.svg（中文）和 assets/en/readme/<名字>.svg（英文）：
  move     给主账户换地区之前，Apple 要你先清掉的几样东西，一行行打勾；最后一行是国区账户才有的：
           iCloud 里的内容迁出云上贵州，迁完以后云上贵州删掉它那份。所以另注册一个更省事（第 3 课）。
           依据 118283（en / zh-cn）、111754 和云上贵州的 iCloud 条款，见 docs/sources/README.md 第 5、6 节。
  lessons  新手入门三课：每课多长、学完你知道什么。课名和时间从 src/data/nav.js 的 LESSONS 读。
透明度只写在动画里，系统设了「减少动效」或者不播动画的地方，看到的都是最后的样子。文字改 TEXT。
"""
import os
import re
from html import escape

from build_hero import BG, PANEL, INK, MUTED, HOT, LINE, MONO, FONT, REDUCE, read_lessons, width, txt as t

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TEXT = {
    "zh": {
        "move": {
            "head": "给主账户换地区之前，Apple 要你先清掉这些",
            "rows": [
                ("余额", "把 Apple 账户余额用完；不够买一件东西的零头，找 Apple 支持清零"),
                ("订阅", "取消会挡住换区的订阅，再等到订阅期结束"),
                ("待处理的事", "会员资格、预购、影片租借、季票，还有没处理完的退款"),
                ("家人共享", "在家人共享群组里的成员，可能换不了地区"),
                ("付款方式", "可能要填一个新地区能用的付款方式"),
                ("已买的内容", "有些内容到了新地区可能用不了，先下载到要用的设备上"),
            ],
            "gcbd": ("国区账户还多一件", "iCloud 里的内容会从云上贵州迁到 Apple，迁完以后云上贵州删掉它那份"),
            "end": "所以，另注册一个外区账户更省事",
            "src": "出处：Apple 支持 118283、111754，云上贵州运营的 iCloud 条款",
        },
        "lessons": {"num": "第 {n} 课", "get_label": "学完你知道：",
                    "get": ["地区管什么，Apple 的条款怎么说你住在哪", "iCloud 不动，只在「媒体与购买项目」里换", "为什么不给主账户换区，另注册一个"]},
    },
    "en": {
        "move": {
            "head": "Before your main account changes region, Apple asks you to clear these",
            "rows": [
                ("Balance", "Spend your Apple Account balance; Apple Support can clear an amount too small to buy anything"),
                ("Subscriptions", "Cancel the ones that block the change, then wait for the period to end"),
                ("Pending items", "Memberships, pre-orders, movie rentals, season passes and refunds still processing"),
                ("Family Sharing", "A member of a Family Sharing group might not be able to change region"),
                ("Payment method", "You might need one that works in the new country or region"),
                ("What you bought", "Some content might not be available in the new region, so download it first"),
            ],
            "gcbd": ("China mainland accounts: one more", "iCloud content moves from GCBD to Apple, and GCBD then deletes its copy"),
            "end": "So a second account is simpler",
            "src": "Sources: Apple Support 118283 and 111754, the iCloud (operated by GCBD) terms",
        },
        "lessons": {"num": "Lesson {n}", "get_label": "After this lesson, you know:",
                    "get": ["What the region decides, and what Apple's terms say about where you live",
                            "iCloud stays put; only Media & Purchases switches", "Why you leave your main account alone and make a second one"]},
    },
}


def wrap(s, size, maxw):
    """按宽度折行。英文各行尽量一样长（不让最后一行只剩一个词）；中文照 greedy 断在逗号后面。"""
    rows = greedy(s, size, maxw)
    while len(rows) > 1 and not re.search(r"[⺀-￿]", s) and len(greedy(s, size, maxw - 4)) == len(rows):
        maxw -= 4
        rows = greedy(s, size, maxw)
    return rows


def greedy(s, size, maxw):
    """英文在空格处断，中文在字间断，优先断在逗号后面。"""
    lines, cur = [], []
    for tok in re.findall(r"[^\s⺀-￿]+\s*|\s+|.[，、。；：）」]?", s):
        if cur and width("".join(cur) + tok.rstrip(), size) > maxw:
            commas = [i for i, c in enumerate(cur) if c[-1] in "，、；"]
            cut = commas[-1] + 1 if commas else len(cur)
            lines.append("".join(cur[:cut]).rstrip())
            cur = cur[cut:]
        cur.append(tok)
    return lines + ["".join(cur).rstrip()]


def lines(x, y, rows, size, fill, font, lh, weight=400, anchor="start"):
    return "".join(t(x, y + i * lh, s, size, fill, font, weight, anchor) for i, s in enumerate(rows))


def pct(s, total):
    return f"{s / total * 100:.2f}%"


def show(name, start, total, dur=.4):
    """在 start 秒淡入，循环结束前 0.8 秒淡出。"""
    p = lambda s: pct(s, total)
    end = total - .8
    return (f"@keyframes {name}{{0%,{p(start)}{{opacity:0}}{p(start + dur)},{p(end)}{{opacity:1}}"
            f"{p(end + .5)},100%{{opacity:0}}}}.{name}{{animation:{name} {total}s infinite}}")


def light(name, start, total, prop, off, on):
    p = lambda s: pct(s, total)
    end = total - .8
    return (f"@keyframes {name}{{0%,{p(start)}{{{prop}:{off}}}{p(start + .3)},{p(end)}{{{prop}:{on}}}"
            f"{p(end + .5)},100%{{{prop}:{off}}}}}.{name}{{animation:{name} {total}s infinite}}")


def tick(x, y, s, cls):
    return (f'<g class="{cls}"><rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{HOT}"/>'
            f'<path d="M{x + s * .24:.1f} {y + s * .52:.1f} l{s * .2:.1f} {s * .2:.1f} l{s * .34:.1f} -{s * .38:.1f}" stroke="{BG}" stroke-width="{s * .12:.1f}" fill="none"/></g>')


def wrap_svg(w, h, css, body, label):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{escape(label)}">'
            f'<style>{css}{REDUCE}</style><rect width="{w}" height="{h}" fill="{BG}"/>{body}</svg>\n')


def move(lang):
    T, f = TEXT[lang]["move"], FONT[lang]
    W, TOTAL = 1200, 10.0
    x0, x1 = 40, 1160
    tag_w = round(max(width(tag, 18) for tag, _ in T["rows"]) + 36)
    sub_x = x0 + 24 + tag_w + 24
    sub_w = x1 - 24 - 30 - 24 - sub_x          # 说明文字的宽度：右边留给勾
    css, out = [], []
    out.append(t(x0, 52, T["head"], 26, INK, f, 700))
    y = 84
    for i, (tag, sub) in enumerate(T["rows"]):
        rows = wrap(sub, 18, sub_w)
        h = 30 + 26 * len(rows) + 12
        out.append(f'<rect x="{x0}" y="{y}" width="{x1 - x0}" height="{h}" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>')
        out.append(t(x0 + 24, y + 38, tag, 18, INK, f, 700))
        out.append(lines(sub_x, y + 38, rows, 18, MUTED, f, 26, 500))
        out.append(tick(x1 - 24 - 30, y + (h - 30) // 2, 30, f"k{i}"))
        css.append(show(f"k{i}", .4 + i * .7, TOTAL, .3))
        y += h + 10
    # 国区账户才有的那一件：主色描边，图标位置放一个往外的箭头
    tag, sub = T["gcbd"]
    rows = wrap(sub, 18, x1 - x0 - 48)
    h = 26 + 30 + 26 * len(rows) + 12
    out.append(f'<g class="gc"><rect x="{x0}" y="{y}" width="{x1 - x0}" height="{h}" fill="{PANEL}" stroke="{HOT}" stroke-width="2" stroke-dasharray="8 6"/>'
               f'{t(x0 + 24, y + 36, tag, 18, HOT, f, 700)}{lines(x0 + 24, y + 68, rows, 18, INK, f, 26, 500)}</g>')
    css.append(show("gc", .4 + 6 * .7 + .2, TOTAL))
    y += h + 26
    out.append(f'<g class="end"><rect x="{x0}" y="{y}" width="8" height="34" fill="{HOT}"/>{t(x0 + 24, y + 26, T["end"], 24, INK, f, 700)}</g>')
    css.append(show("end", .4 + 6 * .7 + 1.2, TOTAL))
    y += 34 + 34
    out.append(t(x0, y, T["src"], 15, MUTED, f, 400))
    H = y + 26
    label = f'{T["head"]}: ' + " ".join(f"{tag}: {sub}." for tag, sub in T["rows"]) + f' {T["gcbd"][0]}: {T["gcbd"][1]}. {T["end"]}. {T["src"]}'
    return wrap_svg(W, H, "".join(css), "".join(out), label)


def lessons(lang):
    T, f = TEXT[lang]["lessons"], FONT[lang]
    W, TOTAL = 1200, 8.0
    cw, gap, x0, y0 = 352, 32, 40, 40
    items = read_lessons()
    cards = []
    for i, lesson in enumerate(items):
        title, mins = lesson[lang]
        rows, get = wrap(title, 22, cw - 48), wrap(T["get"][i], 20, cw - 48)
        label_y = 80 + 30 * (len(rows) - 1) + 48
        cards.append((title, mins, rows, get, label_y))
    label_y = max(c[4] for c in cards)
    ch = label_y + 32 + 28 * (max(len(c[3]) for c in cards) - 1) + 30
    H = y0 + ch + 40
    css, out = [], []
    out.append(f'<rect x="{x0}" y="{y0 + label_y - 30}" width="{cw * 3 + gap * 2}" height="4" fill="{LINE}"/>')
    out.append(f'<rect class="bar" x="{x0}" y="{y0 + label_y - 30}" width="{cw * 3 + gap * 2}" height="4" fill="{HOT}"/>')
    css.append(f"@keyframes bar{{0%{{transform:scaleX(0);opacity:1}}70%,92%{{transform:scaleX(1);opacity:1}}100%{{transform:scaleX(1);opacity:0}}}}"
               f".bar{{transform-origin:0 50%;transform-box:fill-box;animation:bar {TOTAL}s infinite}}")
    for i, (title, mins, rows, get, _) in enumerate(cards):
        x, name = x0 + i * (cw + gap), f"l{i}"
        out.append(f'<g class="{name}"><rect x="{x}" y="{y0}" width="{cw}" height="{ch}" fill="{PANEL}" stroke="{HOT if i == 2 else LINE}" stroke-width="2"/>')
        out.append(t(x + 24, y0 + 40, T["num"].format(n=i + 1), 18, HOT, f, 700))
        out.append(t(x + cw - 24, y0 + 40, mins, 16, MUTED, f, 600, "end"))
        out.append(lines(x + 24, y0 + 80, rows, 22, INK, f, 30, 700))
        out.append(t(x + 24, y0 + label_y, T["get_label"], 16, MUTED, f, 500))
        out.append(lines(x + 24, y0 + label_y + 32, get, 20, INK, f, 28, 600))
        out.append("</g>")
        css.append(show(name, .2 + i * 1.6, TOTAL, .45))
    label = " · ".join(f'{T["num"].format(n=i + 1)} {c[0]} ({c[1]}): {T["get_label"]} {T["get"][i]}' for i, c in enumerate(cards))
    return wrap_svg(W, H, "".join(css), "".join(out), label)


if __name__ == "__main__":
    for lang, sub in [("zh", "readme"), ("en", "en/readme")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        for name, fn in [("move", move), ("lessons", lessons)]:
            with open(os.path.join(d, f"{name}.svg"), "w") as fh:
                fh.write(fn(lang))
        print("wrote", f"assets/{sub}/" + "{move,lessons}.svg")
