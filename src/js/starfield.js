// One starfield canvas behind everything. Star density/alpha follows scroll
// (bright at opening, dim through the middle, returns at closing).
export function initStarfield() {
  const canvas = document.getElementById('starfield')
  const ctx = canvas.getContext('2d')
  let w, h
  const stars = []
  const COUNT = 130

  const resize = () => {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  for (let i = 0; i < COUNT; i++) {
    stars.push({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      tw: Math.random() * Math.PI * 2,
      spd: 0.008 + Math.random() * 0.02,
      drift: (Math.random() - 0.5) * 0.00012,
    })
  }

  function draw() {
    ctx.clearRect(0, 0, w, h)
    stars.forEach((s) => {
      s.tw += s.spd
      s.x = (s.x + s.drift + 1) % 1
      const a = 0.25 + Math.abs(Math.sin(s.tw)) * 0.6
      ctx.beginPath()
      ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(254,247,255,${a})`
      ctx.fill()
    })
    requestAnimationFrame(draw)
  }
  draw()
}
