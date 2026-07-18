export function initTideCanvas() {
  const canvas = document.getElementById('tide-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let width, height
  let time = 0

  const resize = () => {
    width = canvas.width = canvas.offsetWidth
    height = canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const waves = [
    { amp: 22, freq: 0.008, speed: 0.018, y: 0.78, color: 'rgba(201,177,208,0.18)' },
    { amp: 16, freq: 0.012, speed: 0.022, y: 0.82, color: 'rgba(201,177,208,0.12)' },
    { amp: 10, freq: 0.018, speed: 0.028, y: 0.86, color: 'rgba(201,177,208,0.08)' },
  ]

  function draw() {
    ctx.clearRect(0, 0, width, height)
    time += 1
    waves.forEach((w) => {
      ctx.beginPath()
      ctx.fillStyle = w.color
      ctx.moveTo(0, height)
      for (let x = 0; x <= width; x += 6) {
        const y = height * w.y + Math.sin((x * w.freq) + time * w.speed) * w.amp * (1 + Math.sin(time * 0.005) * 0.15)
        ctx.lineTo(x, y)
      }
      ctx.lineTo(width, height)
      ctx.closePath()
      ctx.fill()
    })
    requestAnimationFrame(draw)
  }
  draw()
}
