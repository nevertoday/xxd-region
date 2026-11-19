#!/bin/bash
# usage: bash fetch-list.sh <list.tsv> <raw/official dir>
# Refetches every row of the list with fetch.py; skips rows whose output already exists unless FORCE=1.
here="$(cd "$(dirname "$0")" && pwd)"
while IFS=$'\t' read -r url out flags; do
  [[ -z "$url" || "$url" == \#* ]] && continue
  dest="$2/$out"
  mkdir -p "$(dirname "$dest")"
  [[ -s "$dest" && "$FORCE" != 1 ]] && continue
  python3 -I "$here/fetch.py" "$url" "$dest" $flags
done < "$1"
