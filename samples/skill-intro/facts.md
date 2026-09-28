# facts.md — skill-intro

Every fact and number that appears on screen, with its source (paths relative to the repo root).

| On screen (en / ko) | Value | Source |
|---|---|---|
| Name `motion-graphic`, "a Claude Code skill" / "Claude Code 스킬" | — | README.md:1, README.md:5; README.ko.md:5 |
| "Hand Claude a brief" / "브리프를 주면" | — | README.md:3; README.ko.md:3 |
| Brief inputs: docs · PDFs · numbers · screenshots · URLs / 문서·PDF·수치·스크린샷·URL | 5 kinds | README.md:5; README.ko.md:5 |
| "One HTML file" / "HTML 한 파일" | 1 file | README.md:3, README.md:17; SKILL.md:8 |
| "No build step · no video · no audio files" / "빌드도, 영상·오디오 파일도 없음" | — | README.md:17; README.ko.md:17 |
| Canvas size on the file card | 1920×1080 | README.md:5; CHANGELOG.md:8 |
| File name on the file card `intro-motion.html` | — | illustrative, following the skill's default output name `<slug>-motion.html` (SKILL.md:35) |
| "Every move on the beat" / "모든 움직임이 박자 위에" | — | README.md:18; README.ko.md:18 |
| "Music and effects synthesized live with Web Audio" | — | README.md:19; SKILL.md:8 |
| Grooves: electro · soft · pulse · none | 4 | README.md:19; CHANGELOG.md:8 |
| Tempo shown in the sequencer HUD | 128 BPM | this piece's own `CFG.bpm` (style choice, not a claim about the skill) |
| Style building blocks: console · clean · editorial · pop · playful | 5 | CHANGELOG.md:12; SKILL.md:18; skills/motion-graphic/references/styles.md §3 A–E |
| "Style picked from the topic" / "주제에 맞춰 스타일을 고름" | — | README.md:20; SKILL.md:48 |
| Checks: contact sheet of stills · clipped text · audio levels per scene | — | README.md:24; CHANGELOG.md:11 |
| Device layouts checked | 7 | README.md:24; SKILL.md:21; CHANGELOG.md:11; skills/motion-graphic/scripts/check.js:46-47 (7 entries in `VIEWS`) |
| Device outlines drawn (phone portrait ×2, phone landscape ×2, tablet portrait, tablet landscape, desktop) | 7 | skills/motion-graphic/scripts/check.js:46-47 |
| "Fixed until zero failures" / "실패 0이 될 때까지" | 0 | README.md:82; SKILL.md:114 |
| Repo `JakeB-5/motion-graphic-skill`, link https://github.com/JakeB-5/motion-graphic-skill | — | user prompt (samples/skill-intro/PROMPT.md); .claude-plugin/plugin.json `homepage` |
| Install line `/plugin install motion-graphic@motion-graphic-skill` | — | README.md:36 |
| Version `v0.1.0` | 0.1.0 | CHANGELOG.md:3; .claude-plugin/plugin.json `version` |
| License `MIT` | — | README.md:131; .claude-plugin/plugin.json `license` |

## Decisions

- No performance or adoption numbers (stars, downloads, speed-ups) appear: the sources contain none.
- "no audio files" paraphrases README.md:17 "no audio assets" (same meaning, plainer for a 30-second read).
- The 7 device outlines use the exact viewport list from check.js so the drawing matches what is actually checked.
