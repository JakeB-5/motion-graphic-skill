# motion-graphic

**브리프를 주면, 모션그래픽이 HTML 한 파일로 나옵니다.**

[Codex](https://developers.openai.com/codex/)와 [Claude Code](https://claude.com/claude-code)에서 함께 쓰는 스킬입니다. 브리프와 참고자료(문서·PDF·수치·스크린샷·URL)를 받아 박자에 맞춘 1920×1080 캔버스 모션그래픽을 만듭니다. 음악과 효과음은 브라우저에서 합성되고, 폰에서도 되는 플레이어와 자동 시각 검증이 함께 들어갑니다.

[English](README.md) · **한국어**

[![License: MIT](https://img.shields.io/badge/license-MIT-257854)](LICENSE) [![Claude Code skill](https://img.shields.io/badge/Claude%20Code-skill-d97757)](skills/motion-graphic/SKILL.md) [![Codex skill](https://img.shields.io/badge/Codex-skill-10a37f)](skills/motion-graphic/agents/openai.yaml) [![Status: 0.2](https://img.shields.io/badge/status-0.2-d4a34b)](CHANGELOG.md)

![기본 콘솔 스타일 데모의 장면별 스틸 시트](docs/images/sheet-console.png)

*번들 데모(24초, 5장면)를 장면당 두 컷씩 모은 시트입니다. 스킬의 검증 스크립트가 만들었습니다.*

## 샘플

Claude가 이 스킬로 만든 세 편입니다. 각각 프롬프트 하나만 주고 만들었습니다. 아래 영상은 HTML을 [`record.js`](skills/motion-graphic/scripts/record.js)로 녹화한 것이고(소리 있음 🔊), ▶ 링크는 인터랙티브 HTML 원본을 엽니다. [`samples/`](samples)의 각 폴더에는 Claude가 쓴 출처 목록 `facts.md`와 `storyboard.md`도 함께 있습니다.

### 스킬 소개 — 플랫 팝 · 30초

https://github.com/user-attachments/assets/be0d6871-4e56-49c0-91d5-90b77d540cf2

[▶ 바로 재생](https://jakeb-5.github.io/motion-graphic-skill/samples/skill-intro/?lang=ko) ([English](https://jakeb-5.github.io/motion-graphic-skill/samples/skill-intro/)) · [소스](samples/skill-intro) · 7장면, 128 BPM 일렉트로 그루브

<details>
<summary>프롬프트</summary>

```text
Make a 30-second motion graphic that introduces this repository's motion-graphic skill to developers browsing GitHub. Use the README, SKILL.md and CHANGELOG in this repo as the source material. Bold, playful flat-pop look — not the default dark console. English and Korean. End with a link to https://github.com/JakeB-5/motion-graphic-skill.
```

</details>

### 제임스 웹 우주망원경 — 밤하늘 천체관 · 45초

https://github.com/user-attachments/assets/03088c20-9c28-4d23-9669-7edb0c5e0aeb

[▶ 바로 재생](https://jakeb-5.github.io/motion-graphic-skill/samples/webb-telescope/?lang=ko) ([English](https://jakeb-5.github.io/motion-graphic-skill/samples/webb-telescope/)) · [소스](samples/webb-telescope) · 8장면, 90 BPM 드럼 없는 펄스 그루브, 모든 수치 NASA 출처

<details>
<summary>프롬프트</summary>

```text
Make a 45-second explainer motion graphic about the James Webb Space Telescope for a general audience — it will loop on a science-museum lobby screen. Take every number from NASA's public Webb pages (https://science.nasa.gov/mission/webb/). English and Korean. End with a link to https://science.nasa.gov/mission/webb/.
```

</details>

### V60 핸드드립 가이드 — 따뜻한 카페 일러스트 · 31초

https://github.com/user-attachments/assets/bba61e37-23db-41b9-89be-78fe5fbb94a8

[▶ 바로 재생](https://jakeb-5.github.io/motion-graphic-skill/samples/pour-over/?lang=ko) ([English](https://jakeb-5.github.io/motion-graphic-skill/samples/pour-over/)) · [소스](samples/pour-over) · 7장면, 124 BPM 소프트 그루브, 레시피는 Hario·SCA 기준

<details>
<summary>프롬프트</summary>

```text
Make a 30-second motion graphic that teaches a complete beginner how to brew pour-over coffee with a V60 dripper — friendly and warm, for a small café's in-store screen. Base the recipe numbers on the Specialty Coffee Association's brewing guidance and Hario's V60 instructions. English and Korean. No call-to-action link.
```

</details>

*영상은 영어판입니다. 한국어판은 ▶ 링크에서 볼 수 있습니다.*

### Codex Motion Studio — 종이 카드 · 30초

![Codex Motion Studio 장면 미리보기](samples/codex-studio/preview.png)

[인터랙티브 HTML](samples/codex-studio/index.html) · [음악 포함 MP4](samples/codex-studio/codex-studio.mp4) · [장면 미리보기](samples/codex-studio/preview.png). 전역에 설치한 Codex 스킬로 만들고 검증한 7장면 샘플입니다. 밝은 종이 카드 스타일을 사용했습니다. [출처·스토리보드](samples/codex-studio).

## 무엇이 나오나

- **HTML 한 파일.** 빌드 과정도, 영상·오디오 파일도 없습니다. 브라우저로 열거나 정적 호스팅에 올리거나 첨부하면 됩니다.
- **박자 위의 장면.** 모든 움직임을 박자 단위로 짜고, 효과음은 그 움직임과 같은 박에 떨어집니다.
- **실시간 합성 음악·효과음.** Web Audio로 만듭니다. 그루브 4종(`electro`·`soft`·`pulse`·`none`)과 효과음 팔레트(slam, scan, riser, stamp, laser, error → correct 등)가 있습니다.
- **주제에 맞는 스타일.** 주제와 관객을 보고 에이전트가 밝기·질감·프레임·글꼴·이징·전환·음악을 정합니다. 반도체 회사면 어두운 기술 콘솔, IR이면 밝고 깔끔하게, 브랜드 스토리면 크림 종이와 세리프, 티저면 원색 팝을 씁니다.
- **실제 플레이어.** 클릭·탭 재생, 진행 막대 드래그, 키보드 단축키, 전체 화면, CTA 버튼이 있습니다. 한 번 끝까지 보면 마지막 장면의 도형이 링크로 열립니다.
- **폰 대응.** 세로 화면에서는 영상 아래로 컨트롤이 붙고, 가로 화면에서는 영상이 높이를 꽉 채우고 버튼이 옆으로 갑니다.
- **정직한 수치.** 화면의 모든 수치를 `facts.md`에 출처와 함께 적습니다. 큰 수치 옆에는 같은 척도의 보조 지표를 두고, 반올림 표기를 일관되게 맞춥니다.
- **보기 전에 검증.** 장면별 스틸 시트, 가장자리에서 잘린 글자, 장면별 음량, 7개 기기 레이아웃, 탭 재생, 말줄임된 라벨을 확인합니다.

| 클린 스타일(같은 장면, 스타일만 교체) | 폰 세로 | 폰 가로 |
|---|---|---|
| ![클린 스타일 시트](docs/images/sheet-clean.png) | ![폰 세로](docs/images/phone-portrait.png) | ![폰 가로](docs/images/phone-landscape.png) |

## 설치

두 에이전트 모두 같은 `skills/motion-graphic` 폴더의 엔진·참고자료·스크립트를 사용합니다.

### Codex

이 저장소를 Codex에서 열면 `.agents/skills/motion-graphic` 링크를 통해 공용 스킬을 찾습니다. 다른 프로젝트에서도 쓰려면 개인 스킬 폴더에 복사하세요(macOS/Linux/WSL).

```bash
git clone https://github.com/JakeB-5/motion-graphic-skill.git
mkdir -p ~/.agents/skills
cp -R motion-graphic-skill/skills/motion-graphic ~/.agents/skills/
```

이미 복제한 저장소가 있으면 `git clone`은 건너뛰세요. 다른 프로젝트 하나에만 설치하려면 `~/.agents/skills/` 대신 해당 프로젝트의 `.agents/skills/`를 사용하세요. `assets`·`references`·`scripts`·`agents`를 포함한 스킬 폴더 전체를 복사해야 합니다. 중복 표시를 피하려면 설치 범위는 하나만 선택하세요. 스킬이 나타나지 않으면 Codex를 재시작하세요. 경로 기준은 [공식 스킬 탐색 문서](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills)를 따릅니다.

### Claude Code

**플러그인으로 설치**:

```text
/plugin marketplace add JakeB-5/motion-graphic-skill
/plugin install motion-graphic@motion-graphic-skill
```

**수동 설치**: 스킬 폴더를 복사하거나 심볼릭 링크로 연결합니다.

```bash
git clone https://github.com/JakeB-5/motion-graphic-skill.git
mkdir -p ~/.claude/skills
cp -R motion-graphic-skill/skills/motion-graphic ~/.claude/skills/
```

### 검증용 의존성

**의존성** (권장. 스킬이 자기 결과물을 검사할 때 씁니다):

- Python 3 (`assemble.py`)
- Node.js 18+ 와 Chrome 또는 Chromium
- `puppeteer-core`: 스크립트 옆에 한 번만 설치하면 됩니다.

```bash
# Codex 개인 설치
npm i --prefix ~/.agents/skills/motion-graphic/scripts puppeteer-core@23
# Claude Code 수동 설치
npm i --prefix ~/.claude/skills/motion-graphic/scripts puppeteer-core@23
```

자신의 설치 방식에 맞는 명령 하나만 실행하세요. 이 저장소에서 바로 쓰는 경우 저장소 루트에서 prefix를 `skills/motion-graphic/scripts`로, 플러그인으로 설치한 경우 설치된 스킬의 `scripts` 경로로 지정하세요.

Chrome은 macOS·Linux·Windows의 기본 위치에서 자동으로 찾습니다. 다른 위치라면 `CHROME=/path/to/chrome`을 지정하세요.

## 사용

Codex에서는 `$motion-graphic`으로 직접 호출할 수 있습니다.

```text
$motion-graphic README.md로 제품 소개 30초 모션그래픽 만들어줘. 한국어와 영어로.
```

두 에이전트 모두 다음과 같은 요청에서 스킬을 자동으로 선택할 수도 있습니다.

```text
여기 포트폴리오 PDF랑 지원 공고 있어. 지원서에 넣을 1분짜리 모션그래픽 만들어줘. 끝에는 PDF 링크.
```

```text
README.md랑 docs/metrics.csv로 제품 소개 30초 모션그래픽 만들어줘. 라이트닝톡 오프닝으로 틀 거야.
```

```text
사례 세 개로 투자자 업데이트용 15초 인트로 만들어줘. 차분하고 기업적인 톤으로.
```

Codex나 Claude가 꼭 필요한데 빠진 정보(관객·길이·링크)를 한 번에 묻습니다. 그다음 스토리보드를 보여주고 승인을 받은 뒤 만들고, 검증해서 파일을 넘겨줍니다.

## 동작 방식

1. **입력 정리**: 참고자료를 모두 읽고, 화면에 오를 사실과 수치를 출처와 함께 `facts.md`에 적습니다.
2. **컨셉**: 관객이 아는 세계의 은유 하나를 고르고(웨이퍼 검사 시퀀스, 철도 관제판, 컨테이너 터미널 등), 주제·관객·브랜드에 맞는 스타일을 정합니다.
3. **스토리보드**: 장면표(박자·메시지·화면·움직임·소리)를 보여주고 승인을 받습니다. 이야기를 바꾸기 가장 싼 지점입니다.
4. **구현**: `assemble.py`가 엔진을 작은 파일(`config`·`style`·`copy`·`geometry`·`scenes`·`plan` 등)로 쪼갭니다. 에이전트가 이 파일들을 채운 뒤 다시 조립하고 문법을 검사합니다. 플레이어·오디오·모바일 레이아웃은 엔진 것을 그대로 씁니다.
5. **검증**: `check.js`가 스틸 시트를 만들고 검사를 돌립니다. 에이전트가 스틸을 직접 보고, 실패가 0이 될 때까지 고칩니다.
6. **전달**: HTML 경로, 길이, 장면 수, 검사 결과를 알려줍니다.

모든 프레임은 시간의 순수함수(`render(t)`)입니다. 그래서 진행 막대로 이동하거나 특정 프레임에서 멈추거나 검증 스틸을 찍어도 실제 재생과 똑같은 화면이 나옵니다.

### 결과 파일에서 쓸 수 있는 것

| | |
|---|---|
| `?t=12.5` | 해당 프레임에서 정지 (`#t12.5`도 가능) |
| `?lang=en` | 언어가 여러 개일 때 전환 |
| `?audiotest` | 오디오를 오프라인으로 렌더해 최대 음량과 장면별 음량 표시 |
| Space · ← → · M · F | 재생/정지 · 2초 이동 · 음소거 · 전체 화면 |

## 데모 보기

GitHub Pages에서 바로 재생하거나, 파일을 브라우저로 열어 보세요.

- [▶ 콘솔 스타일](https://jakeb-5.github.io/motion-graphic-skill/skills/motion-graphic/assets/engine.html) · [`skills/motion-graphic/assets/engine.html`](skills/motion-graphic/assets/engine.html): 예시 장면 5개가 든 엔진, 콘솔 스타일
- [▶ 클린 스타일](https://jakeb-5.github.io/motion-graphic-skill/examples/clean-style.html) · [`examples/clean-style.html`](examples/clean-style.html): 같은 장면에 밝은 클린 스타일과 부드러운 그루브

## 저장소 구조

```text
.agents/skills/          Codex가 공용 스킬을 찾는 링크
.claude-plugin/          Claude Code 플러그인·마켓플레이스 매니페스트
skills/motion-graphic/
  SKILL.md               Codex·Claude Code 공용 작업 순서
  agents/openai.yaml    Codex 표시 정보·기본 프롬프트
  assets/engine.html     엔진 (플레이어·오디오·헬퍼·예시 장면)
  references/            story.md · styles.md · scene-patterns.md
  scripts/assemble.py    엔진 ↔ 편집 파일 분리·조립
  scripts/check.js       검증: 스틸·잘림·오디오·레이아웃·탭
  scripts/record.js      HTML → mp4 (프레임 단위 렌더 + 엔진 오디오)
samples/                 프롬프트 하나로 만든 샘플 (HTML·mp4·프롬프트·facts·스토리보드)
examples/                스타일 예시 완성본
docs/images/             README 이미지
```

## 한계

- 16:9 전용입니다 (1920×1080 캔버스. 다른 화면에서는 레터박스나 세로 배치).
- 웹폰트를 Google Fonts에서 받으므로 처음 재생할 때 네트워크가 필요합니다. 나머지는 모두 파일 안에 있습니다.
- 결과물은 영상 파일이 아니라 인터랙티브 HTML입니다. mp4가 필요하면 `node scripts/record.js <file.html> --out film.mp4`로 변환합니다(ffmpeg 필요, 진행 막대까지 영상에 들어감).
- 아이폰 Safari는 요소 전체 화면을 지원하지 않습니다. 그래서 전체 화면 버튼을 숨기고 "가로로 돌리면 크게" 안내를 보여줍니다.
- 검증에는 Chrome/Chromium과 Node가 필요합니다. 없어도 만들 수는 있지만 결과물을 스스로 검사하지 못합니다.

## 기여

이슈와 PR 환영합니다. [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 라이선스

[MIT](LICENSE)
