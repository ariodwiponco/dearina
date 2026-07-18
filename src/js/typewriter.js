export function initTypewriter() {
  const el = document.querySelector('.hero-tagline')
  if (!el) return
  const lines = [
    'You will always be the dream I always tried to reach.',
    'But I think I have fallen among the stars while trying.',
    'Dear Ina.'
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
    let speed = deleting ? 28 : 60
    if (!deleting && charIndex === current.length) {
      speed = 2200
      deleting = true
    } else if (deleting && charIndex === 0) {
      deleting = false
      lineIndex = (lineIndex + 1) % lines.length
      speed = 500
    }
    setTimeout(tick, speed)
  }
  tick()
}
