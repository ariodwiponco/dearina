// Wide ocean horizon for The Turn. Tide breathing, waves layered.
export function initOcean() {
  const canvas = document.getElementById('ocean-canvas')
  const scene = document.getElementById('turn')
  if (!canvas || !scene) return
  const ctx = canvas.getContext('2d')
  let w, h, running = false, t = 0

  const resize = () => {
    w = canvas.width = scene.offsetWidth
    h = canvas.height = scene.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const waves = [
    { amp: 16, freq: 0.010, spd: 0.016, y: 0.80, c: 'rgba(201,177,208,0.14)' },
    { amp: 12, freq: 0.014, spd: 0.024, y: 0.85, c: 'rgba(120,140,170,0.16)' },
    { amp: 8,  freq: 0.020, spd: 0.030, y: 0.90, c: 'rgba(90,110,140,0.18)' },
  ]

  function draw() {
    if (!running) return
    ctx.clearRect(0, 0, w, h)
    t += 1
    const breathe = 1 + Math.sin(t * 0.006) * 0.35
    waves.forEach((wv) => {
      ctx.beginPath()
      ctx.moveTo(0, h)
      for (let x = 0; x <= w; x += 5) {
        ctx.lineTo(x, h * wv.y + Math.sin(x * wv.freq + t * wv.spd) * wv.amp * breathe)
      }
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.fillStyle = wv.c
      ctx.fill()
    })
    requestAnimationFrame(draw)
  }

  ScrollTrigger.create({
    trigger: scene,
    start: 'top 90%',
    end: 'bottom 10%',
    onEnter: () => { running = true; draw() },
    onEnterBack: () => { running = true; draw() },
    onLeave: () => { running = false },
    onLeaveBack: () => { running = false },
  })
}
