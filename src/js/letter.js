export function initLetter() {
  const envelope = document.getElementById('envelope')
  const toggle = document.getElementById('letter-toggle')
  if (!envelope) return

  const lines = envelope.querySelectorAll('.paper-line')
  lines.forEach((line, i) => { line.style.setProperty('--i', i) })

  const toggleOpen = () => {
    const isOpen = envelope.classList.contains('open')
    if (isOpen) {
      envelope.classList.remove('open')
      if (toggle) toggle.textContent = 'open letter'
      return
    }
    envelope.classList.add('open')
    if (toggle) toggle.textContent = 'fold letter'
  }

  envelope.addEventListener('click', toggleOpen)
  envelope.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') toggleOpen() })
}
