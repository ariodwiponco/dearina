export function initStarCanvas() {
  const canvas = document.getElementById('star-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let width, height
  const particles = []

  const resize = () => {
    width = canvas.width = canvas.offsetWidth
    height = canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      vy: -Math.random() * 0.6 - 0.2,
      vx: Math.random() * 0.4 - 0.2,
      alpha: Math.random() * 0.5 + 0.2,
    })
  }

  function draw() {
    ctx.clearRect(0, 0, width, height)
    particles.forEach((p) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(201,177,208,${p.alpha})`
      ctx.fill()
      p.y += p.vy
      p.x += p.vx
      p.alpha += Math.sin(Date.now() * 0.001 + p.x) * 0.005
      p.alpha = Math.max(0.1, Math.min(0.7, p.alpha))
      if (p.y < -10) p.y = height + 10
      if (p.x < -10) p.x = width + 10
      if (p.x > width + 10) p.x = -10
    })
    requestAnimationFrame(draw)
  }
  draw()
}
