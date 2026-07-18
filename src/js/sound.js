export function initSound() {
  const btn = document.getElementById('sound-toggle')
  if (!btn) return

  // ambient synthesised ocean via Web Audio API (no external asset)
  let ctx = null
  let active = false
  let nodes = []

  const createNoise = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const bufferSize = audioCtx.sampleRate * 2
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1
    }
    const noise = audioCtx.createBufferSource()
    noise.buffer = buffer
    noise.loop = true

    const filter = audioCtx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 400

    const gain = audioCtx.createGain()
    gain.gain.value = 0.05

    const lfo = audioCtx.createOscillator()
    lfo.type = 'sine'
    lfo.frequency.value = 0.1
    const lfoGain = audioCtx.createGain()
    lfoGain.gain.value = 200
    lfo.connect(lfoGain)
    lfoGain.connect(filter.frequency)
    lfo.start()

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(audioCtx.destination)
    noise.start()

    return { audioCtx, nodes: [noise, lfo, gain] }
  }

  btn.addEventListener('click', () => {
    if (!active) {
      const s = createNoise()
      ctx = s.audioCtx
      nodes = s.nodes
      active = true
      btn.classList.remove('muted')
      btn.querySelector('.sound-label').textContent = 'sound on'
    } else {
      nodes.forEach((n) => { try { n.stop() } catch (e) {} })
      if (ctx && ctx.state !== 'closed') ctx.close()
      active = false
      btn.classList.add('muted')
      btn.querySelector('.sound-label').textContent = 'sound'
    }
  })

  btn.classList.add('muted')
}
