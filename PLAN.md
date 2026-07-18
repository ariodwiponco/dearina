# Dearina — Site Plan

> Website for a relationship that just ended. A single-page scrolling memorial.

## 1. Tech Stack
- **Plain HTML + CSS + JS** (no framework)
- Hosted on **GitHub Pages** → `dearina.github.io`
- Built by **Kimi K3** (AI assistant)

## 2. Visual Evolution
The site's palette shifts as you scroll through the relationship arc:

| Section | Vibe | Colors |
|---------|------|--------|
| Opening → Beginning | Warm nostalgic | Soft golds, sepia, film grain |
| The good times | Colorful, vibrant | Bright warm tones |
| The turn → The end | Fading, muted | Muted blues/grays, desaturated |
| Closing | Release / peaceful | Soft dawn tones |

## 3. Sections (Chapters)
Single-page, top-to-bottom, chronological:

1. **Opening** — title, quote
2. **The beginning** — how it started, first photos
3. **The good times** — adventures, memories, photos
4. **The turn** — when things changed
5. **The end** — goodbye, last words
6. **Closing** — final message, release

## 4. Animation & Transition Per Section

| Section | Animation | Vibe |
|---------|-----------|------|
| Opening → Beginning | Soft fade-in, slow drift up (20-30px) | Calm, reflective |
| The good times | **Playful** — photos flip in like cards, bounce slightly, wiggle on hover | Fun, alive |
| The turn | Vignette darkens gradually, animations decelerate | Tone shift |
| The end | Typewriter text, floating dust/particle overlay (subtle) | Melancholic, intimate |
| Closing | Everything stills, final fade to soft dawn tones | Release |

- **Section-triggered shift animation**: as user scrolls between sections, the overall animation "mood" changes — playful in good times, subdued in later sections.
- All animations use `IntersectionObserver` + CSS transitions/transforms (no heavy libs).
- Target < 50KB extra, no jank on mid-range devices.

## 5. Content
- Photos (user's own)
- Letters / written words
- Effects & animations (per-scroll transitions, vignette shift)

---

_Plan last updated: 2026-07-18_
_Next to discuss: Section details (photos, effects, letters per chapter)_
