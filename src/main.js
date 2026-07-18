import './styles/main.css'
import './styles/scenes.css'
import { initGate } from './js/gate.js'
import { initStarfield } from './js/starfield.js'
import { initWash } from './js/wash.js'
import { initScrollScenes } from './js/scrollScenes.js'
import { initRoom } from './js/room.js'
import { initLetter } from './js/letter.js'
import { initStar } from './js/star.js'
import { initSparkles } from './js/sparkles.js'
import { initOcean } from './js/ocean.js'
import { initProgress } from './js/progress.js'
import { initMusic } from './js/music.js'
import { initTouches } from './js/touches.js'

gsap.registerPlugin(ScrollTrigger)

initGate(() => {
  document.getElementById('stage').classList.add('unlocked')
  document.getElementById('stage').setAttribute('aria-hidden', 'false')
  initStarfield()
  initWash()
  initScrollScenes()
  initRoom()
  initLetter()
  initStar()
  initSparkles()
  initOcean()
  initProgress()
  initMusic()
  initTouches()

  gsap.fromTo('.opening-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 2.2, ease: 'power3.out', delay: 0.3 })
  gsap.fromTo('.scroll-hint', { opacity: 0 }, { opacity: 0.5, duration: 1.4, delay: 2 })
})
