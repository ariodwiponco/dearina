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
| 5 | **The good times** | Same room, vibrant | Room fully alive, colorful, sunlit, photos everywhere, playful energy | Alive, fun |
| 6 | **The bad times** | Room dims, storm outside | Window rattles, rain streaks, lightning flickers | Honest, brief |
| 7 | **The turn** | Room darkens, sea rises and falls faster | *Air laut surut pasang* visualized erratically. Origami stars dim one by one. | Unsettling |
| 8 | **She leaves first** | Room still there, she is gone | Window shows gray sea, empty room. One origami star left on floor. House feels hollow. | Hollow loss |
| 9 | **Leaving home** | Table with letter + ring | Camera lingers on table, then pulls back. House fades into sea. Stars reappear distant. | Release |
| 10 | **Closing / Letter** | Night sky again | One origami star. Clickable letter. Star flies away after reading. | Peaceful goodbye |

### Key metaphor: Building home gradually
The home section starts as an **empty room with a window overlooking the sea**. As user scrolls through this chapter, items appear one by one. A chair, a table, a lamp, photos on walls, plants, origami stars on shelves. Each item represents a memory, a moment built together. The room grows full gradually, mirroring how relationships are built piece by piece.

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
  - *"You will always be the dream I always tried to reach."*
  - *"But I think..."*
  - *"I have fallen among the stars while trying."*
- Stars glow brighter on "fallen among the stars"
- Soft, slow pace. This is the first breath of the story.
- Scroll triggers transition to dawn (Section 3)

### 3. The Beginning
- Night sky slowly fades into warm dawn
- **First memory:** A staircase scene. I was at the bottom, she was at the top, looking down at me. I had asked God for a partner. And there she was.
- **Timeline revealed gently:**
  - *"I first saw you in 2019."*
  - *"But I was not ready. I had someone else."*
  - *"Still. I could not forget your face."*
  - *"In 2022, I finally gathered the courage to reach out."*
- Text split with image — diary-entry style. First photo from early days appears.
- Soft, warm. Dawn colors. Hesitant hope.

### 4. Building Home (Gradual)
- **Scroll-driven reveal:** empty room → furniture appears one by one
- Window visible, facing ocean
- Items appear in order (TBD): window frame → table → chair → lamp → shelf → origami stars → photos on wall → plants
- Warm golden light growing with each addition
- **Opening line:** "Apakah kamu ingat impresi pertamamu terhadap aku? Laki-laki ugal-ugalan."
- Scroll reveals: "A love you have never experienced before, right?"
- Then as items fill the room:
  - "Rumah aku dan kamu memang tidak sempurna."
  - "Tapi kita sama-sama mau mengisinya."
- Each item represents a memory, a moment built together

### 5. The Good Times
- Room fully furnished, vibrant colors
- **Dynamic image + text pairs** — each line has its own photos (single or multiple) accompanying it
- Text appears one line at a time with scroll, each has matching photo(s):
  - **"Countless places we visited."** → photos of places together
  - **"Endless foods and drinks we tried."** → food photos, cafe shots
  - **"Every juice I blended for you."** → kitchen moments, glasses of juice
  - **"Every food I cooked for us."** → cooking together, shared meals
  - **"Every cake you baked for me."** → her baking, cakes on the table
  - **"Boundless activities we did together."** → activity photos, candid moments
  - **"And infinite kisses and hugs sent between us."** → intimate photos
- Photos enter playfully — card flip, bounce, staggered reveal
- Hover/tap wiggle on photos
- Masonry or varied grid — photos sized by importance
- Each pair has its own layout (some full-bleed, some split, some grid) — never repetitive

### 6. The Bad Times (Acknowledgment)
- Acknowledging that not everything was perfect
- **Text:** "We acknowledged there is always two sides of a coin. But I am always grateful that I had you in those bad times. Even the sea had its storms too, right?"
- **Effect:** storm rumble audio, window vibrates gently, sea becomes turbulent
- Tone: honest, gentle, grateful — not bitter or blaming
- Visual shift: room dims slightly, rain streaks on window, lightning flicker
- Lasts a few seconds, then fades into stillness → transitions to The Turn

### 7. The Turn
- Room darkens gradually
- Sea outside window starts rising and falling faster (*air laut surut pasang*)
- Origami stars on shelf dim one by one
- Animations decelerate
- **Text structure — scroll reveals step by step:**
  - *"After every storm, we rebuilt."*
  - *"But the waves kept coming."*
  - *"And slowly the shore started changing shape."*
  - *"Something shifted between us."*
  - *"I do not know when. Or who."*
  - *"But the air felt different when we were in the same room."*
  - *(pause — everything dims)*
  - *"Air laut surut pasang, tapi rasanya akan selalu sama."*
  - *(pause — line stays alone)*
  - *"It used to be a comfort."*
  - *"Now it is the saddest truth I know."*
- After final line, tide slows. Silence. Screen darkens. → She Leaves First

### 8. She Leaves First
- Room still there, she is gone
- She left multiple times. I do not remember how many anymore. Not counting. Not keeping score.
- **Text — scroll reveals:**
  - *"You left."*
  - *"More than once. I do not remember how many times anymore."*
  - *"Not because I stopped caring."*
  - *"But because counting felt like keeping score."*
  - *"And this was never a game."*
  - *(pause)*
  - *"I do not think you wanted to go."*
  - *"I think you just needed to."*
  - *"And maybe that was best for both of us."*
- Visual: the room still intact — one origami star fallen on the floor. One shelf empty. Photo frame angled slightly.
- Gray sky through window. Muted colors.
- Silence (audio fades)

### 9. Leaving Home
- **Scenery:** A table. On it: the letter you wrote to her, folded. And the ring you gave her when you proposed.
- House begins to fade around the table
- **Text:**
  - *"I left everything on the table."*
  - *"The letter I wrote you."*
  - *"The ring I gave you."*
  - *"All of it. Still there."*
  - *(pause)*
  - *"Because some things are not meant to be carried forward."*
  - *"They are meant to be left where they belong."*
- The letter is clickable. Tap to open and read.
- Visual: camera lingers on the table. Then slowly pulls back. House recedes, door frame appears. Steps through.
- Tide sound swells gently. Stars visible again — distant but present.

### 10. Closing — The Letter (Clickable)
- Back to the night sky. Stars twinkling.
- A single origami star floats gently on screen.
- **Below it: the folded letter** — same paper texture as Leaving Home table scene.
- **Click/tap the letter** → it unfolds with a paper-crackle animation
- **Text revealed:**

  *"Dear Ina,"*

  *"Time has flown so fast, has not it?"*

  *"Four years with you. All the good things, all the bad things, all the joy and tears. All of everything."*

  *"We fought. We tried. We held together. We hoped for the best in each other."*

  *"There is not a single second I regret being with you."*

  *"Every effort I put in to give you the world and everything inside it."*

  *"We dreamed. I guess it stayed a dream."*

  *"Maybe we were not meant to be in this universe."*

  *"Do I envy the version of me in another universe who ends up with you?"*

  *"Of course I do."*

  *(pause)*

  *"Aku mungkin bukan yang terbaik di luar sana, tapi aku sudah berusaha yang terbaik menurut aku. Maaf itu belum cukup untuk kamu."*

  *(pause)*

  *"Tidak ada sedikit pun yang bisa aku rayakan dari perpisahan kita, karena kamu, adalah hal yang selalu aku impikan."*

  *(pause)*

  *"I am not celebrating this goodbye."*
  *"I am honoring what we built."*
  *"Every corner of that home. Every star I folded for you. Every wave we weathered."*

  *"You were my dream, Ina."*

  *"I hope your beauty never fades. Not just the one the world sees. But the one I was lucky enough to witness. The way you smiled when you baked. The way you looked at me when you thought I was not looking. I hope that beauty stays. Always."*

  *"And dreams do not disappear."*
  *"They just change shape."*

  *"Goodbye, my dream girl."*

#### Google Drive Archive
- A small line or button at the bottom: *"Archive of us"*
- Links to Google Drive folder (TBD — you will add the link later)
- Contains photos of you and Ina together

#### Final interactive — Star Release
- After reading, a single origami star appears on screen
- Tap it → it folds itself (CSS keyframes: paper crease animation), then floats upward and drifts into the night sky
- Full circle. Opening stars → building together → letting go.

## 9. Animation & Transition Per Section

| Section | Animation | Vibe |
|---------|-----------|------|
| Password gate | Clean slide-in, no drama | Functional, sets tone |
| Opening: Stars | Stars twinkle, slow drift | Dreamy |
| The beginning | Night→dawn gradient shift, photos fade-in softly | Calm, hopeful |
| Building home | Items appear one by one, fade+drift-up, warm glow grows | Growing warmth |
| The good times | **Playful** — photos flip-in, bounce, wiggle on hover | Fun, alive |
| The bad times | Slow dim, gentle deceleration, storm vibration | Honest, quiet |
| The turn | Vignette darkens, tide speeds up, stars dim | Unsettling |
| She leaves | Stillness — almost no animation, just emptiness | Hollow |
| Leaving home | House dissolves, door opening, fade to horizon | Melancholic |
| Closing / Letter | Paper unfold, star release, final stillness | Peaceful release |

- **Section-triggered mood shift:** animations, colors, audio all shift as user scrolls
- All animations use `IntersectionObserver` + CSS transitions/transforms (no heavy libs)
- Target < 80KB extra, no jank on mid-range devices

## 10. UI Elements
- **Scroll progress indicator** — thin line top-left, fills as they read OR chapter dots on the side
- **Loading state:** first visit → title card with slow fade-in before scroll
- **Play/pause button** — top-right corner, for music/ambiance

## 11. Performance Targets
- Lighthouse mobile: 90+ Performance, 95+ Accessibility
- Total CSS/JS: < 80KB
- No external libraries (no jQuery, no GSAP, no framework)
- Photos: WebP format, lazy loading via `loading="lazy"`
- Animations: GPU-accelerated (transform, opacity only)
- Google Fonts: subset latin, preconnect, preload

---

_Plan last updated: 2026-07-18_
_Ready for Kimi K3 to build_
