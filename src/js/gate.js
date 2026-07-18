export function initGate(onUnlock) {
  const gate = document.getElementById('gate')
  const input = document.getElementById('pass-input')
  const btn = document.getElementById('pass-btn')
  const error = document.getElementById('pass-error')
  const PASS = '25112001'

  document.body.style.overflow = 'hidden'
  setTimeout(() => input.focus(), 600)

  const check = () => {
    if (input.value === PASS) {
      gate.classList.add('exit')
      document.body.style.overflow = 'auto'
      setTimeout(() => {
        gate.style.display = 'none'
        onUnlock && onUnlock()
      }, 1500)
    } else {
      error.classList.add('show')
      input.value = ''
      input.focus()
      setTimeout(() => error.classList.remove('show'), 1800)
    }
  }

  btn.addEventListener('click', check)
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check() })
}
