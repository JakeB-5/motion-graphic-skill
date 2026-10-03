Round 1

B = 60/128 = 0.46875 seconds. Cue positions below are local beat multiples; absolute scene starts are in report.json. PASS compares trigger time with the start of the matching motion; springs continue settling after that trigger.

| Scene (absolute start) | cues() entries → matching motion beat | Result |
|---|---|---|
| title (0) | 0 power → card entry 0; 0.25 slam .35 → first line 0.25; 1 slam .5 → second line 1; 2.5 blip 660 → caption 2.5; 4 stamp .4 → star 4; 5.5 stamp .4 → maker stamp 5.5 | PASS |
| inputs (3.75) | 0.5 slam .4 → title 0.5; 1/2/3 stamp .32/.38/.44 → source-card springs 1/2/3; 4.5 blip 720 → caption 4.5; 6 whoosh .3 .08 → straighten/lift/underline 6 | PASS |
| story (7.5) | 0.5 slam .4 → title 0.5; 1.5/2.25/3 blip 520/700/880 → card springs 1.5/2.25/3; 4 blip 740 → first symbol + selection 4; 5 blip 880 → star 5; 6 blip 1040 → play symbol + selection 6; 7.5 blip 720 → caption 7.5 | PASS |
| rhythm (12.1875) | 0.5 slam .45 → first line 0.5; 1 stamp .35 → sequencer entry 1; 1.5 slam .45 → second line 1.5; beats 2…9 blip (440 + (beat mod 4)*140) .06 → sequencer bars 2…9 (also line/underline 3) | PASS |
| file (16.875) | 0.5 slam .5 → One 0.5; 1.5 blip 660 → HTML file 1.5; 3 whoosh .4 .13 → stack gathers 3; 4 stamp .55 + bell → play symbol 4; 6 blip 880 → caption/underline 6 | PASS |
| mobile (21.5625) | 0.5 slam .45 → first line 0.5; 1.5 blip 660 → second line 1.5; 3 whoosh .4 .15 → screen morph 3; 5 blip 880 → tap copy, symbol turn and scrubber 5 | PASS |
| outro (25.3125) | 0.5 impact + chord 3.2 → headline 0.5; 1.5 blip 660 → caption 1.5; 2.5 stamp .55 → ticket 2.5; 5 bell → address reveal 5; 6 stamp .4 → version sticker and ending 6 | PASS |

The engine adds a 0.2 s transition whoosh beginning 0.12 s before each cut; it spans the onset of the paper reveal at beat 0. The electro bed starts at scene 2. No external soundtrack or voice recording.

Total impact cues: 1.
