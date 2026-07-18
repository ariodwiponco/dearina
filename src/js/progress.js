export function initProgress() {
  const fill = document.querySelector('.progress-fill')
  if (!fill) return
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const pct = docHeight ? (scrollTop / docHeight) * 100 : 0
    fill.style.width = `${pct}%`
  }, { passive: true })
}
