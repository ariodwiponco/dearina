import './styles/main.css'
import { initGate } from './js/gate.js'
import { initTideCanvas } from './js/tideCanvas.js'
import { initHeroTypewriter } from './js/heroTypewriter.js'
import { initScrollScenes } from './js/scrollScenes.js'
import { initLetter } from './js/letter.js'
import { initStar } from './js/star.js'
import { initStarCanvas } from './js/starCanvas.js'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

initGate(() => {
  document.body.style.overflow = 'auto'
  document.getElementById('stage').classList.add('unlocked')
  initTideCanvas()
  initHeroTypewriter()
  initScrollScenes()
  initLetter()
  initStar()
  initStarCanvas()

  // Introduce the site
  gsap.fromTo('#hero .hero-title', { y: 80, opacity: 0, rotateX: 15 }, { y: 0, opacity: 1, rotateX: 0, duration: 1.6, ease: 'power3.out', delay: 0.2 })
  gsap.fromTo('#hero .eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.8 })
  gsap.fromTo('#hero .scroll-orb', { opacity: 0, y: 20 }, { opacity: 0.7, y: 0, duration: 1, ease: 'power2.out', delay: 1.6 })
})
