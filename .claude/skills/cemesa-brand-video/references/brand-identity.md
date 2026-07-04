# CEMESA — brand identity

Source of truth: `frame.md` (frontmatter). This doc is the human-readable brand rationale + the
treatment rules the tokens can't hold. Tokens were extracted from the real site
`directorio.hcemesa.com` (CSS custom properties, OKLCH → hex).

## Palette

CEMESA ships two themes on its site; this pack uses the **"tech" / dark** one (the dramatic,
high-contrast register that suits reveals and promos).

| Role | Hex | Use |
| --- | --- | --- |
| Canvas | `#080f09` | Deep green-black — the default full-bleed ground of every frame. |
| Surface | `#121e14` | Slightly raised dark-green panels/cards. |
| **Brand green (emerald)** | `#1a662d` | The primary brand color — wireframes, rules, brand marks. |
| Emerald lit | `#2f9e57` | Brighter green for lit scan zones, glows, "alive" scan lines. |
| Green deep | `#004b1c` | Deep forest for depth / shadows within the green. |
| **Champagne gold** | `#c0a77e` | The scarce warm accent — figures, callouts, the twist highlight, the promo strip, the payoff word. |
| Gold deep | `#9c7f56` | Darker gold for sub-labels / secondary accent. |
| Warm ink | `#f7f3e9` | Display + body text on dark. Never pure white. |
| Muted | `#b1aa9c` | Secondary text, captions, ticks. |

Rules: **two surface tones max per frame.** Gold is *scarce* — one gold moment per frame (a figure, a
callout, the payoff word, the promo strip), never gold everywhere. Emerald is the "living" color:
scans, lit zones, the body. No fourth color family, no `rgba` on a surface, no neon, no purple-blue
"AI" gradients.

OKLCH originals (for regenerating): canvas `oklch(16% .018 150)`, brand `oklch(45% .115 148)`,
brand-deep `oklch(36% .105 150)`, champagne `oklch(74% .062 80)`, ink `oklch(96.5% .014 88)`.

## Typography

| Role | Family | Weight | Notes |
| --- | --- | --- | --- |
| Display / headlines / **wordmark** | **Cormorant Garamond** | 500 (600 for the wordmark) | Serif, negative-tracked (−0.01…−0.03em), tight line-height (0.92–1.02). The brand voice. |
| Body / labels / sub-labels | **Karla** | 400 / 500 | Clean sans; letter-spaced uppercase for eyebrows. |
| Chrome / data | **JetBrains Mono** | 500 | Topbar label, the `N/5` counter, units (`%`, `kg`), chips, ticks, footlines. Uppercase, 0.12–0.18em. Pre-bundled by the renderer. |

- Cormorant Garamond & Karla are **not** renderer-bundled → embed them: every frame inlines
  `assets/fonts/faces.css` (base64 woff2). JetBrains Mono is bundled — name it, no `@font-face` needed.
- Cormorant is a monoculture-flagged font in the generic house style, but it **is** CEMESA's real
  brand face — brand fidelity wins here.
- Long serif words that don't fit a column: **shrink to one line** (e.g. `font-size:48px`), don't
  hard-hyphenate ("PROPOR-CIONES" reads broken). Whole words only.

## The wordmark / lockup

CEMESA's real treatment (seen on the site):

- The word **CEMESA** in Cormorant Garamond, letter-spaced, warm-ink or gold.
- A short **hairline rule** (2px, gold or emerald) beside or under it.
- A mono **label** underneath: `VISBODY S30 · DIRECTORIO MÉDICO` or `HOSPITAL CEMESA · SAN PEDRO SULA`.

Reproduce it typographically — there is **no raster logo file**. On a CTA card the lockup stacks:
wordmark → hairline → mono label → location line → **gold promo strip** → WhatsApp/CTA line. See the
`wordmark-lockup` pattern in `motion-and-patterns.md`.

## Tone & register

Editorial, premium, medical-calm — a quiet annual report, not a loud ad. The promo energy comes from
**structure and pacing** (a sharp hook, a staccato data reveal, a twist), not from decoration. Spanish,
Honduras register ("agendá", "mirá", "vos"). Honest with medical data: never invent specific clinical
numbers — use dash placeholders (`–– %`, `0.––`) or unlabeled gauges; the metric *name* + the lit zone
carry the message.

## Do / Don't

**Do:** dark green grounds; one gold moment per frame; serif headlines + mono data; the emerald
wireframe body; a persistent `N/5` counter during any enumerated reveal; a skimmeable CTA.

**Don't:** photoreal or 3D-rendered bodies (always wireframe); neon or purple-blue gradients; bouncy
motion; gold everywhere; a bloated CTA; pure black `#000` or pure white `#fff`; hard-hyphenated words;
invented clinical figures.
