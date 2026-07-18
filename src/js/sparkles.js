// Gold sparkle particles around the engagement scene while it is active.
export function initSparkles() {
  const canvas = document.getElementById('sparkle-canvas')
  const scene = document.getElementById('engagement')
  if (!canvas || !scene) return
  const ctx = canvas.getContext('2d')
  let w, h, running = false
  const parts = []

  const resize = () => {
    w = canvas.width = scene.offsetWidth
    h = canvas.height = scene.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  for (let i = 0; i < 46; i++) {
    parts.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.8 + 0.5, tw: Math.random() * Math.PI * 2, spd: 0.02 + Math.random() * 0.03, vy: -0.0006 - Math.random() * 0.0008 })
  }

  function draw() {
    if (!running) return
    ctx.clearRect(0, 0, w, h)
    parts.forEach((p) => {
      p.tw += p.spd
      p.y = (p.y + p.vy + 1) % 1
      const a = 0.15 + Math.abs(Math.sin(p.tw)) * 0.7
      ctx.beginPath()
      ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,215,140,${a})`
      ctx.fill()
    })
    requestAnimationFrame(draw)
  }

  ScrollTrigger.create({
    trigger: scene,
    start: 'top 80%',
    end: 'bottom 20%',
    onEnter: () => { running = true; draw() },
    onEnterBack: () => { running = true; draw() },
    onLeave: () => { running = false },
    onLeaveBack: () => { running = false },
  })
}
