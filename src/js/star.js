// Confetti of tiny paper stars when the origami star is released.
export function burstStars(x, y) {
  const N = 26
  for (let i = 0; i < N; i++) {
    const s = document.createElement('span')
    s.className = 'burst-star'
    const angle = (Math.PI * 2 * i) / N + Math.random() * 0.5
    const dist = 60 + Math.random() * 140
    s.style.left = x + 'px'
    s.style.top = y + 'px'
    s.style.setProperty('--dx', Math.cos(angle) * dist + 'px')
    s.style.setProperty('--dy', Math.sin(angle) * dist - 80 + 'px')
    s.style.setProperty('--rot', Math.random() * 720 - 360 + 'deg')
    s.style.animationDelay = Math.random() * 0.15 + 's'
    s.innerHTML = '<svg viewBox="0 0 100 100"><polygon points="50,5 61,38 95,38 67,59 78,92 50,71 22,92 33,59 5,38 39,38"/></svg>'
    document.body.appendChild(s)
    setTimeout(() => s.remove(), 2600)
  }
}

export function initStar() {
  const star = document.getElementById('origami-star')
  const note = document.getElementById('release-note')
  if (!star) return

  const release = () => {
    if (star.classList.contains('folding') || star.classList.contains('floating')) return
    const r = star.getBoundingClientRect()
    star.classList.add('folding')
    setTimeout(() => {
      star.classList.remove('folding')
      star.classList.add('floating')
      burstStars(r.left + r.width / 2, r.top + r.height / 2)
      note && note.classList.add('visible')
    }, 1000)
  }

  star.addEventListener('click', release)
  star.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); release() } })
}
