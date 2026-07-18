# Dearina — Site Plan

> Website for a relationship that just ended. A single-page scrolling memorial.
> Grand design — the best possible goodbye.

## 1. Tech Stack
- **Plain HTML + CSS + JS** (no framework)
- Hosted on **GitHub Pages** → `dearina.github.io`
- Built by **Kimi K3** (AI assistant)
- **Mobile-first** — every decision from phone up

## 2. Access
- **Password-protected** — password: `251101`
- Public URL, private-accessible only via password gate

## 3. Visual Evolution
The site's palette shifts as you scroll through the relationship arc:

| Section | Vibe | Colors |
|---------|------|--------|
| Opening → Beginning | Warm nostalgic | Soft golds, sepia, film grain |
| The good times | Colorful, vibrant | Bright warm tones |
| The turn | Fading, muted | Muted blues/grays, desaturated |
| The end → Closing | Release / peaceful | Soft dawn tones |

## 4. Typography
- **Headings:** Playfair Display or Cormorant Garamond (serif)
- **Body / Letters:** Clean sans-serif or subtle handwriting
- No system fonts. Felt timeless.

## 5. Texture & Atmosphere
- **Paper grain overlay** (SVG filter, <3KB) across the entire page
- Letters especially — tactile, physical feel

## 6. Music
- Single ambient track, optional
- Play/pause button, top-right corner
- User-controlled, never autoplay aggressive

## 7. Sections (Chapters)
Single-page, top-to-bottom, chronological:

1. **Password gate** — enter `251101` to enter
2. **Opening** — title card, slow fade-in on first visit, quote
3. **The beginning** — how it started, first photos
4. **The good times** — adventures, memories, photos, playful animations
5. **Letters** — written words, interactive (typewriter? fold/unfold?)
6. **The turn** — when things changed
7. **The end** — goodbye, last words
8. **Closing** — final message, interactive release (button / flower / paper crane)

## 8. Animation & Transition Per Section

| Section | Animation | Vibe |
|---------|-----------|------|
| Password gate | Clean slide-in, no drama | Functional, sets tone |
| Opening → Beginning | Soft fade-in, slow drift up (20-30px) | Calm, reflective |
| The good times | **Playful** — photos flip in like cards, bounce slightly, wiggle on hover | Fun, alive |
| Letters | Interactive — typewriter? fold/unfold like real paper? decide later | Intimate |
| The turn | Vignette darkens gradually, animations decelerate | Tone shift |
| The end | Typewriter text, floating dust/particle overlay (subtle) | Melancholic, intimate |
| Closing | Everything stills, final fade to soft dawn, interactive element | Release |

- **Section-triggered mood shift:** animations, colors, and overall "feel" change as user scrolls between chapters
- All animations use `IntersectionObserver` + CSS transitions/transforms (no heavy libs)
- Target < 50KB extra, no jank on mid-range devices
- Good times section allows playful/funny animations; later sections are subdued

## 9. UI Elements
- **Scroll progress indicator** — thin line top-left, fills as they read, or chapter dots on the side
- **Loading state** — title card with slow fade-in on first visit, sets ritual tone

## 10. Interactive Letter
- A dedicated "Letters" section (between Good Times and The Turn)
- User can interact with the letter content — typewriter effect, tap to reveal, or fold/unfold animation
- Details to be designed later

## 11. Photography
- Photos (user's own — to be curated/moved later)
- Define how photos enter: portrait vs landscape, grids vs full-bleed
- Good times: playful card-flip entry
- Later sections: slower, gentler reveals

## 12. Content
- Photos
- Written letters / poetry
- Effects & animations

---

_Plan last updated: 2026-07-18_
_Next to discuss: Interactive letter design_
