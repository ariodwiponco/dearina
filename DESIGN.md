# Dearina — Design Spec

Final design decisions supplementing PLAN.md.

## Fonts

| Usage | Font | Fallback | Why |
|-------|------|----------|-----|
| Headings / section titles | **Cormorant Garamond** (serif) | Georgia, serif | Timeless, literary, elegant. Pairign with visual arc. |
| Body text / narration | **Inter** (sans-serif) | system-ui, sans-serif | Clean, highly readable on mobile, loads fast (Google Fonts variable weight). |
| Letters (handwritten) | **Caveat** (cursive) | cursive | Natural handwriting feel, not too decorative — reads like real letter. |

## Interactive Ending: Origami Star Release

- At bottom of page, a single origami star sits on screen.
- **Tap / click** → star folds itself (CSS keyframes: paper crease animation), then floats upward and drifts away into the night sky.
- Ties opening stars → building home → one star remains → you let it go.
- No button, no text — just the star.

## Layout Per Section

| # | Section | Layout |
|---|---------|--------|
| 1 | **Password gate** | Centered minimal form, full dark screen. No decoration. |
| 2 | **Opening: Stars** | Full-screen canvas. Stars scattered, title "Dearina" centered. Subtitle fades on scroll. |
| 3 | **The beginning** | Split: text left (diary-entry style), photo right. Soft fade. |
| 4 | **Building home** | **"Dollhouse" cross-section** — room frame visible, empty. Items appear one by one as user scrolls (table → lamp → shelf → photo frame → curtains → origami stars on shelf → plant). Window shows sea. |
| 5 | **The good times** | **Masonry wall** — photos of various sizes, rounded cards with soft shadow, staggered entrance. Playful bounce on appear. |
| 6 | **Letters** | **Overhead perspective** — looking down at a table. Folded paper letter center. Click to unfold and read. |
| 7 | **The turn** | **Cinematic widescreen** — ocean horizon fills screen, tide ebbs and flows faster. Text overlay minimal. |
| 8 | **She leaves** | **Negative space** — one fallen origami star on vast empty floor. Almost no text. Silence. |
| 9 | **Leaving home** | **First-person door frame** — from inside looking out. House recedes on horizon as user scrolls (parallax scale-down). |
| 10 | **Closing** | Full star field again. One star departs. Star release interaction at bottom. |

## Photo Treatment

- Key moments: **full-bleed hero** image covering screen width
- Memory clusters: **masonry grid** of rounded cards (border-radius 12px, soft box-shadow)
- No borders, no frames — photos feel like floating fragments
- Good times: playful entrance (scale-up + slight rotate)
- Later sections: fade-in only, no drama
- Portrait photos: centered, max-height capped so they don't dominate
- Landscape photos: full-width within card

## Origami Stars

- **SVG shape** — 5-point folded star (not 5-point regular star, but origami folded look)
- Animation: gentle pulse + slow rotation (CSS)
- Paper texture fill (subtle noise via SVG filter)
- Twinkle: scale pulse + opacity pulse

## Loading State

- Dark purple sky (`#1A0F2E`)
- Three dim stars visible, pulsing slowly
- "Dearina" fades in after 500ms
- Subtitle "someone's story" fades after 1.5s
- After 3s or scroll, title fades out, first section begins
- Sets ritual pace — you don't just scroll into this

## Performance Targets

- Lighthouse mobile: 90+ Performance, 95+ Accessibility
- Total CSS/JS: < 80KB
- No external libraries (no jQuery, no GSAP, no framework)
- Photos: WebP format, lazy loading via `loading="lazy"`
- Animations: GPU-accelerated (transform, opacity only)
- Google Fonts: subset latin, preconnect, preload
