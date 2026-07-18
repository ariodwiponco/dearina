import './styles/main.css'
import './styles/scenes.css'
import { initGate } from './js/gate.js'
import { initTideCanvas } from './js/tideCanvas.js'
import { initTypewriter } from './js/typewriter.js'
import { initScrollScenes } from './js/scrollScenes.js'
import { initRoom } from './js/room.js'
import { initLetter } from './js/letter.js'
import { initStar } from './js/star.js'
import { initStarCanvas } from './js/starCanvas.js'
import { initProgress } from './js/progress.js'

gsap.registerPlugin(ScrollTrigger)

initGate(() => {
  document.body.style.overflow = 'auto'
  document.getElementById('stage').classList.add('unlocked')
  initTideCanvas()
  initTypewriter()
  initScrollScenes()
  initRoom()
  initLetter()
  initStar()
  initStarCanvas()
  initProgress()

  gsap.fromTo('#hero .hero-title', { y: 80, opacity: 0, rotateX: 15 }, { y: 0, opacity: 1, rotateX: 0, duration: 1.6, ease: 'power3.out', delay: 0.2 })
  gsap.fromTo('#hero .scroll-orb', { opacity: 0, y: 20 }, { opacity: 0.7, y: 0, duration: 1, ease: 'power2.out', delay: 1.2 })
})
