export function initProgress() {
  const fill = document.querySelector('.progress-fill')
  if (!fill) return
  window.addEventListener('scroll', () => {
    const top = window.scrollY
    const max = document.documentElement.scrollHeight - window.innerHeight
    fill.style.width = `${max ? (top / max) * 100 : 0}%`
  }, { passive: true })
}
