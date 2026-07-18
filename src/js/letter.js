export function initLetter() {
  const envelope = document.getElementById('envelope')
  const toggle = document.getElementById('letter-toggle')
  if (!envelope || !toggle) return

  const lines = envelope.querySelectorAll('.paper-line')

  toggle.addEventListener('click', () => {
    const isOpen = envelope.classList.contains('open')
    if (isOpen) {
      envelope.classList.remove('open')
      toggle.textContent = 'buka surat'
      return
    }
    envelope.classList.add('open')
    toggle.textContent = 'lipat surat'

    // Stagger text lines
    gsap.fromTo(lines, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power2.out', delay: 0.4 })
  })
}
