# facts.md — skill intro (30 s, EN + KO)

Every fact, name and number that appears on screen, with its source. Paths are relative to the repository root.
Line numbers are from the v0.4.0 release (commit b380359).

## Names and identity

| On screen | Source | Notes |
|---|---|---|
| `motion-graphic` (skill name) | `skills/motion-graphic/SKILL.md:2` (`name: motion-graphic`); `README.md:1` | Always lower-case, with the hyphen |
| "for Codex & Claude Code" / "Codex · Claude Code 스킬" | `README.md:5` ("A Codex and Claude Code skill…"); `README.ko.md:5` | Product names spelled exactly `Codex`, `Claude Code` |
| `v0.4` | `CHANGELOG.md:3` ("## 0.4.0 — 2026-09-29"); `README.md:9` (badge "status-0.4") | Shown as `v0.4` (README badge notation) |
| `github.com/JakeB-5/motion-graphic-skill` | the brief; `README.md:117` (`git clone https://github.com/JakeB-5/motion-graphic-skill.git`) | CTA link: `https://github.com/JakeB-5/motion-graphic-skill` |
| `npx skills add JakeB-5/motion-graphic-skill --skill motion-graphic` | `README.md:107`; `README.ko.md:107` | Typed verbatim on the closing scene, broken before `--skill` onto a second line |
| `index.html` (label on the file sticker in `brief` and on its mini sticker in `outro`) | The file this film is delivered as (`./index.html`); `SKILL.md:8` ("one self-contained HTML file") | Illustrative file name |

## Claims (scene copy)

| # | On screen (EN / KO) | Source |
|---|---|---|
| C0 | Hook line in `hello`: "Motion graphics / from a brief." / "브리프로 만드는 / 모션그래픽." | `README.md:3` ("Hand Codex or Claude a brief. Get a motion graphic in one HTML file."); `README.md:5` ("turns a brief and reference material … into a beat-synced, 1920×1080 canvas motion graphic"); `README.ko.md:3` ("브리프를 주면, 모션그래픽이 HTML 한 파일로 나옵니다.") |
| C1 | "A brief in. One HTML file out." / "브리프를 넣으면, HTML 한 파일." | `README.md:3` ("Hand Codex or Claude a brief. Get a motion graphic in one HTML file."); `README.ko.md:3`; `SKILL.md:8` ("one self-contained HTML file") |
| C2 | Material chips: Docs · PDF · Numbers · Screenshots · URL / 문서 · PDF · 수치 · 스크린샷 · URL | `README.md:5` ("docs, PDFs, numbers, screenshots, URLs"); `README.ko.md:5` ("문서·PDF·수치·스크린샷·URL") |
| C3 | "No build step. No media files." / "빌드도, 영상·오디오 파일도 없이." | `README.md:83` ("No build step, no video, no audio assets."); `SKILL.md:8` ("no audio or video assets") |
| C4 | "Every move lands on the beat." / "모든 움직임이 박자 위에." | `README.md:84` ("Every motion is timed in beats … each sound effect lands on the same beat as the motion it belongs to") |
| C5 | "Music and effects synthesized live." / "음악·효과음은 브라우저에서 합성." | `README.md:85` ("synthesized live with Web Audio"); `README.ko.md:5` ("음악과 효과음은 브라우저에서 합성되고"); `SKILL.md:8` |
| C6 | Sound stickers: `slam` · `stamp` · `scan` · `laser` · `riser` | `README.md:85` ("a palette of effects (slam, scan, riser, stamp, laser, error → correct…)") |
| C7 | "A style picked for your topic." / "스타일은 주제에 맞게." | `README.md:86` ("The agent picks brightness, texture, frame, type, easing, transitions and music from the subject and audience") |
| C8 | Style cards: CONSOLE · CLEAN · EDITORIAL · POP | `skills/motion-graphic/references/styles.md:36,39,60,81` (blocks A Console, B Clean, C Editorial, D Pop); `README.md:86` (dark technical console / clean and light / cream paper and serif / flat pop) |
| C9 | "Plays on phones, too." / "폰에서도 그대로." | `README.md:87-88` ("Click or tap to play, drag the progress bar to scrub … full screen"; "Phone-ready. Portrait stacks the controls under the film; landscape gives the film the full height") |
| C10 | "Checked on 7 device layouts." / "7개 기기 레이아웃에서 검사." | `README.md:91` ("7 device layouts"); `SKILL.md:22,121` |
| C11 | Kicker "CRITIQUE · 7 AXES" | `README.md:92` ("scores the film on seven axes"); `CHANGELOG.md:12` ("Seven axes, each scored 1–10") |
| C12 | "Give your / README / a trailer." / "README에 / 예고편을 / 달아 보세요." | Tagline (not a factual claim). Grounded in `SKILL.md:141` ("If the user needs a video file (social posts, a README, a deck)") and `README.md:17` (samples embedded in the README) |
| C13 | "New in v0.4: / motion that settles." / "v0.4 새 기능: / 자연스럽게 멈추는 움직임." | `README.md:90` ("**Motion that settles.** Closed-form springs and multi-target tracks give moves overshoot and follow-through, while every frame stays a pure function of time."); `README.ko.md:90` ("**자연스럽게 멈추는 움직임.**"); `CHANGELOG.md:7` (0.4.0 — "Engine: closed-form `spring()`, `track()` … four `SPRING` presets (snappy, default, heavy, playful)") |
| C14 | Code label on the spring-curve sticker: `SPRING.playful` | `CHANGELOG.md:7` (preset names); `skills/motion-graphic/references/scene-patterns.md:30` (`SPRING.playful` · `[220, 16]` · ~13 % overshoot · 0.6 s — "stickers, mascots, badges in playful styles"). The curve drawn on the sticker is the same `spring(t, 220, 16)` that drives the card, so its overshoot on screen is the real one |
| C15 | Review-axis chips under the `score` headline: "7 axes" · hook · phone · motion · variety · composition · brand · sound / "7개 축" · 훅 · 폰 가독성 · 모션 · 다양성 · 구도 · 브랜드 · 사운드 | `README.md:92` ("scores the film on seven axes (hook in the first 2 s, readability at phone size, motion, variety, composition, brand accuracy, sound sync)"); `README.ko.md:92` ("7개 축(첫 2초 훅, 폰 크기 가독성, 모션, 다양성, 구도, 브랜드 정확도, 사운드 싱크)"). Shortened to one word per chip |

## Numbers

| On screen | Exact value | Source | Rounding / notation decision |
|---|---|---|---|
| `9 / 9` — "blind film pairs / won by 0.4 over 0.3" / "블라인드 비교 9쌍, / 모두 0.4 승" | 9 of 9 | `CHANGELOG.md:17` ("In a blind comparison on three prompts, 0.4 beat 0.3 on all nine film pairs.") | Shown as `9 / 9`. Scope on the detail line: blind comparison, 3 prompts, 0.4 vs 0.3. The counter shows the running tally `1 / 9` … `9 / 9` as the stamps land; the final string is `9 / 9` |
| Companion: `13 → 43 min` — "about 3× longer to make" / "대신 제작 시간은 약 3배" | 13 min → 43 min (ratio 3.31) | `CHANGELOG.md:17` ("each piece takes about three times as long (13 → 43 minutes)") | Source's own notation: "about three times" → `≈3×`. Bars drawn from the exact 13 and 43 on one shared linear scale starting at 0; labels are the strings `13 min` / `43 min` (KO `13분` / `43분`) |
| `7` device layouts | 7 | `README.md:91`; `SKILL.md:22` | — |
| `7` axes | 7 | `README.md:92`; `CHANGELOG.md:12` | — |
| `v0.4` | 0.4.0 | `CHANGELOG.md:3` | `v0.4` |

Not shown (considered and left out): 7-axis mean 6.00 → 6.89 and hook +2.45 (`CHANGELOG.md:17`) — one number per scene; "9 / 9" with its cost companion is the clearer pair. "~3.5× the cost with Opus 5.5" (`CHANGELOG.md:17`) — the time companion already makes the same honest point.
