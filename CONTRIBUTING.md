# Contributing

Thanks for helping. Issues with a screenshot of the contact sheet (`sheet-<lang>.png`) or the page are the easiest to act on.

## Ground rules

- **Frames are pure functions of time.** Scene `draw(lt)` and style functions must not keep state or use `Math.random()` / `Date.now()`; use `hash()` / `rng(seed)`. Scrubbing, `?t=` stills and verification all depend on this.
- **Keep the output a single file.** No external scripts or assets beyond web fonts.
- **Engine vs parts.** Anything between `@@name` / `@@/name` markers in `engine.html` is a part that users rewrite per piece. Changes outside the markers (player, audio, helpers, progress bar) affect every piece — keep them backwards compatible with existing parts.
- **Docs follow code.** If you change a part's contract, a config field or a check, update `SKILL.md` and the relevant file in `references/`.

## Before opening a pull request

```bash
S=skills/motion-graphic
npm i --prefix $S/scripts puppeteer-core@23          # once

# the engine and every example must pass
node $S/scripts/check.js $S/assets/engine.html --out /tmp/mg-check-engine
node $S/scripts/check.js examples/clean-style.html --out /tmp/mg-check-clean

# split → build must round-trip the engine unchanged
python3 $S/scripts/assemble.py split $S/assets/engine.html /tmp/mg-parts
python3 $S/scripts/assemble.py build /tmp/mg-parts /tmp/mg-roundtrip.html
diff -q $S/assets/engine.html /tmp/mg-roundtrip.html
```

Look at the generated `sheet-*.png` files as well — the checks can't see overlapping text or an unreadable frame.

If you change the engine, run `bash examples/build.sh` so the prebuilt examples pick it up. Each `examples/<name>/` folder holds only the parts that differ from the engine.

## New style blocks and scene patterns

Additions to `references/styles.md` or `references/scene-patterns.md` are very welcome. Include the code, the config it expects (colours, fonts, groove), and a still or sheet showing it.
