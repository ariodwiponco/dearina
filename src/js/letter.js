export function initLetter() {
  const envelope = document.getElementById('envelope')
  const toggle = document.getElementById('letter-toggle')
  if (!envelope || !toggle) return

  const lines = envelope.querySelectorAll('.paper-line')
  lines.forEach((line, i) => { line.style.setProperty('--i', i) })

  toggle.addEventListener('click', () => {
    const isOpen = envelope.classList.contains('open')
    if (isOpen) {
      envelope.classList.remove('open')
      toggle.textContent = 'open letter'
      return
    }
    envelope.classList.add('open')
    toggle.textContent = 'fold letter'
  })
}
