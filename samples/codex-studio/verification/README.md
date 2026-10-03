# Verification evidence

`round-1/` and `round-2/` preserve the images, level reports and cue audits supplied to separate reviewers. The corresponding critiques and fixes are in [../review_log.md](../review_log.md). File paths in the JSON reports are made repository-relative; measured results are unchanged.

The final HTML and bilingual MP4 fingerprints and stream metadata are in [exports.json](exports.json). Each MP4 passed record.js's duration/packet checks and a full ffmpeg decode with no errors. `motion-*-*.png` supplement the standard cut strips with twelve samples of each interior transformation, labelled by absolute film time.

To rerun the standard checks from the repository root:

```sh
node skills/motion-graphic/scripts/check.js samples/codex-studio/index.html --out /tmp/codex-studio-check
node skills/motion-graphic/scripts/record.js samples/codex-studio/index.html --out samples/codex-studio/codex-studio.mp4 --lang ko --verify-only
node skills/motion-graphic/scripts/record.js samples/codex-studio/index.html --out samples/codex-studio/codex-studio-en.mp4 --lang en --verify-only
```

The root sample `report.json`, `preview.png` and `preview-en.png` correspond to the final verification round. Automated measurements and a visual critique are separate checks; cue/level audits do not claim subjective listening.
