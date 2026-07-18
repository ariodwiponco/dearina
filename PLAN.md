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

## 3. Visual Arc (Full Journey)

### Section-by-section visual evolution

| # | Section | Background | Visual State | Mood |
|---|---------|-----------|-------------|------|
| 1 | **Password gate** | Dark, simple | Clean slide-in | Intrigue |
| 2 | **Opening: Stars** | Deep night sky, scattered origami stars twinkling | Origami stars float gently, dimly lit | Dreamy, distant |
| 3 | **The beginning** | Stars fade into warm dawn | Night → sunrise transition | Hope, hesitant joy |
| 4 | **Building home** | Coastline, first light | **Empty room with window facing sea.** As relationship grows, we add: furniture, photos on walls, plants, warm lights. Each scroll adds something new. | Warm, growing |
| 5 | **The good times** | Same room, vibrant | Room fully alive — colorful, sunlit, photos everywhere, playful energy | Alive, fun |
| 6 | **Letters** | Same room, quieter | Folded paper letter on table, warm lamp light | Intimate, reflective |
| 7 | **The turn** | Room darkens, sea outside window rises/falls faster | *Air laut surut pasang* — tide visualized erratically. Origami stars on shelf dim one by one. | Unsettling |
| 8 | **She leaves first** | Room still there, she's gone | Window shows gray sea, empty room. One origami star left on floor. House feels hollow. | Hollow loss |
| 9 | **Leaving home** | House fades into sea | Opening door, stepping out. House becomes small on horizon. Stars reappear but distant. | Release |
| 10 | **Closing** | Night sky again | Origami stars scatter in wind, floating away. Final message. | Peaceful goodbye |

### Key metaphor: Building home gradually
The home section starts as an **empty room with a window overlooking the sea**. As user scrolls through this chapter, items appear one by one — a chair, a table, a lamp, photos on walls, plants, origami stars on shelves. Each item represents a memory, a moment built together. The room grows full gradually, mirroring how relationships are built piece by piece.

## 4. Color Palette (Per Section)

TBD — hex codes to be defined per section during design phase.

## 5. Typography
- **Headings:** Playfair Display or Cormorant Garamond (serif)
- **Body / Letters:** Clean sans-serif or subtle handwriting for normal text
- **Letters section:** Handwritten cursive font (e.g. Dancing Script, Caveat, or similar)
- No system fonts. Feels timeless.

## 6. Texture & Atmosphere
- **Paper grain overlay** (SVG filter, <3KB) across entire page
- **Origami stars** — paper-textured, folded appearance (CSS-drawn or SVG)
- Letters have tactile paper feel — grain overlay on letter element

## 7. Music & Ambiance
- **Ambient audio:** Soft wave/tide sound (*air laut surut pasang*), ebbs and flows
- **Music track** TBD (selected later — 1 track that matches the arc)
- Audio fades in/out by section — waves most prominent in "leaving home"
- User-controlled play/pause, top-right corner
- Never autoplay aggressive

## 8. Sections Detail

### 1. Password Gate
- Full-screen dark overlay
- Centered input, submit
- Password: `251101`
- Clean animation, no drama

### 2. Opening: Stars
- Full deep night sky background (CSS gradient or subtle particles)
- Origami stars (SVG or CSS paper-textured shapes) scattered, twinkling slowly
- Title text centered: "Dearina"
- Subtitle / quote appears on scroll

### 3. The Beginning
- Night sky transitions to dawn (color gradient shift)
- Photos from early days, soft fade-in reveals
- Minimal text — just hints of the story

### 4. Building Home (Gradual)
- **Scroll-driven reveal:** empty room → furniture appears one by one
- Window visible, facing ocean
- Items that appear (order TBD): window frame → table → chair → lamp → shelf → origami stars → photos on wall → plants
- Each item has a subtle entrance animation (fade + slight drift up)
- Warm golden light growing with each addition

### 5. The Good Times
- Room fully furnished, vibrant colors
- Photos enter playfully — card flip, slight bounce
- Hover/tap wiggle on photos
- Still warm, but energetic

### 6. Letters
- Room quiets — one spotlight on a table
- Folded paper letter (CSS paper fold animation)
- Click/tap to unfold — reveals paragraphs one by one
- Handwritten font on textured paper background
- Multiple letters possible (swipe/scroll between them)

### 7. The Turn
- Room darkens gradually
- Sea outside window starts rising and falling faster (*air laut surut pasang*)
- Origami stars on shelf dim one by one
- Animations decelerate
- Text appears: "Coming air laut surut pasang, tapi rasanya akan selalu sama"

### 8. She Leaves First
- Room still the same, but she's not there
- Gray sky through window, muted colors
- One origami star fallen on floor
- Silence (audio fades)

### 9. Leaving Home
- House itself begins to fade/dissolve
- Door appears — user steps through (or scroll past)
- Looking back: house small on horizon
- Stars return to sky but distant, unreachable
- Tide sound swells

### 10. Closing
- Back to night sky
- Origami stars scatter in wind, floating away
- Final text message
- Interactive release element (TBD — button? crane? lantern?)
- "I left home" — moving on is not forgetting, it's letting go

## 9. Animation & Transition Per Section

| Section | Animation | Vibe |
|---------|-----------|------|
| Password gate | Clean slide-in, no drama | Functional, sets tone |
| Opening: Stars | Stars twinkle, slow drift | Dreamy |
| The beginning | Night→dawn gradient shift, photos fade-in softly | Calm, hopeful |
| Building home | Items appear one by one, fade+drift-up, warm glow grows | Growing warmth |
| The good times | **Playful** — photos flip-in, bounce, wiggle on hover | Fun, alive |
| Letters | Fold/unfold paper, handwritten reveal | Intimate |
| The turn | Vignette darkens, tide speeds up, stars dim | Unsettling |
| She leaves | Stillness — almost no animation, just emptiness | Hollow |
| Leaving home | House dissolves, door opening, fade to horizon | Melancholic |
| Closing | Stars scatter, drift away, final stillness | Peaceful release |

- **Section-triggered mood shift:** animations, colors, audio all shift as user scrolls
- All animations use `IntersectionObserver` + CSS transitions/transforms (no heavy libs)
- Target < 50KB extra, no jank on mid-range devices

## 10. UI Elements
- **Scroll progress indicator** — thin line top-left, fills as they read OR chapter dots on the side
- **Loading state:** first visit → title card with slow fade-in before scroll
- **Play/pause button** — top-right corner, for music/ambiance

## 11. Photography
- Photos (user's own — to be curated/moved later)
- Sections 3 (Beginning) and 5 (Good times) primary photo areas
- Portrait vs landscape handling TBD
- Good times: playful card-flip entry
- Later sections: slower, gentler reveals

## 12. Content
- Photos
- Written letters / poetry (fold/unfold paper)
- Text narration throughout
- The idiom: *"Coming air laut surut pasang, tapi rasanya akan selalu sama"*

---

_Plan last updated: 2026-07-18_
_Next: Define hex color palette per section, finalize fonts, then build with Kimi K3_
