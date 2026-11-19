"""Fetch one X post through the public fxtwitter API and save it as a labelled community-experience file.

usage: python3 -I fxtweet.py <status_id> <out_dir>
Prints: id, author, date, views, likes, out path.
"""
import datetime
import json
import os
import subprocess
import sys


def main():
    sid, out_dir = sys.argv[1], sys.argv[2]
    api = f"https://api.fxtwitter.com/status/{sid}"
    r = subprocess.run(["curl", "-sS", "-m", "30", "-A", "region-sources-research/1.0", api],
                       capture_output=True)
    data = json.loads(r.stdout.decode("utf-8", "replace") or "{}")
    t = data.get("tweet") or {}
    if not t:
        print(f"FAIL {sid} {data.get('message') or data.get('code')}")
        return
    a = t.get("author") or {}
    art = t.get("article") or {}
    body = (t.get("raw_text") or {}).get("text") or t.get("text") or ""
    if art:
        blocks = (art.get("content") or {}).get("blocks") or []
        body = (art.get("title") or "") + "\n\n" + "\n".join(b.get("text", "") for b in blocks) or body
    stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    handle = a.get("screen_name", "unknown")
    path = os.path.join(out_dir, f"x-{handle}-{sid}.md")
    head = (
        "LABEL: USER EXPERIENCE (community post on X). Not an official source. "
        "Check every claim against raw/official before use.\n\n"
        f"Post URL: {t.get('url') or f'https://x.com/{handle}/status/{sid}'}\n"
        f"Fetched via: {api}\nFetched: {stamp}\n"
        f"Author: {a.get('name')} (@{handle}), followers: {a.get('followers')}\n"
        f"Posted: {t.get('created_at')}\n"
        f"Views: {t.get('views')}, likes: {t.get('likes')}, reposts: {t.get('retweets')}, replies: {t.get('replies')}, bookmarks: {t.get('bookmarks')}\n"
        f"Language: {t.get('lang')}\n\n---\n\n"
    )
    with open(path, "w", encoding="utf-8") as f:
        f.write(head + body.strip() + "\n")
    print(f"OK {sid} @{handle} {t.get('created_at')} views={t.get('views')} likes={t.get('likes')} {path}")


if __name__ == "__main__":
    main()
