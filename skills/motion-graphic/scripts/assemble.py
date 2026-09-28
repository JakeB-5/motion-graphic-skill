#!/usr/bin/env python3
"""Split an engine-based motion HTML into small editable parts, and assemble them back.

Editing a 600-line HTML with exact-match string edits is slow and error-prone, so the work happens in parts:

  assemble.py split <engine-or-built.html> <parts-dir>   # write parts/*.{html,js} + parts/_shell.html
  assemble.py build <parts-dir> <out.html>               # splice parts back into the shell, syntax-check the script

Parts (each is the text between `@@name` and `@@/name` markers in the shell):
  head.html     <title>, description, og/twitter meta, theme-color
  config.js     const CFG = {...}
  copy.js       I18N.<lang> = {...} blocks (delete a language's block for single-language output)
  style.js      the film's frame: drawBg(t), overlay(t), hud(t, sc), transition(sc, lt) — rewritten per topic
  geometry.js   shared precomputed shapes (TITLE, TRACES, ...) used by scenes
  scenes.js     S.<id> = { draw(lt, d), cues(d) } for every scene
  plan.js       const PLAN = [[id, beats, code], ...]
  ready.js      calls that must run after web fonts load (e.g. buildDots())

`split` on the pristine engine starts a new piece: `split "$SKILL_DIR/assets/engine.html" parts`.
`split` on a finished HTML resumes editing it later. The shell keeps everything else (player, audio, helpers) untouched.
"""
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile

PARTS = {"head": "html", "config": "js", "copy": "js", "style": "js", "geometry": "js", "scenes": "js", "plan": "js", "ready": "js"}


def block_re(name: str) -> re.Pattern:
    # opening marker line, body, closing marker line (JS `// @@x` or HTML `<!-- @@x -->`), indentation allowed
    return re.compile(
        r"(?P<open>^[ \t]*(?://|<!--) @@" + name + r"(?: -->)?[ \t]*\n)(?P<body>.*?)(?P<close>^[ \t]*(?://|<!--) @@/" + name + r"(?: -->)?[ \t]*$)",
        re.S | re.M,
    )


def split(src: pathlib.Path, out: pathlib.Path) -> None:
    text = src.read_text(encoding="utf-8")
    out.mkdir(parents=True, exist_ok=True)
    for name, ext in PARTS.items():
        m = block_re(name).search(text)
        if not m:
            sys.exit(f"marker @@{name} not found in {src} — is it built on assets/engine.html?")
        (out / f"{name}.{ext}").write_text(m.group("body"), encoding="utf-8")
    (out / "_shell.html").write_text(text, encoding="utf-8")
    print(f"split {src.name} → {out}/ : " + ", ".join(f"{n}.{e}" for n, e in PARTS.items()) + " (+ _shell.html, do not edit)")


def build(parts: pathlib.Path, dst: pathlib.Path) -> None:
    shell = parts / "_shell.html"
    if not shell.exists():
        sys.exit(f"{shell} missing — run `assemble.py split` first")
    text = shell.read_text(encoding="utf-8")
    for name, ext in PARTS.items():
        f = parts / f"{name}.{ext}"
        if not f.exists():
            continue
        body = f.read_text(encoding="utf-8")
        if body and not body.endswith("\n"):
            body += "\n"
        text, n = block_re(name).subn(lambda m: m.group("open") + body + m.group("close"), text, count=1)
        if n != 1:
            sys.exit(f"marker @@{name} not found in shell")
    dst.write_text(text, encoding="utf-8")
    # syntax-check the page script with node when available (catches a missing brace before the browser does)
    script = re.search(r"<script>(.*)</script>", text, re.S)
    node = shutil.which("node")
    if script and node:
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tf:
            tf.write(script.group(1))
        r = subprocess.run([node, "--check", tf.name], capture_output=True, text=True)
        pathlib.Path(tf.name).unlink(missing_ok=True)
        if r.returncode:
            sys.exit("script syntax error (line numbers count from <script>):\n" + re.sub(r"\S*" + re.escape(pathlib.Path(tf.name).name), "script", r.stderr))
    print(f"built {dst} ({len(text.splitlines())} lines){' · syntax ok' if script and node else ''}")


if __name__ == "__main__":
    if len(sys.argv) != 4 or sys.argv[1] not in ("split", "build"):
        sys.exit(__doc__)
    cmd, a, b = sys.argv[1], pathlib.Path(sys.argv[2]).expanduser(), pathlib.Path(sys.argv[3]).expanduser()
    split(a, b) if cmd == "split" else build(a, b)
