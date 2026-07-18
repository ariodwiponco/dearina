// Little poetic touches that make the page feel alive.
export function initTouches() {
  // 1. Falling origami stars drift down occasionally in dark scenes
  const drift = document.createElement('div')
  drift.className = 'star-drift'
  document.body.appendChild(drift)
  const spawnStar = () => {
    const s = document.createElement('span')
    s.className = 'drift-star'
    s.style.left = Math.random() * 100 + 'vw'
    s.style.animationDuration = 14 + Math.random() * 18 + 's'
    s.style.opacity = 0.25 + Math.random() * 0.4
    s.innerHTML = '<svg viewBox="0 0 100 100"><polygon points="50,5 61,38 95,38 67,59 78,92 50,71 22,92 33,59 5,38 39,38"/></svg>'
    drift.appendChild(s)
    setTimeout(() => s.remove(), 34000)
  }
  setInterval(spawnStar, 7000)
  spawnStar()

  // 2. Cursor leaves a faint stardust trail (desktop only, throttled)
  if (matchMedia('(pointer: fine)').matches) {
    let last = 0
    window.addEventListener('mousemove', (e) => {
      const now = performance.now()
      if (now - last < 90) return
      last = now
      const d = document.createElement('span')
      d.className = 'stardust'
      d.style.left = e.clientX + 'px'
      d.style.top = e.clientY + 'px'
      document.body.appendChild(d)
      setTimeout(() => d.remove(), 1300)
    }, { passive: true })
  }

  // 3. Title tab whispers when you leave
  let title = document.title
  document.addEventListener('visibilitychange', () => {
    document.title = document.hidden ? 'come back soon…' : title
  })

  // 4. Heartbeat on the engagement ring: tiny pulse of the whole scene
  const engagement = document.getElementById('engagement')
  if (engagement && window.ScrollTrigger) {
    ScrollTrigger.create({
      trigger: engagement, start: 'top 50%', once: true,
      onEnter: () => engagement.classList.add('heartbeat'),
    })
  }
}
