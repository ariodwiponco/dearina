// The singularity: one fixed gradient behind the whole page.
// Each scene declares its colors; while scrolling we lerp between them
// so there is never a visible seam between sections.
const STOPS = [
  { id: 'opening',    top: '#1A0F2E', bottom: '#110B1A', stars: 1 },
  { id: 'beginning',  top: '#2D1B4E', bottom: '#5A3A5E', stars: 0.6 },
  { id: 'moving',     top: '#5A3A5E', bottom: '#8A6480', stars: 0.35 },
  { id: 'building',   top: '#8A6480', bottom: '#A8825F', stars: 0.15 },
  { id: 'good',       top: '#A8825F', bottom: '#C89A6A', stars: 0.05 },
  { id: 'engagement', top: '#C89A6A', bottom: '#B97F55', stars: 0.1 },
  { id: 'bad',        top: '#6B5B7B', bottom: '#4A4258', stars: 0.2 },
  { id: 'turn',       top: '#4A4258', bottom: '#3D4A5A', stars: 0.3 },
  { id: 'leaves',     top: '#3D4A5A', bottom: '#2F3542', stars: 0.4 },
  { id: 'leaving',    top: '#4A3B5E', bottom: '#2D2D3F', stars: 0.6 },
  { id: 'closing',    top: '#1A0F2E', bottom: '#0C0716', stars: 1 },
]

const hex2rgb = (hx) => [parseInt(hx.slice(1, 3), 16), parseInt(hx.slice(3, 5), 16), parseInt(hx.slice(5, 7), 16)]
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t))
const css = (rgb) => `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`

export function initWash() {
  const root = document.documentElement
  const sections = STOPS.map((s) => ({ ...s, el: document.getElementById(s.id), topRGB: hex2rgb(s.top), botRGB: hex2rgb(s.bottom) })).filter((s) => s.el)

  const update = () => {
    const mid = window.scrollY + window.innerHeight * 0.5
    let i = 0
    while (i < sections.length - 1 && mid > sections[i + 1].el.offsetTop) i++
    const cur = sections[i]
    const nxt = sections[Math.min(i + 1, sections.length - 1)]
    const span = Math.max(nxt.el.offsetTop - cur.el.offsetTop, 1)
    const t = Math.min(Math.max((mid - cur.el.offsetTop) / span, 0), 1)
    root.style.setProperty('--wash1', css(mix(cur.topRGB, nxt.topRGB, t)))
    root.style.setProperty('--wash2', css(mix(cur.botRGB, nxt.botRGB, t)))
    root.style.setProperty('--stars-alpha', (cur.stars + (nxt.stars - cur.stars) * t).toFixed(2))
  }

  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
  update()
}
