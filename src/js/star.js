export function initStar() {
  const star = document.getElementById('origami-star')
  const note = document.getElementById('release-note')
  if (!star) return

  star.addEventListener('click', () => {
    if (star.classList.contains('folding') || star.classList.contains('floating')) return
    star.classList.add('folding')
    setTimeout(() => {
      star.classList.remove('folding')
      star.classList.add('floating')
      if (note) note.classList.add('visible')
    }, 900)
  })

  star.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') star.click() })
}
