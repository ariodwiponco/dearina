// Generative score. No audio files: everything is synthesized.
// Three layers — ocean, a warm pad breathing through an emotional
// chord cycle, and sparse music-box notes. The mix follows the story:
// scenes push their own mood (via data-mood) into the engine.
const CHORDS = [
  [220.00, 261.63, 329.63],          // Am
  [174.61, 220.00, 261.63],          // F
  [130.81, 164.81, 196.00, 246.94],  // Cmaj7
  [196.00, 246.94, 293.66],          // G
]
const BELLS = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.5] // C pentatonic-ish

export function initMusic() {
  const btn = document.getElementById('sound-toggle')
  if (!btn) return
  let ctx, master, oceanGain, padGain, bellGain, timers = [], active = false
  const mood = { ocean: 0.5, pad: 0.7, bells: 0.5 } // live targets

  const noiseBuffer = (c) => {
    const size = c.sampleRate * 4
    const buf = c.createBuffer(1, size, c.sampleRate)
    const d = buf.getChannelData(0)
    let last = 0
    for (let i = 0; i < size; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5 }
    return buf
  }

  const startOcean = () => {
    const src = ctx.createBufferSource()
    src.buffer = noiseBuffer(ctx); src.loop = true
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 320
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07
    const lg = ctx.createGain(); lg.gain.value = 150
    lfo.connect(lg); lg.connect(f.frequency); lfo.start()
    oceanGain = ctx.createGain(); oceanGain.gain.value = 0
    src.connect(f); f.connect(oceanGain); oceanGain.connect(master)
    src.start()
    timers.push(() => { try { src.stop(); lfo.stop() } catch (_) {} })
  }

  const playChord = (freqs, when, dur) => {
    freqs.forEach((fq) => {
      [0, 1].forEach((v) => {
        const o = ctx.createOscillator()
        o.type = 'triangle'
        o.frequency.value = fq * (v ? 1.003 : 0.997) // gentle detune
        const g = ctx.createGain()
        g.gain.setValueAtTime(0, when)
        g.gain.linearRampToValueAtTime(0.028, when + dur * 0.4)
        g.gain.linearRampToValueAtTime(0, when + dur)
        o.connect(g); g.connect(padGain)
        o.start(when); o.stop(when + dur + 0.1)
      })
    })
  }

  const padLoop = () => {
    const DUR = 9
    let i = 0
    const tick = () => {
      if (!active) return
      playChord(CHORDS[i % CHORDS.length], ctx.currentTime + 0.05, DUR)
      i++
      timers.push(setTimeout(tick, (DUR - 1.5) * 1000))
    }
    tick()
  }

  const bellLoop = () => {
    const tick = () => {
      if (!active) return
      if (Math.random() < 0.75) {
        const o = ctx.createOscillator()
        o.type = 'sine'
        o.frequency.value = BELLS[Math.floor(Math.random() * BELLS.length)]
        const g = ctx.createGain()
        const t = ctx.currentTime
        g.gain.setValueAtTime(0, t)
        g.gain.linearRampToValueAtTime(0.055, t + 0.01)
        g.gain.exponentialRampToValueAtTime(0.0001, t + 2.8)
        o.connect(g); g.connect(bellGain)
        o.start(t); o.stop(t + 3)
      }
      timers.push(setTimeout(tick, 2600 + Math.random() * 4200))
    }
    tick()
  }

  // follow the active scene's mood
  const followScenes = () => {
    const map = {
      opening:    { ocean: 0.35, pad: 0.8, bells: 0.8 },
      beginning:  { ocean: 0.3,  pad: 0.9, bells: 0.7 },
      moving:     { ocean: 0.3,  pad: 1.0, bells: 0.6 },
      building:   { ocean: 0.25, pad: 1.0, bells: 0.9 },
      good:       { ocean: 0.2,  pad: 1.0, bells: 1.0 },
      engagement: { ocean: 0.3,  pad: 1.2, bells: 1.2 },
      bad:        { ocean: 1.0,  pad: 0.5, bells: 0.1 },
      turn:       { ocean: 1.2,  pad: 0.45, bells: 0.15 },
      leaves:     { ocean: 0.5,  pad: 0.3, bells: 0.25 },
      leaving:    { ocean: 1.3,  pad: 0.4, bells: 0.3 },
      closing:    { ocean: 0.5,  pad: 0.8, bells: 0.9 },
    }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting && map[e.target.id]) Object.assign(mood, map[e.target.id]) })
    }, { threshold: 0.4 })
    document.querySelectorAll('.scene[id]').forEach((s) => io.observe(s))
    const lerp = () => {
      if (!active) return
      const t = ctx.currentTime + 0.6
      oceanGain.gain.linearRampToValueAtTime(0.075 * mood.ocean, t)
      padGain.gain.linearRampToValueAtTime(0.9 * mood.pad, t)
      bellGain.gain.linearRampToValueAtTime(0.8 * mood.bells, t)
      timers.push(setTimeout(lerp, 700))
    }
    lerp()
  }

  const start = () => {
    ctx = new (window.AudioContext || window.webkitAudioContext)()
    master = ctx.createGain(); master.gain.value = 0
    master.connect(ctx.destination)
    master.gain.linearRampToValueAtTime(1, ctx.currentTime + 4)
    padGain = ctx.createGain(); padGain.gain.value = 0.9; padGain.connect(master)
    bellGain = ctx.createGain(); bellGain.gain.value = 0.8; bellGain.connect(master)
    startOcean()
    active = true
    padLoop(); bellLoop(); followScenes()
  }

  const stop = () => {
    active = false
    timers.forEach((t) => typeof t === 'function' ? t() : clearTimeout(t))
    timers = []
    if (ctx && ctx.state !== 'closed') {
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1)
      setTimeout(() => ctx.close(), 1200)
    }
  }

  btn.addEventListener('click', () => {
    if (active) { stop(); btn.classList.add('muted') }
    else { start(); btn.classList.remove('muted') }
  })
}
