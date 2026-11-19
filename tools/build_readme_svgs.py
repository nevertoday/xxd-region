#!/usr/bin/env python3
"""README 里的两张配图（SVG，轻动画，和头图 hero.svg 同一套深色风格，颜色、字体、图标都从 build_hero 拿）。

    python3 tools/build_readme_svgs.py

输出 assets/readme/<名字>.svg（中文）和 assets/en/readme/<名字>.svg（英文）：
  quota    5 万美元是一条快速通道，不是一堵墙：额度以内只凭身份证；真实的收入超过了，带上材料照样能结汇；
           还有一条本来就不用额度的路（支付机构、有交易记录的跨境电商）。三条路都通到「换成人民币」。
           依据第 2 课（src/pages/start/2-quota.mdx）：实施细则第二条，指引第五十四至五十六条、第六十六条、第一百三十七条，外汇局厦门分局的问答。
  lessons  新手入门三课：每课多长、学完你知道什么。课名和时间从 src/data/nav.js 的 LESSONS 读。
透明度只写在动画里，系统设了「减少动效」或者不播动画的地方，看到的都是最后的样子。
quota 里的硬币最后停在「换成人民币」那个框下面，被框盖住，所以静态图里看不到硬币。文字改 TEXT。
"""
import os
import re
from html import escape

from build_hero import BG, PANEL, INK, MUTED, HOT, LINE, MONO, FONT, REDUCE, id_card, doc, read_lessons, width, txt as t

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TEXT = {
    "zh": {
        "quota": {
            "head": "5 万美元是一条快速通道，不是一堵墙",
            "lanes": [
                ("额度以内", "每人每年等值 5 万美元，只凭身份证就能办", "去银行柜台、用网银或者手机银行都行"),
                ("超过额度", "真实的收入，带上材料照样能结汇", "带上身份证和写着交易金额的材料，比如合同、发票、付款记录，到银行办"),
                ("不占额度", "有些结汇本来就不用额度", "支付机构外汇业务下的个人结售汇；跨境电商有交易额材料或交易电子信息"),
            ],
            "dest": ("换成人民币", "这一步叫结汇"),
            "notes": ["额度按自然年算，年底清零。客户把美元付进你的外币账户不用额度，换成人民币那一下才用。",
                      "某一家收款平台打到卡上的人民币算不算「不占额度」，说不准，先问它或你的开户银行。"],
        },
        "lessons": {"num": "第 {n} 课", "get_label": "学完你知道：",
                    "get": ["钱回国的三段路，每段扣什么钱", "额度管什么，超过了要带什么材料", "你能开哪些账户，为什么只能用自己的身份"]},
    },
    "en": {
        "quota": {
            "head": "The USD 50,000 quota is a fast lane, not a wall",
            "lanes": [
                ("Within the quota", "USD 50,000 a year, with just your ID", "At the bank counter, online, or in your bank's app"),
                ("Above it", "Real income still gets settled", "Bring your ID and documents showing the amount, like a contract or invoice"),
                ("No quota used", "Some settlements never use the quota", "A payment institution's FX business; e-commerce with transaction records"),
            ],
            "dest": ("Into RMB", "That's settlement"),
            "notes": ["The quota runs by calendar year and doesn't carry over. USD paid into your account doesn't use it; changing it into RMB does.",
                      "Whether a particular provider's RMB payout counts as quota-free is unclear. Ask the provider or your bank."],
        },
        "lessons": {"num": "Lesson {n}", "get_label": "After this lesson, you know:",
                    "get": ["The three legs home, and what each one takes", "What the quota covers, and what to bring above it",
                            "Which accounts you can open, and why only in your name"]},
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
    for tok in re.findall(r"[^\s⺀-￿]+\s*|\s+|.[，、。；：）]?", s):
        if cur and width("".join(cur) + tok.rstrip(), size) > maxw:
            commas = [i for i, c in enumerate(cur) if c[-1] in "，、"]
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
    return (f"@keyframes {name}{{0%,{p(start)}{{opacity:0;transform:translateY(6px)}}{p(start + dur)},{p(end)}{{opacity:1;transform:translateY(0)}}"
            f"{p(end + .5)},100%{{opacity:0}}}}.{name}{{animation:{name} {total}s infinite;transform-box:fill-box}}")


def slide(name, total, start, stops):
    """一枚硬币：start 秒出现，按 stops [(秒, 离终点还差多少 px)] 往右走，最后一站是终点（0）。"""
    p = lambda s: pct(s, total)
    x0 = stops[0][1]
    frames = [f"0%,{p(start)}{{opacity:0;transform:translateX({x0}px)}}", f"{p(start + .3)}{{opacity:1;transform:translateX({x0}px)}}"]
    frames += [f"{p(s)}{{opacity:1;transform:translateX({dx}px)}}" for s, dx in stops]
    frames.append(f"{p(stops[-1][0] + .01)},100%{{opacity:1;transform:none}}")
    return f"@keyframes {name}{{{''.join(frames)}}}.{name}{{animation:{name} {total}s infinite}}"


def wrap_svg(w, h, css, body, label):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{escape(label)}">'
            f'<style>{css}{REDUCE}</style><rect width="{w}" height="{h}" fill="{BG}"/>{body}</svg>\n')


def quota(lang):
    T, f = TEXT[lang]["quota"], FONT[lang]
    W, TOTAL = 1200, 10.0
    x0, x1, dx0, dx1 = 40, 920, 960, 1160      # 三条路的左右边，「换成人民币」那个框的左右边
    lane_h, gap, top = 112, 14, 84
    coin_end = dx0 + 40                          # 硬币的终点藏在框下面
    css, out, coins = [], [], []
    out.append(t(x0, 52, T["head"], 26, INK, f, 700))
    styles = [  # 边框、标签底色、标签字色、路的颜色、虚线
        (HOT, HOT, BG, HOT, ""), (LINE, LINE, INK, MUTED, ""), (LINE, LINE, INK, MUTED, ' stroke-dasharray="8 6"')]
    tag_w = round(max(width(tag, 16) for tag, _, _ in T["lanes"]) + 28)
    times = [(.3, .7, [(.9, x0 + 32 - coin_end), (2.1, 0)]),
             (2.4, 2.8, [(3.0, x0 + 32 - coin_end), (3.8, 836 - coin_end), (4.3, 836 - coin_end), (4.9, 0)]),
             (5.1, 5.5, [(5.7, x0 + 32 - coin_end), (6.7, 0)])]
    for i, ((tag, title, sub), (stroke, tag_fill, tag_ink, road, dash), (t0, c0, stops)) in enumerate(zip(T["lanes"], styles, times)):
        y = top + i * (lane_h + gap)
        ry = y + 94
        g = [f'<g class="lane{i}"><rect x="{x0}" y="{y}" width="{x1 - x0}" height="{lane_h}" fill="{PANEL}" stroke="{stroke}" stroke-width="2"{dash}/>',
             f'<rect x="{x0 + 20}" y="{y + 18}" width="{tag_w}" height="30" fill="{tag_fill}"/>',
             t(x0 + 34, y + 39, tag, 16, tag_ink, f, 700),
             t(x0 + 20 + tag_w + 16, y + 41, title, 22, INK, f, 700),
             t(x0 + 20, y + 72, sub, 17, MUTED, f, 500),
             f'<path d="M{x0 + 20} {ry} H{dx0 - 10}" stroke="{road}" stroke-width="3"{dash}/>',
             f'<path d="M{dx0 - 18} {ry - 7} l8 7 l-8 7" stroke="{road}" stroke-width="3" fill="none"/>']
        if i == 0:
            g.append(id_card(846, y + 22))
        elif i == 1:
            g.append(id_card(790, y + 22) + doc(852, y + 18))
        out.append("".join(g) + "</g>")
        css.append(show(f"lane{i}", t0, TOTAL))
        coins.append(f'<circle class="coin{i}" cx="{coin_end}" cy="{ry}" r="9" fill="{HOT}"/>')
        css.append(slide(f"coin{i}", TOTAL, c0, stops))
    out += coins
    bottom = top + 3 * lane_h + 2 * gap
    cy = (top + bottom) // 2
    out.append(f'<rect x="{dx0}" y="{top}" width="{dx1 - dx0}" height="{bottom - top}" fill="{PANEL}" stroke="{HOT}" stroke-width="2"/>')
    out.append(t((dx0 + dx1) // 2, cy - 2, T["dest"][0], 26, INK, f, 700, "middle"))
    out.append(t((dx0 + dx1) // 2, cy + 30, T["dest"][1], 17, MUTED, f, 500, "middle"))
    out.append(f'<g class="notes">{lines(x0, bottom + 44, T["notes"], 17, MUTED, f, 30)}</g>')
    css.append(show("notes", 7.0, TOTAL))
    H = bottom + 44 + 30 * (len(T["notes"]) - 1) + 30
    label = f'{T["head"]}. ' + " ".join(f"{tag}: {title}. {sub}." for tag, title, sub in T["lanes"]) + f' → {T["dest"][0]}. ' + " ".join(T["notes"])
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
        for name, fn in [("quota", quota), ("lessons", lessons)]:
            with open(os.path.join(d, f"{name}.svg"), "w") as fh:
                fh.write(fn(lang))
        print("wrote", f"assets/{sub}/" + "{quota,lessons}.svg")
