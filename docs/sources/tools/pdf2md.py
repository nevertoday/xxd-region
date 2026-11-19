"""Extract text from a downloaded PDF and save it with a URL/date header.

usage: venv/bin/python -I pdf2md.py <file.pdf> <source-url> <out.md>
"""
import datetime
import sys

from pypdf import PdfReader


def main():
    src, url, dst = sys.argv[1], sys.argv[2], sys.argv[3]
    reader = PdfReader(src)
    pages = [p.extract_text() or "" for p in reader.pages]
    stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    with open(dst, "w", encoding="utf-8") as f:
        f.write(f"Source URL: {url}\nFetched: {stamp} (curl, no login; text extracted from PDF with pypdf, layout not preserved)\n"
                f"Pages: {len(pages)}\n\n---\n\n")
        for i, t in enumerate(pages, 1):
            f.write(f"\n[page {i}]\n{t}\n")
    print(dst, len(pages), "pages", sum(len(t) for t in pages), "chars")


if __name__ == "__main__":
    main()
