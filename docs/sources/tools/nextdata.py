"""Dump every human-readable string in a Next.js page's __NEXT_DATA__ blob, with its JSON path.

usage: python3 -I nextdata.py <page.html> <url> <out.md> [path-filter-substring]
"""
import datetime
import json
import re
import sys


def walk(node, path, out):
    if isinstance(node, dict):
        for k, v in node.items():
            walk(v, f"{path}.{k}", out)
    elif isinstance(node, list):
        for i, v in enumerate(node):
            walk(v, f"{path}[{i}]", out)
    elif isinstance(node, str):
        s = re.sub(r"<[^>]+>", " ", node).strip()
        if s and not s.startswith(("http", "/", "#")) and re.search(r"[一-鿿A-Za-z]{2}", s):
            out.append((path, s))


def main():
    src, url, dst = sys.argv[1], sys.argv[2], sys.argv[3]
    filt = sys.argv[4] if len(sys.argv) > 4 else ""
    raw = open(src, encoding="utf-8").read()
    m = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', raw, re.S)
    if not m:
        print("no __NEXT_DATA__")
        return
    out = []
    walk(json.loads(m.group(1)), "$", out)
    stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    with open(dst, "w", encoding="utf-8") as f:
        f.write(f"Source URL: {url}\nFetched: {stamp} (curl, no login)\n"
                f"Extracted from the page's embedded __NEXT_DATA__ JSON (includes tab content not in the static HTML).\n\n---\n\n")
        for p, s in out:
            if filt in p:
                f.write(f"[{p}] {s}\n")
    print(len(out), "strings ->", dst)


if __name__ == "__main__":
    main()
