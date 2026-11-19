#!/usr/bin/env python3
"""README 头图：一段循环播放的 SVG 动画，把一笔海外付款回到你卡上的三段路演一遍。

    python3 tools/build_hero.py

输出 assets/hero.svg（中文）和 assets/en/hero.svg（英文）。左边是标题和新手三课（课名从 src/data/nav.js 的 LESSONS 读），
右边是第 1 课讲的三段路：海外客户付款 → 你名下的收款账户 → 你自己的银行卡。一枚硬币沿着这条路往下走，
每过一段，旁边弹出这一段扣的钱（收款费、结算费、藏在汇率里的换汇费，只写名字不写数字），
走到换汇那里，美元变成人民币。第 1 课跟着硬币出发亮起，钱到卡上以后第 2、3 课再亮。
透明度只写在动画里，元素自己的属性就是最后的样子，所以不播动画的地方（静态渲染、系统设了「减少动效」）
看到的是钱已经到卡上、三段费用都在、三课全亮。不用 transform 属性：「减少动效」那条规则会把它清掉。
文字改 TEXT，时间改 T，位置改下面的常量。
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
REDUCE = "@media (prefers-reduced-motion:reduce){*{animation:none!important;opacity:1!important;transform:none!important}}"

TEXT = {
    "zh": {
        "brand": "跨境收款新手教程",
        "h1": ["海外的钱", "怎么收回国"], "h1_size": 62,
        "src": "对照外汇局规定和各家官方页面 · 非官方",
        "trip": "一笔付款回到你卡上的三段路",
        "demo": "示意",
        "stops": [("海外客户付款", "用 PayPal、电商平台或银行转账"),
                  ("你名下的收款账户", "钱先落在这里，还是美元"),
                  ("你自己的银行卡", "换成人民币到账")],
        "fees": ["收款费", "结算费", "换汇费藏在汇率里"],
    },
    "en": {
        "brand": "For beginners",
        "h1": ["Getting paid", "from abroad"], "h1_size": 62,
        "src": "Checked against official pages · unofficial",
        "trip": "One payment, three legs to your card",
        "demo": "Illustration",
        "stops": [("A client abroad pays", "By PayPal, a marketplace or a bank transfer"),
                  ("Your receiving account", "In your own name, still in USD"),
                  ("Your own bank card", "It arrives as RMB")],
        "fees": ["Receiving fee", "Settlement fee", "Conversion, inside the rate"],
    },
}

# 每件事发生的时间（秒）。leg 是硬币走的三段：客户 → 收款账户，收款账户 → 换汇处，换汇处 → 银行卡
T = {"lesson0": 0.5, "coin": 0.9, "leg1": (1.5, 2.9), "fee0": 2.1, "leg2": (3.8, 5.2), "fee1": 4.3, "fee2": 5.0,
     "fx": 5.2, "leg3": (5.6, 6.4), "tick": 6.8, "lesson1": 7.6, "lesson2": 8.2}

TX = 684                     # 硬币走的那条线
BX, BR = 724, 1160           # 三个站的方框左右边
STOP_TOP, BOX_H = (68, 250, 528), 92
STOP_Y = [y + BOX_H // 2 for y in STOP_TOP]
FEE_Y = (205, 386, 472)      # 三张费用卡的中线；第三张是换汇，硬币在这里从美元变成人民币
COIN_R = 20


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


def anim(name, frames, origin=None, total=DUR):
    o = f";transform-origin:{origin}" if origin else ""
    return f"@keyframes {name}{{{frames}}}.{name}{{animation:{name} {total}s infinite;transform-box:fill-box{o}}}"


def show(name, t):
    """t 秒淡入，播完淡出。"""
    return anim(name, f"0%,{pct(t)}{{opacity:0}}{pct(t + .45)},{pct(FADE_OUT)}{{opacity:1}}{pct(FADE_OUT + .6)},100%{{opacity:0}}")


def light(name, t, prop, off, on):
    """t 秒从 off 变成 on（元素自己的属性写 on，静态时就是亮的）。"""
    return anim(name, f"0%,{pct(t)}{{{prop}:{off}}}{pct(t + .3)},{pct(FADE_OUT)}{{{prop}:{on}}}{pct(FADE_OUT + .6)},100%{{{prop}:{off}}}")


def txt(x, y, s, size, fill, font, weight=400, anchor="start", cls=""):
    c = f' class="{cls}"' if cls else ""
    return f'<text{c} x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{escape(s)}</text>'


def mark(cx, cy, r, fill=INK, arrow=BG):
    """本站标志：一枚硬币，中间一个往左下指的箭头（钱进来）。和 public/favicon.svg 同一个形状。"""
    k = r / 10
    p = lambda dx, dy: f"{cx + dx * k:.1f} {cy + dy * k:.1f}"
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}"/>'
            f'<path d="M{p(3.6, -3.6)} L{p(-3.1, 3.1)} M{p(-3.1, -1.9)} V{cy + 3.1 * k:.1f} H{cx + 1.9 * k:.1f}" fill="none" stroke="{arrow}" stroke-width="{2 * k:.1f}"/>')


def tick_box(x, y, s, cls=""):
    c = f' class="{cls}"' if cls else ""
    return (f'<g{c}><rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{HOT}"/>'
            f'<path d="M{x + s * .24:.1f} {y + s * .52:.1f} l{s * .2:.1f} {s * .2:.1f} l{s * .34:.1f} -{s * .38:.1f}" stroke="{BG}" stroke-width="{s * .12:.1f}" fill="none"/></g>')


def id_card(x, y, s=1.0):
    """身份证：一张卡，左边一个头像，右边两行字。(x, y) 是左上角，原大 44×30。"""
    p = lambda v: f"{v * s:.1f}"
    return (f'<rect x="{x}" y="{y}" width="{p(44)}" height="{p(30)}" fill="none" stroke="{INK}" stroke-width="{p(3)}"/>'
            f'<circle cx="{x + 13 * s:.1f}" cy="{y + 12 * s:.1f}" r="{p(4.5)}" fill="{INK}"/>'
            f'<rect x="{x + 6 * s:.1f}" y="{y + 19 * s:.1f}" width="{p(14)}" height="{p(5)}" fill="{INK}"/>'
            f'<rect x="{x + 25 * s:.1f}" y="{y + 9 * s:.1f}" width="{p(13)}" height="{p(3)}" fill="{MUTED}"/>'
            f'<rect x="{x + 25 * s:.1f}" y="{y + 17 * s:.1f}" width="{p(10)}" height="{p(3)}" fill="{MUTED}"/>')


def doc(x, y, s=1.0):
    """一页材料：折角的纸，三行字。(x, y) 是左上角，原大 30×38。"""
    p = lambda v: f"{v * s:.1f}"
    lines = "".join(f'<rect x="{x + 7 * s:.1f}" y="{y + (15 + 7 * i) * s:.1f}" width="{p(16 - 5 * (i == 2))}" height="{p(3)}" fill="{MUTED}"/>' for i in range(3))
    return (f'<path d="M{x} {y} h{p(20)} l{p(10)} {p(10)} v{p(28)} h-{p(30)} Z" fill="none" stroke="{INK}" stroke-width="{p(3)}" stroke-linejoin="miter"/>{lines}')


def globe(cx, cy, r):
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{INK}" stroke-width="4"/>'
            f'<ellipse cx="{cx}" cy="{cy}" rx="{r * .42:.1f}" ry="{r}" fill="none" stroke="{INK}" stroke-width="3"/>'
            f'<path d="M{cx - r} {cy} H{cx + r} M{cx - r * .86:.1f} {cy - r * .5:.1f} H{cx + r * .86:.1f} M{cx - r * .86:.1f} {cy + r * .5:.1f} H{cx + r * .86:.1f}" stroke="{INK}" stroke-width="2"/>')


def account(x, y):
    """收款账户：一张对账单，顶上一条墨色的头，余额一行是主色。(x, y) 是左上角，48×40。"""
    return (f'<rect x="{x}" y="{y}" width="48" height="40" fill="none" stroke="{INK}" stroke-width="4"/>'
            f'<rect x="{x}" y="{y}" width="48" height="11" fill="{INK}"/>'
            f'<rect x="{x + 9}" y="{y + 19}" width="22" height="5" fill="{HOT}"/>'
            f'<rect x="{x + 9}" y="{y + 29}" width="30" height="4" fill="{MUTED}"/>')


def bank_card(x, y):
    """银行卡：和分享大图（tools/og.html）里那张卡同一个画法。(x, y) 是左上角，54×36。"""
    return (f'<rect x="{x}" y="{y}" width="54" height="36" fill="none" stroke="{INK}" stroke-width="4"/>'
            f'<rect x="{x}" y="{y + 9}" width="54" height="7" fill="{MUTED}"/>'
            f'<rect x="{x + 8}" y="{y + 24}" width="16" height="4" fill="{INK}"/>')


def coin(cy, glyph, cls):
    return (f'<g class="{cls}"><circle cx="{TX}" cy="{cy}" r="{COIN_R}" fill="{HOT}"/>'
            f'{txt(TX, cy + 8, glyph, 22, BG, MONO, 700, "middle")}</g>')


def svg(lang):
    t, f = TEXT[lang], FONT[lang]
    lessons = [it[lang][0] for it in read_lessons()]
    y_a, y_b, y_c = STOP_Y
    fx = FEE_Y[2]
    dy = lambda y: f"translateY({y - y_c}px)"
    (l1a, l1b), (l2a, l2b), (l3a, l3b) = T["leg1"], T["leg2"], T["leg3"]
    frac = (fx - y_b) / (y_c - y_b)

    css = [light("s0", T["lesson0"], "fill", LINE, HOT), light("s0t", T["lesson0"], "fill", MUTED, INK)]
    css += [light(f"s{i}", T[f"lesson{i}"], "fill", LINE, HOT) + light(f"s{i}t", T[f"lesson{i}"], "fill", MUTED, INK) for i in (1, 2)]
    css += [show(f"fee{i}", T[f"fee{i}"]) for i in range(3)]
    css += [light("dot0", T["coin"], "fill", LINE, HOT), light("dot1", l1b, "fill", LINE, HOT), light("dot2", l3b, "fill", LINE, HOT),
            light("boxc", l3b, "stroke", LINE, HOT), show("tick", T["tick"])]
    css.append(anim("usd", f"0%,{pct(T['coin'])}{{opacity:0;transform:{dy(y_a)}}}"
                           f"{pct(T['coin'] + .3)},{pct(l1a)}{{opacity:1;transform:{dy(y_a)}}}"
                           f"{pct(l1b)},{pct(l2a)}{{opacity:1;transform:{dy(y_b)}}}"
                           f"{pct(l2b)}{{opacity:1;transform:{dy(fx)}}}"
                           f"{pct(T['fx'] + .25)},100%{{opacity:0;transform:{dy(fx)}}}"))
    css.append(anim("rmb", f"0%,{pct(T['fx'])}{{opacity:0;transform:{dy(fx)}}}"
                           f"{pct(T['fx'] + .25)},{pct(l3a)}{{opacity:1;transform:{dy(fx)}}}"
                           f"{pct(l3b)},{pct(FADE_OUT)}{{opacity:1;transform:none}}"
                           f"{pct(FADE_OUT + .6)},100%{{opacity:0;transform:none}}"))
    css.append(anim("seg1", f"0%,{pct(l1a)}{{transform:scaleY(0);opacity:1}}{pct(l1b)},{pct(FADE_OUT)}{{transform:scaleY(1);opacity:1}}"
                            f"{pct(FADE_OUT + .6)},100%{{transform:scaleY(1);opacity:0}}", "50% 0"))
    css.append(anim("seg2", f"0%,{pct(l2a)}{{transform:scaleY(0);opacity:1}}{pct(l2b)},{pct(l3a)}{{transform:scaleY({frac:.3f});opacity:1}}"
                            f"{pct(l3b)},{pct(FADE_OUT)}{{transform:scaleY(1);opacity:1}}{pct(FADE_OUT + .6)},100%{{transform:scaleY(1);opacity:0}}", "50% 0"))
    css.append(REDUCE)

    stops = " → ".join(s[0] for s in t["stops"])
    label = f'{"".join(t["h1"]) if lang == "zh" else " ".join(t["h1"])}. {t["trip"]}: {stops}; {", ".join(t["fees"])}. ' + " · ".join(lessons)
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="{escape(label)}">',
           f"<style>{''.join(css)}</style>",
           f'<rect width="{W}" height="{H}" fill="{BG}"/>']

    # 左栏：标志、标题、出处、新手三课
    out.append(mark(78, 64, 14))
    out.append(txt(104, 74, t["brand"], 22, INK, f, 600))
    out.append(txt(64, 182, t["h1"][0], t["h1_size"], INK, f, 700))
    out.append(txt(64, 252, t["h1"][1], t["h1_size"], HOT, f, 700))
    out.append(txt(64, 302, t["src"], 20, MUTED, f))
    for i, title in enumerate(lessons):
        y = 372 + i * 62
        out.append(f'<rect class="s{i}" x="64" y="{y}" width="34" height="34" fill="{HOT}"/>')
        out.append(txt(81, y + 23, f"0{i + 1}", 16, BG, MONO, 700, "middle"))
        out.append(txt(114, y + 24, title, 22, INK, f, 600, cls=f"s{i}t"))

    # 右栏：三个站、连着它们的线、三张费用卡
    out.append(txt(TX - COIN_R, 44, t["trip"], 16, MUTED, f, 600))
    out.append(f'<rect x="{TX - 2}" y="{y_a}" width="4" height="{y_c - y_a}" fill="{LINE}"/>')
    out.append(f'<rect class="seg1" x="{TX - 2}" y="{y_a}" width="4" height="{y_b - y_a}" fill="{HOT}"/>')
    out.append(f'<rect class="seg2" x="{TX - 2}" y="{y_b}" width="4" height="{y_c - y_b}" fill="{HOT}"/>')
    icons = [globe(772, y_a, 22), account(748, y_b - 20), bank_card(745, y_c - 18)]
    for i, ((title, sub), top, icon) in enumerate(zip(t["stops"], STOP_TOP, icons)):
        cls = ' class="boxc"' if i == 2 else ""
        stroke = HOT if i == 2 else LINE
        out.append(f'<rect{cls} x="{BX}" y="{top}" width="{BR - BX}" height="{BOX_H}" fill="{PANEL}" stroke="{stroke}" stroke-width="2"/>')
        out.append(icon)
        out.append(txt(820, top + 40, title, 22, INK, f, 700))
        out.append(txt(820, top + 68, sub, 16, MUTED, f, 500))
        out.append(f'<rect class="dot{i}" x="{TX - 8}" y="{STOP_Y[i] - 8}" width="16" height="16" fill="{HOT}"/>')
    out.append(tick_box(BR - 48, STOP_TOP[2] + 20, 28, "tick"))
    for i, (fee, y) in enumerate(zip(t["fees"], FEE_Y)):
        w = int(width(fee, 18)) + 58
        dash = ' stroke-dasharray="6 5"' if i == 2 else ""
        out.append(f'<g class="fee{i}"><path d="M{TX + 2} {y} H{BX}" stroke="{LINE}" stroke-width="2"/>'
                   f'<rect x="{BX}" y="{y - 20}" width="{w}" height="40" fill="{PANEL}" stroke="{HOT if i < 2 else MUTED}" stroke-width="2"{dash}/>'
                   f'{txt(BX + 14, y + 7, "−", 20, HOT, MONO, 700)}{txt(BX + 36, y + 7, fee, 18, INK, f, 600)}</g>')

    # 硬币：两枚都停在银行卡那一站，人民币那枚画在上面，所以静态时看到的是人民币
    out.append(coin(y_c, "$", "usd"))
    out.append(coin(y_c, "¥", "rmb"))
    out.append(txt(BR, H - 14, t["demo"], 14, MUTED, f, 400, "end"))
    out.append("</svg>")
    return "".join(out) + "\n"


if __name__ == "__main__":
    for lang, sub in [("zh", ""), ("en", "en")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, "hero.svg"), "w") as fh:
            fh.write(svg(lang))
        print(f"wrote assets/{sub + '/' if sub else ''}hero.svg")
