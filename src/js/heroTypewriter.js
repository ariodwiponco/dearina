export function initHeroTypewriter() {
  const el = document.querySelector('.hero-tagline')
  if (!el) return
  const lines = [
    'rumah yang aku bangun untukmu perlahan.',
    'air laut surut, air laut pasang.',
    'untuk seseorang yang pernah aku tunggu.'
  ]
  let lineIndex = 0
  let charIndex = 0
  let deleting = false

  function tick() {
    const current = lines[lineIndex]
    if (deleting) {
      el.textContent = current.substring(0, charIndex - 1)
      charIndex--
    } else {
      el.textContent = current.substring(0, charIndex + 1)
      charIndex++
    }

    let speed = deleting ? 30 : 65
    if (!deleting && charIndex === current.length) {
      speed = 2200
      deleting = true
    } else if (deleting && charIndex === 0) {
      deleting = false
      lineIndex = (lineIndex + 1) % lines.length
      speed = 600
    }

    setTimeout(tick, speed)
  }

  tick()
}
