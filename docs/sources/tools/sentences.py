"""Print the sentences of a text file that contain any of the given keywords.

usage: python3 -I sentences.py <file> <kw1,kw2,...> [max]
Line breaks are removed first, so sentences split by PDF extraction rejoin.
"""
import re
import sys

text = open(sys.argv[1], encoding="utf-8").read()
text = re.sub(r"\[page \d+\]", "", text).replace("\n", "")
kws = sys.argv[2].split(",")
limit = int(sys.argv[3]) if len(sys.argv) > 3 else 20
hits = [s for s in re.split(r"(?<=[。？！?])", text) if any(k in s for k in kws)]
for s in hits[:limit]:
    print("-", s.strip()[:500])
print(f"({len(hits)} matches)")
