export function initGate(onUnlock) {
  const gate = document.getElementById('gate')
  const input = document.getElementById('pass-input')
  const btn = document.getElementById('pass-btn')
  const error = document.getElementById('pass-error')
  const PASS = '251101'

  input.focus()

  const check = () => {
    if (input.value === PASS) {
      gate.classList.add('exit')
      setTimeout(() => {
        gate.style.display = 'none'
        if (onUnlock) onUnlock()
      }, 1100)
    } else {
      error.classList.add('show')
      input.value = ''
      input.focus()
      setTimeout(() => error.classList.remove('show'), 1500)
    }
  }

  btn.addEventListener('click', check)
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check() })
}
