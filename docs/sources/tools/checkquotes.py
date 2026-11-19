"""Check that every “quoted” fragment in README.md appears in some raw/official copy.

usage: python3 -I checkquotes.py <docs/sources dir>
"""
import glob, re, sys
root = sys.argv[1]
readme = open(root + '/README.md', encoding='utf-8').read()
def norm(t):
    t = re.sub(r'\s*<https?://[^>]+>', '', t)
    t = t.replace('’', "'").replace('‘', "'").replace('“', "'").replace('”', "'").replace('"', "'")
    return re.sub(r'\s+', ' ', t)
corpus = norm(' '.join(open(f, encoding='utf-8').read() for f in glob.glob(root + '/raw/official/*/*.md')))
quotes = re.findall(r'“([^”]{12,})”', readme)
bad = 0
for q in quotes:
    for frag in re.split(r'…+|\.\.\.', q):
        frag = norm(frag).strip(' ,.;:"\'（）()')
        if len(frag) < 10:
            continue
        if frag not in corpus:
            bad += 1
            print('MISSING:', frag[:120])
print(f'{len(quotes)} quotes checked, {bad} fragments missing')
