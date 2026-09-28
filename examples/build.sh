#!/usr/bin/env bash
# Rebuild the prebuilt examples from the current engine plus each example's own parts.
# Each examples/<name>/ holds only the parts that differ from the engine (e.g. config.js, style.js).
set -euo pipefail
cd "$(dirname "$0")/.."
S=skills/motion-graphic
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
for dir in examples/*/; do
  name=$(basename "$dir")
  python3 "$S/scripts/assemble.py" split "$S/assets/engine.html" "$tmp/$name" > /dev/null
  cp "$dir"*.js "$tmp/$name/"
  python3 "$S/scripts/assemble.py" build "$tmp/$name" "examples/$name.html"
done
