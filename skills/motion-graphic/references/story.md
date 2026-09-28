# Story and copy

## Structures

### 45–60 seconds (10–12 scenes)

The audience should know *what this is saying* within 30 seconds. Use only the rows you need.

| Part | Scene | Beats | Job |
|---|---|---|---|
| Opening | power-on / title | 6–8 | Switch on the world (metaphor) and land the name, brand or most striking image **by 2 s** (see Pace). Sound: `power` |
| Hook | the problem | 12 | One line the audience recognises. "I thought X was the problem — it wasn't" is strong (strike-through reversal) |
| Thesis | the claim | 8 | The one sentence of the whole piece. Biggest effect (dot-matrix word etc.) + `impact` |
| Proof ×3–5 | problem → fix | 10–12 each | One problem and its fix per scene. Show before and after inside the same scene when you can |
| Numbers | results | 12–16 | 3–4 figures, 4 beats each, each with a label and a one-line source |
| Trust | track record / cases / customers | 8 | Timeline, logos, a quote |
| Close | signature + call to action | 12 | Engraving + tagline + contact. The last frame becomes the poster |

### 30 seconds (talk opener, social teaser — ~7 scenes ≈ 74 beats)

Opening (6, its key line or image lands by 2 s) → hook (10) → thesis (10) → two proofs (12, 12) → one number (12) → close (12). Drop one proof to make room for a trust scene (8).

### 15 seconds (intro — 4 scenes ≈ 34 beats)

Cold open (4 — the title or the striking image is on screen within the first second) → thesis (10) → one number or proof (10) → close (10).

Beats → seconds: beats × 60 / BPM. At 140 BPM, 74 beats = 31.7 s.

## Pace

- **A hook within the first 2 s.** By t = 2 s (≈ 4.7 beats at 140 BPM, 3 beats at 90) the viewer must see something striking and readable: the brand, the question, the most surprising number or the key image of the metaphor. No empty or slow lead-in before it — a power-on or boot sequence runs *around* the hook, not ahead of it. If the first scene needs longer to build, open on its payoff and build the rest behind it.
- **Something new every 2–4 s.** At 140 BPM that is every 5–9 beats. A 12-beat scene (5.1 s) needs at least one change after its entrance — a second line, a bar filling, a counter, a state change, a camera move. The entrance alone is not enough. On the contact sheet, two stills of one scene that look the same mean a dead stretch.
- **Changes land on the beat**, and big moments on a bar line (every 4 beats), so the soundtrack carries the pace.
- The exception is the close: the last frame may hold for 1–2 s so the call to action can be read and clicked.

## Copy

- **Plain language.** Domain jargon from the metaphor (p90, yield, ECC…) belongs only in HUD labels and kickers. Body copy should be readable by someone outside the field. In production, "remove the jargon" was the first thing the client asked to undo.
- **Per scene: 1 headline + 1–3 supporting lines.** A headline is one breath (≈ 6–8 English words, ≈ 15 Korean characters). Reading time ≈ characters × 0.08 s + 1 s for CJK, words × 0.3 s + 1 s for Latin scripts — if the scene is shorter, cut copy or add beats.
- **Speak from the audience's side.** "A tool I built" < "Work that continues after the AI forgets".
- When producing several languages, write **natural sentences with the same meaning**, not literal translations. `fit` shrinks long lines, but if a line shrinks below ~60 % of its size, shorten the sentence.
- Kickers: Latin capitals separated by `·` — `PROBLEM 01 · MEMORY LOSS`, `IN NUMBERS · BEFORE AND AFTER`.

## Numbers

- **Every number is in `facts.md` with its source.** Put the period and scope on the detail line under the figure ("Jan–Sep 2026", "tool A only, tool B excluded").
- **Put an honest companion metric next to a big number.** If a headline says "12× more commits", show the same-period change in actual code output as a bar on the same scale. The more a number looks like hype, the more the companion builds trust.
- Comparison bars share one scale. No log scales, no truncated axes.
- **Rounding.** Follow the notation the source already uses publicly (e.g. a README that says "33×"). 33× vs 33.93× is the same number rounded differently — don't ask the user; record the decision in `facts.md` ("33.93 → 33×, README notation"). Only ask when the values actually differ (different period or scope). On screen, a number is always the same string (bar labels come from the third field of `nBar`).
- State the baseline of every multiple or percentage: "Feb–May average → September".
- When a number changes, update every language, the stills and the og image.

## Record settled decisions

Wording and notation the user settles during the work (titles, dates, metric baselines, button labels, things to leave out) go into a "don't change" list in `HANDOFF.md` in the working folder, so a later session doesn't "improve" them back.
