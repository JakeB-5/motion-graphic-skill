# Storyboard — "Webb: a golden time machine" (45 s, EN + KO)

Approved 2026-09-29. This file is kept in sync with the build, and every change from the approved version is listed under "Changes since approval" at the end.

**Style:** deep-space dark (`bg #05070D`, `ink #F3EFE6`, `dim #8C95A8`, `acc` Webb-mirror gold `#E9B44C`, `alt` cold-side cyan `#69C8FF`, `bad` sun-side red `#FF5B45`) · a faint seeded star field with slow parallax, a soft vignette and no scanlines · no frame chrome at all: each scene carries a small localised kicker (English in DM Mono capitals, Korean in Noto Sans KR) inside its own headline block · Inter Black headlines, Noto Sans KR Black for Korean, DM Mono only for decorative Latin labels · headlines use `rise` or a spring mask reveal, objects move on springs (`heavy` for the mirror, `default` for panels and bars, `snappy` for chips), and there is one split-free `slam` for the 13.5-billion number · cuts are a hexagon-tile wipe that grows over the outgoing scene (last 0.2 s) and shrinks away from the same origin, which differs by cut (the Moon side, the Sun side, out of the mirror…) · `soft` groove at 120 BPM · **because** this is a public science explainer and the gold 18-hex mirror is the Webb image everyone already knows. Gold on near-black reads from across a bright lobby, NASA's own Webb pages are black and white in Inter and DM Mono, and the three accents each mean something: gold = Webb, red = the Sun's heat, cyan = the cold side of space.

**Concept (one world):** Webb is a time machine: the farther it looks, the older the light it catches. The hexagon is the visual system throughout. The 18-segment mirror assembles in the first second, becomes the "bucket" that catches light, folds for launch, and later becomes the window we look through at a drawn deep field. It re-forms in the last scene, so the loop closes on the same object it opened with. Time-machine words ("A GOLDEN TIME MACHINE", "LOOK-BACK TIME") live only in the kickers. Body copy stays plain.

**Timing:** 120 BPM, 1 beat = 0.5 s · 9 scenes · **90 beats = 45.0 s**. The hook is on screen by 0.6 s (title) and 1.0 s (mirror locked). Every scene has at least one change after its entrance.

**Numbers:** every figure is in `facts.md` (F1–F24) with its NASA source.

| # | id | beats (time) | kicker (EN / KO) | one-line message | visual | key motion | sound |
|---|---|---|---|---|---|---|---|
| 1 | `open` | 8 (0.0–4.0 s) | A GOLDEN TIME MACHINE / 황금빛 타임머신 | This is Webb, the largest telescope ever placed in space (F1). | The 18 gold hexagons are loosely scattered at frame 0 (the loop seam) and snap into the primary mirror, centre-right. The title sits right-aligned under the mirror, so the left-centre stays empty for the play button in the poster frame (`posterT` 2.4 s). | Segments spring in (`heavy`, 0.03 s stagger), locked by 1.0 s. Title `rise` at 0.95 s, after the last segment lands so nothing crosses it. Beat 2: the secondary-mirror booms grow in from the rim, and a slow 1.00 → 1.06 push-in starts. Kicker types on at 1.85 s. Subline at beat 3, glint at beat 5. | `power` + pad · a `tick` per segment · `bell` + `chord` at beat 2 · `blip` on the kicker · `scan` with the glint · `riser` |
| 2 | `oldlight` | 8 (4.0–8.0 s) | LIGHT TAKES TIME / 빛에도 시간이 걸린다 | Looking far means looking back in time; moonlight is 1.3 s old (F2). | Earth left, Moon right. A light pulse crosses in **real time** (1.3 s) with a running "0.0 → 1.3 s" counter. Then the view pulls back: Earth and Moon shrink to the left as warm distant galaxies appear across the centre and right. | The pulse moves at constant speed (it's light). Pull-back at beat 4 (`heavy`). The caption takes over from the counter. | `blip` on departure · `correct` on arrival · `whoosh` on the pull-back · `riser` |
| 3 | `reach` | 10 (8.0–13.0 s) | LOOK-BACK TIME / 과거를 보는 망원경 | **Thesis:** Webb sees light that left over 13.5 billion years ago, from the first galaxies (F3). | A giant "13.5 billion years ago" (KO "135억 년"), with faint first-galaxy glows at the right. A full-width universe timeline, Big Bang → Today (13.8 billion years, F4). A gold bracket reaches back 13.5/13.8 of it. | The number slams in and counts up at 0, with the lead line revealed by a mask. Supporting line at beat 2. Bar draws at beat 4, bracket sweeps back at beats 6–8. | `impact` + `roll` · `whoosh` · `scan` · `stamp` · arp on |
| 4 | `mirror` | 10 (13.0–18.0 s) | THE LIGHT BUCKET / 빛을 모으는 양동이 | 18 gold mirrors act as one 6.5 m mirror, with ≈ 6× Hubble's light-collecting area (F5–F8). | Opens as a 3.2× close-up on one gold segment that springs back to the whole mirror (right), while the segments light one at a time in a sweep. A vertical 6.5 m dimension line. Beat 5: Hubble's 2.4 m mirror slides in **at the same scale**, with its own dimension line. Beat 7: the "≈ 6×" badge. | Segment sweep 0.3–1.5 s. Dimension lines spring from their centres. Hubble slides in (`default`), and the badge pops with `eBack`. | `whoosh` on the pull-back · a `tick` per segment · `whoosh` for Hubble · `stamp` · `riser` |
| 5 | `cold` | 12 (18.0–24.0 s) | INFRARED / 적외선 | Old light arrives as faint heat (infrared), so a tennis-court-sized, five-layer sunshield keeps Webb cold (F9–F12). | The Sun's glow at the left and heat rays hitting five sunshield layers, weaker past each one. Readouts: Sun side **85 °C** (185 °F), space side **−233 °C** (−388 °F). A small Webb on the cold side. Beat 8: an **SPF / 1 million** stamp. | Layers drop in 0.1 s apart (`default`). The cold readout counts down to −233 as the last layer lands. The headline is revealed by a mask, the subline at beat 3, and the stamp lands with `eBack`. | `whoosh` · 5 `blip`s (falling) · `down` · `stamp` · lite groove |
| 6 | `fold` | **10** (24.0–29.0 s) | ORIGAMI / 종이접기 | It folded to fit inside the rocket, then unfolded in space over two weeks (F13–F15). | The whole observatory (mirror on its tower above the five-layer sunshield). The wings swing back, the sunshield concertinas, and it all packs into a rocket-fairing outline. Beat 4: it unfolds. Decorative label: "50+ DEPLOYMENTS · 178 RELEASE MECHANISMS". | Fold on `default` (0.25 s), unfold on `heavy` (beat 4). Subline at beat 4.5, label types on at beat 5.6. | `whoosh` + `down` · `tick` × 2 · `whoosh` · `correct` · `blip` · `riser` |
| 7 | `orbit` | 10 (29.0–34.0 s) | DESTINATION L2 / 목적지 L2 | Its home is 1.5 million km from Earth; the Moon's orbit is only about a quarter of the way (F16–F18). | Map at the top (to scale): Earth, the Moon's orbit ring at ¼, L2. **The headline sits at the bottom** in this scene. Webb coasts from Earth to L2, then circles it. On arrival a bracket shows "1.5 million km" (the headline's exact string). Date chips: launch Dec 25, 2021 · arrived Jan 24, 2022. | The line draws (`default`). The trip is a hard push and then a coast (beats 2–6). Chips pop (`snappy`) and the distance bracket springs out at beat 6. | `blip` + `scan` · `bell` on arrival · arp on |
| 8 | `seen` | 12 (34.0–40.0 s) | FIRST LIGHT / 첫 빛 | July 2022: thousands of galaxies in one image. The farthest confirmed galaxy dates from about 280 million years after the Big Bang (F19–F21, F24). | Beats 0–6.5: a **drawn, stylised deep field** seen through the 18-hex mirror window, labelled "ILLUSTRATION" / "그림으로 표현한 모습". It is not the SMACS 0723 image and carries no credit. From beat 6.5: the window shrinks to the top-right. Timeline Big Bang → Today, with a zoom into the first 1 billion years: Hubble ≈ 500 million years (companion), Webb ≈ 280 million years (MoM-z14, confirmed 2025). | Window segments grow on `heavy` with a slow zoom. Headlines swap via `swapAlpha` and a mask reveal. The Hubble marker lands at +0.6 s after the swap, the Webb marker at +1.25 s (`snappy`). | `chord` + `bell` · `whoosh` · `tick` · `stamp` · full groove |
| 9 | `close` | **10** (40.0–45.0 s) | — | Built by NASA, ESA and CSA with thousands of people from 14 countries. Explore Webb at science.nasa.gov/mission/webb (F22–F23). | The assembled mirror back in its scene-1 position (the loop seam), with "NASA · ESA · CSA" and the 14-countries line in the title's slot. Beat 4: an "Explore Webb" link card at the left (`CFG.endCta`, active from beat 6). The last ~1.5 s hold. | Mirror settles (`heavy`), people line at beat 2, card slides in (`default`) at beat 4, glint at beat 7, then hold. | `blip` · `impact` (soft) + `stamp` + `chord` + `bell` on the card · `scan` |

## Copy (EN / KO), as built

| # | EN | KO |
|---|---|---|
| 1 | **James Webb Space Telescope** · The largest telescope ever placed in space | **제임스 웹 우주망원경** · 우주에 올린 가장 큰 망원경 |
| 2 | **Looking far means looking back in time.** · Moonlight is 1.3 seconds old when it reaches us. | **멀리 볼수록, 더 먼 과거를 봅니다** · 달빛도 1.3초 전에 출발한 빛입니다. |
| 3 | Webb sees light that left over · **13.5** billion years ago · from the first galaxies born after the Big Bang · Big Bang / Today / Universe: about 13.8 billion years old | 웹 망원경이 보는 빛은 · **135억** 년 · 넘게 날아온 빛, 빅뱅 직후 첫 은하들의 빛입니다 · 빅뱅 / 오늘 / 우주 나이 약 138억 년 |
| 4 | **18 gold mirrors act as one** · ≈ 6× Hubble's light-collecting area · Webb · 6.5 m / Hubble · 2.4 m | **금빛 거울 18장이 하나처럼** · 빛 모으는 면적, 허블의 약 6배 · 웹 · 6.5 m / 허블 · 2.4 m |
| 5 | **Old light arrives as infrared: faint heat** · A five-layer sunshield the size of a tennis court keeps Webb cold · SUN SIDE 85 °C (185 °F) / SPACE SIDE −233 °C (−388 °F) · SPF / 1 million | **오래된 빛은 적외선, 희미한 열로 옵니다** · 테니스장만 한 5겹 차양막이 망원경을 차갑게 지킵니다 · 태양 쪽 85 °C / 우주 쪽 −233 °C · SPF / 100만 |
| 6 | **It folded to fit inside the rocket** · …and unfolded in space over two weeks · 50+ DEPLOYMENTS · 178 RELEASE MECHANISMS | **로켓에 싣기 위해 접었습니다** · 우주에서 2주에 걸쳐 펼쳐졌습니다 · 50단계 이상 전개 · 해제 장치 178개 |
| 7 | **Its home: 1.5 million km from Earth** · (1 million miles) · Moon's orbit · about a quarter of the way · 1.5 million km · LAUNCH Dec 25, 2021 / ARRIVED AT L2 Jan 24, 2022 | **지구에서 150만 km 떨어진 곳** · 달 궤도 · 약 4분의 1 지점 · 150만 km · 발사 2021년 12월 25일 / L2 도착 2022년 1월 24일 |
| 8 | **July 2022 · Thousands of galaxies in a single image** · ILLUSTRATION → **The farthest confirmed galaxy: About 280 million years after the Big Bang** · Seen by Webb · confirmed 2025 · Webb · MoM-z14 / Hubble · about 500 million years · 1 billion years · Big Bang / Today | **2022년 7월 · 사진 한 장에 은하 수천 개** · 그림으로 표현한 모습 → **가장 멀리서 확인된 은하, 빅뱅 후 약 2억 8천만 년** · 웹이 관측 · 2025년 확인 · 웹 · MoM-z14 / 허블 · 약 5억 년 · 10억 년 · 빅뱅 / 오늘 |
| 9 | **NASA · ESA · CSA** · Built by thousands of people from 14 countries · card: Explore Webb / science.nasa.gov/mission/webb | **NASA · ESA · CSA** · 14개국 수천 명이 함께 만들었습니다 · 카드: 웹 망원경 더 알아보기 / science.nasa.gov/mission/webb |

Dock button (`ui.ctaLab`): `EXPLORE WEBB` / `웹 망원경 알아보기` · `ctaSub`: `science.nasa.gov/mission/webb` · link: https://science.nasa.gov/mission/webb/

## Deliverables and lobby notes

- **Deliverable:** `./index.html`, with English and Korean in one file (`?lang=en` / `?lang=ko`, English by default). It is a single file with no image or audio assets; only Google Fonts are fetched.
- **Video:** only the English version is recorded, as `./film.mp4` with `record.js` (decision B).
- **No sound needed:** the story never depends on audio.
- **Loop seam:** the last frame (assembled mirror) cuts back to frame 0 (the same segments loosely scattered and re-forming).

## Decisions (approved)

- **A.** No image assets. The deep field is drawn procedurally, clearly stylised and labelled "ILLUSTRATION". It is not presented as SMACS 0723 and has no credit line.
- **B.** The HTML is the deliverable, plus the English MP4 only.

## Changes since approval

- **Beats:** `fold` 8 → 10 beats (its unfolding line needs reading time), `close` 12 → 10. The total is unchanged (90 beats = 45.0 s).
- **Frame:** the wordmark and hexagon page counter were removed after critique round 1 (they read as frame chrome). The scene codes became localised kickers inside each headline block.
- **Cuts:** the hex wipe now builds over the outgoing scene, and the origin differs per cut.
- **Copy:**
  - Fold headline: "Too big for any rocket, so it folded" → "It folded to fit inside the rocket" (KO "로켓에 싣기 위해 접었습니다"), which follows F13's wording.
  - Seen headline: now "July 2022 · Thousands of galaxies in a single image".
  - Moonlight caption: now a full sentence.
  - Stamp: now "SPF / 1 million".
- **Distance counter:** the rolling counter on the orbit map became a bracket that shows the headline's exact string on arrival.
- **Timeline inset:** the zoom in `seen` is labelled "1 billion years" (F24, added to `facts.md`).
- **Layout:** the mirror's dimension lines are vertical, matching the drawn heights at one scale. The orbit headline moved to the bottom of its frame.
- **Sound:** a second, softer `impact` lands on the closing link card. After round 2, the opening gained a pad and chord bed, FIRST LIGHT got the full groove, and redundant whooshes were cut.
- **Round 3:** the record headline keeps NASA's "about", and the marker became "Webb · MoM-z14" so the number appears once. The FIRST LIGHT window is visible from the cut (it springs open from 40 %). Sublines are 48 px (EN) and 50 px bold (KO). The 02 and 06 headlines use the mask reveal.
- **Round 2:** scene 4 now opens on a close-up of one segment, the title in scene 1 rises after the segments land, the cuts alternate between two tile sizes, and the fact labels are 40–44 px.
