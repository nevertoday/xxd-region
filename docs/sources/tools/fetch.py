"""Fetch a URL with curl, turn the HTML into plain text, save it with a URL/date header.

usage: python3 -I fetch.py <url> <out.md> [--title "..."] [--en] [--html]
--en asks for English; --html drops application/json from the Accept header.
Prints one status line: OK / BLOCKED / FAIL, bytes, out path.
"""
import datetime
import html
import re
import subprocess
import sys
from html.parser import HTMLParser

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")
SKIP = {"script", "style", "noscript", "svg", "template", "iframe", "head"}
BLOCK = {"p", "div", "section", "article", "li", "tr", "br", "h1", "h2", "h3",
         "h4", "h5", "h6", "table", "ul", "ol", "dd", "dt", "header", "footer",
         "main", "aside", "nav", "blockquote", "pre", "td", "th", "summary", "details"}
BLOCK_MARKERS = ["Just a moment...", "cf-browser-verification", "Attention Required! | Cloudflare",
                 "challenge-platform", "Access Denied", "px-captcha", "Pardon Our Interruption"]


class Text(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.skip, self.href = [], 0, None
        self.title = ""
        self.in_title = False

    def handle_starttag(self, tag, attrs):
        if tag == "title":
            self.in_title = True
        if tag in SKIP:
            self.skip += 1
            return
        if self.skip:
            return
        if tag in BLOCK:
            self.out.append("\n")
        if tag in ("h1", "h2", "h3", "h4"):
            self.out.append("#" * int(tag[1]) + " ")
        if tag == "li":
            self.out.append("- ")
        if tag in ("td", "th"):
            self.out.append(" | ")
        if tag == "a":
            self.href = dict(attrs).get("href")

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag in SKIP:
            self.skip = max(0, self.skip - 1)
            return
        if self.skip:
            return
        if tag == "a" and self.href and self.href.startswith("http"):
            self.out.append(f" <{self.href}>")
        if tag == "a":
            self.href = None
        if tag in BLOCK:
            self.out.append("\n")

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if not self.skip:
            self.out.append(data)


def to_text(raw):
    p = Text()
    p.feed(raw)
    body = "".join(p.out)
    body = re.sub(r"[ \t\r\f\v]+", " ", body)
    body = re.sub(r" *\n *", "\n", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    return p.title.strip(), body.strip()


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    url, out = args[0], args[1]
    lang = "zh-CN,zh;q=0.9,en;q=0.8"
    if "--en" in sys.argv:
        lang = "en-US,en;q=0.9"
    # Some support.apple.com/en-us pages answer 404 when the Accept header lists application/json.
    accept = "text/html,application/xhtml+xml,*/*;q=0.8" if "--html" in sys.argv else \
        "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8"
    r = subprocess.run(["curl", "-sSL", "--compressed", "-m", "40", "-A", UA,
                        "-H", f"Accept-Language: {lang}",
                        "-H", f"Accept: {accept}",
                        "-w", "\n__HTTP__%{http_code} %{url_effective}", url],
                       capture_output=True)
    raw = r.stdout.decode("utf-8", "replace")
    m = re.search(r"\n__HTTP__(\d+) (\S*)$", raw)
    code, final = (m.group(1), m.group(2)) if m else ("000", url)
    raw = raw[: m.start()] if m else raw
    stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    if raw.lstrip().startswith("{") or raw.lstrip().startswith("["):
        title, body = "", raw
    else:
        title, body = to_text(raw)
    blocked = code in ("403", "429", "503") or any(b in raw[:20000] for b in BLOCK_MARKERS)
    status = "BLOCKED" if blocked else ("OK" if code.startswith("2") and len(body) > 300 else "FAIL")
    head = (f"Source URL: {url}\nFinal URL: {final}\nFetched: {stamp} (curl, no login)\n"
            f"HTTP status: {code}\nFetch status: {status}\nPage title: {html.unescape(title)}\n\n---\n\n")
    with open(out, "w", encoding="utf-8") as f:
        f.write(head + body + "\n")
    print(f"{status} {code} {len(body)}B {out} :: {title[:80]}")


if __name__ == "__main__":
    main()
