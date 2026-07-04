# CEMESA — production playbook

The exact build/render sequence for a CEMESA video, plus the environment fixes this render pipeline
needs. These are the real snags hit building the VisBody promo — following them saves the rediscovery.

## 0 · CLI

Use the published HyperFrames CLI. If a global/`npx` install fails on the `onnxruntime-node`
postinstall (it downloads a binary; the sandbox proxy can reset it), install it **with scripts
skipped** into a scratch dir and call the bin directly:

```bash
mkdir -p ~/hf-cli && cd ~/hf-cli && npm init -y >/dev/null
npm install hyperframes@latest --ignore-scripts
HF=~/hf-cli/node_modules/.bin/hyperframes      # use "$HF" everywhere below
```

## 1 · Init + brand skin

```bash
"$HF" init "videos/<project>" --non-interactive --example=blank
cd videos/<project>
# CEMESA design system + fonts (skip build-frame.mjs / preset-picking entirely):
cp <THIS_SKILL_DIR>/frame.md ./frame.md
mkdir -p assets/fonts && cp <THIS_SKILL_DIR>/assets/fonts/faces.css assets/fonts/ && cp <THIS_SKILL_DIR>/assets/fonts/*.woff2 assets/fonts/
```

`"$HF" auth status` decides voice/music (HeyGen vs local). For a **silent / text-forward** build
(the VisBody promo shipped silent so the client could lay their own VO on top) you skip audio entirely
— no `SCRIPT.md`, no `audio.mjs`, no captions; the on-screen text carries everything.

## 2 · Fonts — embed, don't fetch

Cormorant Garamond & Karla are **not** renderer-bundled and must render offline/deterministically. Each
frame **inlines the full base64 `assets/fonts/faces.css`** into a `<style>` inside its `<template>`.
JetBrains Mono is bundled — just name it. To regenerate `faces.css` (latin subset, base64):

```bash
# fetch Google Fonts CSS with a browser UA, keep only /* latin */ faces, download each woff2,
# base64-embed into @font-face src=url(data:font/woff2;base64,…). (See build-faces.mjs pattern.)
```
Never reference a font by name without a matching `@font-face`, and never a CDN font URL.

## 3 · Frames — one worker per frame

Dispatch one sub-agent per storyboard frame (parallel). Each writes only
`compositions/frames/NN-*.html`. **Critical per-frame contract** (also in HyperFrames core):

- `<template>`-wrapped `#root[data-composition-id]`; **all** `<style>`/`<script>`/`@font-face` INSIDE
  the template; style the root via `#root`, never a class on it.
- Full-bleed ground (`--canvas`) is its own `class="clip"` lowest-track element — **not** a `#root`
  background (the root is clip-gated at assembly and won't paint reliably).
- One paused timeline registered at `window.__timelines["<frame_id>"]`; GSAP is host-provided (no
  `<script src>` for gsap in the frame).
- **One track per concurrent clip.** Clips visible at the same time need **distinct**
  `data-track-index` values — same-track time-overlap fails assembly. If workers collide, renumber
  each clip's `data-track-index` to a unique value in DOM order (preserves z-stacking).

## 4 · Assemble → transitions → checks

```bash
node <SKILL_DIR>/scripts/assemble-index.mjs --storyboard ./STORYBOARD.md --hyperframes .
node <SKILL_DIR>/scripts/transitions.mjs inject --storyboard ./STORYBOARD.md --hyperframes .
node <SKILL_DIR>/scripts/transitions.mjs verify --storyboard ./STORYBOARD.md --index ./index.html
"$HF" lint && "$HF" validate && "$HF" inspect
"$HF" snapshot --at <frame-midpoints>     # contact-sheet.jpg for eyeball review
```
(`<SKILL_DIR>` = the product-launch-video skill dir.)

**Known non-issues** in `inspect`: `studio_missing_editable_id` (warnings only — Studio ergonomics);
transient `content_overlap` during an expansion/one-at-a-time animation (a motion moment, not the
settled state); a gauge needle a few px outside its track (intentional). Real errors to fix:
`gsap_exit_missing_hard_kill` (add `tl.set(sel,{opacity:0}, <exitEnd>)`), and any `text_occluded` that
is *actually* hidden (if it's visually fine, mark the container `data-layout-allow-occlusion`).

## 5 · GSAP + FFmpeg — vendor them (the pipeline is offline)

The assembler writes `index.html` with a **GSAP CDN** `<script src>`. The render/validate headless
Chrome can't reach the CDN through the sandbox proxy → navigation timeout. Fix: **vendor GSAP as a
local file** (not inline):

```bash
curl -sSL https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js -o gsap.min.js
# replace the CDN <script src=…gsap…> in index.html with:  <script src="gsap.min.js"></script>
```
Vendor it as a **file**, not inlined — inlining GSAP makes `StaticGuard` flag GSAP's internal
`Math.random()`/`Date.now()` as non-determinism (it only scans inline scripts). Re-run assemble → the
CDN tag returns, so re-apply this patch (or patch after assembly). FFmpeg/FFprobe must be present:

```bash
apt-get update && apt-get install -y ffmpeg     # render fails "FFmpeg not found" otherwise
```

## 6 · Render

Rendering is slow relative to a tool's default timeout — run it **detached** and poll for the mp4:

```bash
nohup "$HF" render --skill=product-launch-video --quality high --output renders/video.mp4 > renders/render.log 2>&1 &
# poll: ls renders/video.mp4 ; grep "Streaming frame" renders/render.log | tail -1
ffprobe -v error -show_entries stream=width,height,codec_name,r_frame_rate,nb_frames -show_entries format=duration renders/video.mp4
```
Expect e.g. **H.264 · 1080×1920 · 30fps · 960 frames · 32s** for the vertical promo.

## Retiming — slowing (or speeding) a frame's animation without rebuilding it

The engine seeks each frame's paused timeline directly, so **extending `data-duration` alone just adds
a freeze** at the end — it does not slow the animation. To genuinely stretch a frame's motion (e.g. to
give an info-heavy frame more read time / hit a target total), use `scripts/slow-frame.mjs`:

```bash
node <THIS_SKILL_DIR>/scripts/slow-frame.mjs compositions/frames/04-cinco-datos.html 1.5   # ×1.5 slower
```
It (a) multiplies every clip's `data-start`/`data-duration` by the stretch factor (so clips stay
mounted the whole time) and (b) wraps the built timeline in a paused master with the inner timeScale =
`1/stretch`. **Critical gotcha:** the inner `tl` was created `paused:true`; a paused child is NOT
advanced by the master, so the script also emits `tl.paused(false)` before nesting — without it the
whole frame freezes at t=0 (only base/`from`-state elements show). After running it on the info frames,
update each frame's `duration:` in `STORYBOARD.md` to match, then re-assemble → re-vendor GSAP →
re-inject transitions → snapshot to confirm the reveals actually spread out (not frozen, not blank).

The VisBody promo shipped two cuts this way: a tight **32s** and a slower **~41.5s** (info frames
×1.27–1.5, hook untouched) for a calmer read / room for a ~40–45s voiceover.

## Formats

Vertical `1080x1920` (social / link-in-bio — the default). Also `1920x1080` and `1080x1080`; set the
format once in the storyboard frontmatter (`format:`) and the frame `#root` `data-width/height`.
