# Dearina — Site Plan

> Website for a relationship that just ended. A single-page scrolling memorial.
> Grand design — the best possible goodbye.
>
> **Title: "Dear Ina"** — like the opening of a letter. Two words, not one.

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
| 6 | **The bad times** | Acknowledging we faced storms | Honest, brief |
| 7 | **Letters** | Fold/unfold paper, handwritten font | Intimate, closing |
| 8 | **The turn** | Tide rises and falls faster, room darkens | Unsettling |
| 9 | **She leaves first** | Empty room, one fallen star | Hollow |
| 10 | **Leaving home** | House fades, door opens, walk away | Melancholic |
| 11 | **Closing** | Star release + letter, final moment | Peaceful goodbye |

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
- Full-screen dark overlay, minimal
- **Title: "Dear Ina"** — centered, soft fade-in
- Subtitle: "Enter the date" or "6 digits" (subtle, small)
- Password input: centered, clean, no drama
- Password: `251101` (her birthday, 6 digits)
- On success: gentle dissolve into the star field

### 2. Opening — Stars
- Full night sky, origami stars twinkling
- Text appears line by line (typewriter or fade):
  - *"Dear Ina,"*
  - *(pause)*
  - *"You'll always be the dream I always tried to reach."*
  - *"But I think..."*
  - *"I've fallen among the stars while trying."*
- Stars glow brighter on "fallen among the stars"
- Soft, slow pace — this is the first breath of the story
- Scroll triggers transition to dawn (Section 3)

### 3. The Beginning
- Night sky slowly fades into warm dawn
- **First memory:** A staircase scene. I was at the bottom, she was at the top, looking down at me. I had asked God for a partner — and there she was.
- **Timeline revealed gently:**
  - *"I first saw you in 2019."*
  - *"But I wasn't ready. I had someone else."*
  - *"Still — I couldn't forget your face."*
  - *"In 2022, I finally gathered the courage to reach out."*
- Text split with image — diary-entry style. First photo from early days appears.
- Soft, warm. Dawn colors. Hesitant hope.

### 4. Building Home (Gradual)
- **Scroll-driven reveal:** empty room → furniture appears one by one
- Window visible, facing ocean
- Items appear in order (TBD): window frame → table → chair → lamp → shelf → origami stars → photos on wall → plants
- Warm golden light growing with each addition
- **Opening line:** "Apakah kamu ingat impresi pertamamu terhadap aku? Laki-laki ugal-ugalan."
- Scroll reveals: "A love you've never experienced before, right?"
- Then as items fill the room:
  - "Rumah aku dan kamu memang tidak sempurna."
  - "Tapi kita sama-sama mau mengisinya."
- Each item represents a memory, a moment built together

### 5. The Good Times
- Room fully furnished, vibrant colors
- **Dynamic image + text pairs** — each line has its own photos (single or multiple) accompanying it
- Text appears one line at a time with scroll, each has matching photo(s):
  - **"Countless places we visited."** → photos of places together (varied: full-bleed hero, or small cluster)
  - **"Endless foods and drinks we tried."** → food photos, cafe shots, street food
  - **"Boundless activities we did together."** → activity photos, candid moments
  - **"And infinite kisses and hugs sent between us."** → close intimate photos
- Photos enter playfully — card flip, bounce, staggered reveal
- Hover/tap wiggle on photos
- Masonry or varied grid — photos sized by importance
- Each pair has its own layout (some full-bleed, some split, some grid) — never repetitive

### 6. The Bad Times (Acknowledgment)
- Acknowledging that not everything was perfect
- A brief, honest section — not dwelling, but honoring that we faced storms together
- Possible text: *"But it wasn't always beautiful."* / *"We had our fights. Our silences. Our doubts."*
- Tone: honest, gentle — not bitter or blaming
- Visual shift: room dims slightly, sea outside becomes more turbulent
- Transition into The Turn — this is the bridge
- **Content:** TBD (your letter to Ina)

### 6. The Bad Times (Acknowledgment)
- Acknowledging that not everything was perfect
- A brief, honest section — not dwelling, but honoring that we faced storms together
- Possible text: *"But it wasn't always beautiful."* / *"We had our fights. Our silences. Our doubts."*
- Tone: honest, gentle — not bitter or blaming
- Visual shift: room dims slightly, sea outside becomes more turbulent
- Transition into The Turn — this is the bridge

### 6. The Bad Times (Acknowledgment)
- Acknowledging that not everything was perfect
- **Text:** "We acknowledged there's always two sides of a coin. But I'm always grateful that I had you in those bad times. Even the sea had its storms too, right?"
- **Effect:** storm rumble audio, window vibrates gently, sea becomes turbulent
- Tone: honest, gentle, grateful — not bitter or blaming
- Visual shift: room dims slightly, rain streaks on window, lightning flicker
- Lasts a few seconds, then fades into stillness → transitions to The Turn

### 8. The Turn
- Room darkens gradually
- Sea outside window starts rising and falling faster (*air laut surut pasang*)
- Origami stars on shelf dim one by one
- Animations decelerate
- **Text structure — scroll reveals step by step:**
  - *"After every storm, we rebuilt."*
  - *"But the waves kept coming."*
  - *"And slowly — the shore started changing shape."*
  - *"Something shifted between us."*
  - *"I don't know when. Or who."*
  - *"But the air felt different when we were in the same room."*
  - *(pause — everything dims)*
  - *"Air laut surut pasang, tapi rasanya akan selalu sama."*
  - *(pause — line stays alone)*
  - *"It used to be a comfort."*
  - *"Now it's the saddest truth I know."*
- After final line, tide slows. Silence. Screen darkens. → She Leaves First

### 9. She Leaves First
- Room still there, she's gone
- She left multiple times — I don't remember how many now. Not counting. Not keeping score.
- **Text — scroll reveals:**
  - *"You left."*
  - *"More than once. I don't remember how many times anymore."*
  - *"Not because I stopped caring."*
  - *"But because counting felt like keeping score."*
  - *"And this was never a game."*
  - *(pause)*
  - *"I don't think you wanted to go."*
  - *"I think you just — needed to."*
  - *"And maybe that was best for both of us."*
- Visual: the room still intact — one origami star fallen on the floor. One shelf empty. Photo frame angled slightly.
- Gray sky through window. Muted colors.
- Silence (audio fades)

### 10. Leaving Home
- House itself begins to fade/dissolve
- **Scenery:** A table — left behind. On it: her letters to you, and the ring you gave her when you proposed.
- **Text:**
  - *"I left everything on the table."*
  - *"The letters you wrote me."*
  - *"The ring I gave you."*
  - *"All of it — still there."*
  - *(pause)*
  - *"Because some things aren't meant to be carried forward."*
  - *"They're meant to be left where they belong."*
- Visual: camera lingers on the table. Then slowly pulls back. House recedes, door frame appears. Steps through.
- Tide sound swells gently. Stars visible again — distant but present.

### 11. Closing
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
| The bad times | Slow dim, gentle deceleration | Honest, quiet |
| Letters | Fold/unfold paper, handwritten reveal | Intimate, closing |
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
