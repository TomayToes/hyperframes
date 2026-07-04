---
name: cemesa-brand-video
description: >
  Brand + visual-style pack for making Hospital CEMESA videos in HyperFrames — the
  editorial dark-green "tech" identity used for the VisBody S30 promo (emerald green +
  champagne gold on a green-black canvas, Cormorant Garamond serif + Karla + JetBrains
  Mono, a stylized emerald wireframe body avatar, a persistent N/5 counter, gold hand-drawn
  callouts, and the serif CEMESA wordmark lockup). USE THIS whenever the request is a CEMESA
  video/promo/social clip (VisBody, a hospital service, directory, campaign, price promo).
  It does not replace the HyperFrames workflow — it supplies the design system (frame.md),
  the embedded fonts, the motion grammar, the reusable frame patterns, and the production
  playbook, so a CEMESA video comes out on-brand without re-deriving anything.
metadata:
  { "tags": "cemesa, brand, hospital, visbody, video, promo, design-system, hyperframes, spanish" }
---

# CEMESA — brand video pack

Everything needed to produce a **Hospital CEMESA** video that looks like the VisBody S30 promo:
the dark-green editorial "tech" identity, the motion grammar, the signature frame patterns, and
the production playbook. This is a **brand skin over the HyperFrames workflow** — it does not
author the video by itself.

## When to use

- Any CEMESA video: a service/procedure promo (VisBody, imaging, lab, a specialty), a price/campaign
  promo, a directory or hospital-wide clip, a social reel — in Spanish, vertical or landscape.
- Reach for it the moment "CEMESA" (or a CEMESA product like VisBody) is the subject.

Not for: a different brand (build its own pack), or non-video design.

## How it plugs into the workflow (read this order)

1. **Route first.** Read `/hyperframes`, then pick the workflow by input — a marketed service/promo →
   `/product-launch-video`; a longer/custom piece → `/general-video`; a short motion graphic →
   `/motion-graphics`. The CEMESA look rides on top of whichever you pick.
2. **Skip preset-picking (workflow Step 2).** Do **not** run `build-frame.mjs` to choose a preset —
   this skill already ships the finished design spec. Copy it in:
   ```bash
   cp <THIS_SKILL_DIR>/frame.md videos/<project>/frame.md
   mkdir -p videos/<project>/assets/fonts
   cp <THIS_SKILL_DIR>/assets/fonts/faces.css videos/<project>/assets/fonts/
   cp <THIS_SKILL_DIR>/assets/fonts/*.woff2 videos/<project>/assets/fonts/
   ```
   `frame.md` is the normative brand truth (colors, type ramp, components). `faces.css` is the
   base64-embedded fonts every frame inlines.
3. **Author storyboard + frames** per the chosen workflow, but pull design from this skill's
   `frame.md` and motion/patterns from `references/motion-and-patterns.md`. A ready **6-beat, ~32s
   vertical structure** is in `example/STORYBOARD.cemesa-visbody.md` — reuse its arc/timing, swap the content.
4. **Produce** with `references/production-playbook.md` — it has the exact command sequence and the
   environment fixes (vendor GSAP, install FFmpeg, embed fonts, one track per concurrent clip) that
   this render pipeline needs.

## Brand essence (one paragraph)

CEMESA reads as an **editorial medical-premium** brand: a deep green-black canvas, **emerald green**
as the living/scan color, **champagne gold** as the scarce warm accent (figures, callouts, the promo
strip), warm-white ink, and a **serif voice** (Cormorant Garamond) offset by **Karla** body and
**JetBrains Mono** data chrome. The wordmark is the word "CEMESA" set in Cormorant with a hairline
rule and a mono label. The motion is calm and confident — smooth `power3` settles, reveals paced to
the beat, held reads over busy motion — with one energetic staccato section (the data reveal) carried
by a persistent `N/5` counter. Never bouncy, never neon, never photoreal bodies; the body is always a
**stylized emerald wireframe**.

## The reference set

| Read | For |
| --- | --- |
| `frame.md` | The design system — colors (hex + roles), type ramp, components. Copy into each project. Normative. |
| `references/brand-identity.md` | Palette, typography, the wordmark treatment, tone, the two CEMESA themes, do's & don'ts. |
| `references/motion-and-patterns.md` | The motion grammar + the signature frame patterns (avatar, N/5 counter, gold callout, wordmark lockup, chips) with drop-in code. |
| `references/production-playbook.md` | The exact build/render command sequence + the environment fixes (GSAP, FFmpeg, fonts, track-index, silent build). |
| `example/STORYBOARD.cemesa-visbody.md` | A proven 6-beat ~32s vertical storyboard to reuse as a template. |
| `assets/fonts/faces.css` + `*.woff2` | The embedded CEMESA fonts (Cormorant Garamond, Karla). Copy into each project. |

## Non-negotiables (the brand fingerprint)

- **Palette:** canvas `#080f09` · emerald `#1a662d` (+ lit `#2f9e57`) · champagne gold `#c0a77e` (+ deep `#9c7f56`) · warm ink `#f7f3e9` · muted `#b1aa9c`. Two surface tones max per frame.
- **Type:** Cormorant Garamond (display/wordmark) · Karla (body/labels) · JetBrains Mono (counters, units, chips, topbar). Fonts embedded via `faces.css` — never a CDN or a name without an `@font-face`.
- **Motion:** smooth `power3`, no bouncy/overshoot; reveal on the beat, never front-load; held reads with subtle jitter only. Deterministic (no `Math.random`/`Date.now`); entrances `fromTo`; later reveals need `immediateRender:false` or a `tl.set(...,0)` so they don't ghost under seek.
- **The body is a stylized emerald wireframe** — never a photo, never a 3D-rendered human.
- **CTA stays skimmeable** — wordmark lockup + a single gold promo strip + WhatsApp; ≤ ~4s. Don't bloat it.
