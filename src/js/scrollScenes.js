export function initScrollScenes() {
  // Scene activation
  gsap.utils.toArray('.scene').forEach((scene) => {
    ScrollTrigger.create({
      trigger: scene,
      start: 'top 70%',
      end: 'bottom 30%',
      onEnter: () => scene.classList.add('active'),
      onEnterBack: () => scene.classList.add('active'),
      onLeave: () => scene.classList.remove('active'),
      onLeaveBack: () => scene.classList.remove('active'),
    })
  })

  // Typed blocks
  gsap.utils.toArray('.typed-block').forEach((block) => {
    const lines = block.querySelectorAll('p')
    lines.forEach((line, i) => { line.style.setProperty('--i', i) })
    ScrollTrigger.create({
      trigger: block,
      start: 'top 75%',
      onEnter: () => {
        lines.forEach((line, i) => { setTimeout(() => line.classList.add('revealed'), i * 180) })
      },
      once: true,
    })
  })

  // Side-slide photo
  const slideCard = document.querySelector('.slide-card')
  if (slideCard) {
    ScrollTrigger.create({
      trigger: slideCard,
      start: 'top 80%',
      onEnter: () => slideCard.classList.add('revealed'),
      once: true,
    })
  }

  // Good grid items slide in from sides
  gsap.utils.toArray('#good-grid .good-item').forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 85%',
      onEnter: () => item.classList.add('revealed'),
      once: true,
    })
  })

  // Begin
  gsap.fromTo('#beginning .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#beginning', start: 'top 65%' } })

  // Moving house
  gsap.fromTo('#moving .scene-title', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#moving', start: 'top 65%' } })
  gsap.fromTo('#house-scene', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#house-scene', start: 'top 75%' } })

  // Building home
  gsap.fromTo('#building .scene-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#building', start: 'top 65%' } })

  // Good
  gsap.fromTo('#good .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#good', start: 'top 65%' } })

  // Engagement
  gsap.fromTo('#engagement .ring-burst', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#engagement', start: 'top 65%' } })

  // Bad
  gsap.fromTo('#bad .scene-title', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#bad', start: 'top 65%' } })

  // Turn
  gsap.fromTo('#turn .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#turn', start: 'top 65%' } })

  // Leaves
  gsap.fromTo('#leaves .scene-title', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#leaves', start: 'top 65%' } })
  gsap.fromTo('#fallen-star', { y: 40, opacity: 0 }, { y: 0, opacity: 0.8, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#fallen-star', start: 'top 80%' } })

  // Leaving
  gsap.fromTo('#leaving .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#leaving', start: 'top 65%' } })
  gsap.fromTo('#table-scene', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#table-scene', start: 'top 80%' } })

  // Closing
  gsap.fromTo('#closing .scene-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#closing', start: 'top 65%' } })
  gsap.to('#closing .envelope', { y: 0, opacity: 1, rotateX: 0, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#closing', start: 'top 65%' } })
  gsap.fromTo('#star-release', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#star-release', start: 'top 80%' } })
}
