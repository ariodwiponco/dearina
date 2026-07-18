// Ambient ocean built with Web Audio (no asset download).
// Filtered noise with a slow LFO = distant waves. Never autoplays.
export function initSound() {
  const btn = document.getElementById('sound-toggle')
  if (!btn) return
  let ctx = null, nodes = [], active = false

  const start = () => {
    ctx = new (window.AudioContext || window.webkitAudioContext)()
    const size = ctx.sampleRate * 4
    const buf = ctx.createBuffer(1, size, ctx.sampleRate)
    const data = buf.getChannelData(0)
    let last = 0
    for (let i = 0; i < size; i++) {
      const white = Math.random() * 2 - 1
      last = (last + 0.02 * white) / 1.02
      data[i] = last * 3.5
    }
    const src = ctx.createBufferSource()
    src.buffer = buf
    src.loop = true

    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 340

    const gain = ctx.createGain()
    gain.gain.value = 0
    gain.gain.linearRampToValueAtTime(0.09, ctx.currentTime + 3)

    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.08
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 160
    lfo.connect(lfoGain)
    lfoGain.connect(filter.frequency)
    lfo.start()

    src.connect(filter); filter.connect(gain); gain.connect(ctx.destination)
    src.start()
    nodes = [src, lfo]
  }

  btn.addEventListener('click', () => {
    if (!active) {
      start()
      active = true
      btn.classList.remove('muted')
    } else {
      nodes.forEach((n) => { try { n.stop() } catch (_) {} })
      ctx && ctx.state !== 'closed' && ctx.close()
      active = false
      btn.classList.add('muted')
    }
  })
}
