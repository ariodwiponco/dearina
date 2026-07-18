export function initStar() {
  const star = document.getElementById('origami-star')
  const note = document.getElementById('release-note')
  if (!star) return

  const release = () => {
    if (star.classList.contains('folding') || star.classList.contains('floating')) return
    star.classList.add('folding')
    setTimeout(() => {
      star.classList.remove('folding')
      star.classList.add('floating')
      note && note.classList.add('visible')
    }, 1000)
  }

  star.addEventListener('click', release)
  star.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); release() } })
}
