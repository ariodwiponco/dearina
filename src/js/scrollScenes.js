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

  // Typed blocks reveal paragraphs one by one as scene enters
  gsap.utils.toArray('.typed-block').forEach((block) => {
    const lines = block.querySelectorAll('p')
    lines.forEach((line, i) => { line.style.setProperty('--i', i) })
    ScrollTrigger.create({
      trigger: block,
      start: 'top 75%',
      onEnter: () => {
        lines.forEach((line, i) => {
          setTimeout(() => line.classList.add('revealed'), i * 180)
        })
      },
      once: true,
    })
  })

  // Beginning split
  gsap.fromTo('#beginning .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#beginning', start: 'top 65%' } })
  gsap.to('#beginning .photo-reveal', { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#beginning .photo-reveal', start: 'top 80%' } })

  // Moving house
  gsap.fromTo('#moving .scene-title', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#moving', start: 'top 65%' } })
  gsap.fromTo('#house-scene .figure-left', { x: -40, opacity: 0 }, { x: 0, opacity: 0.6, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#house-scene', start: 'top 70%' } })
  gsap.fromTo('#house-scene .figure-right', { x: 40, opacity: 0 }, { x: 0, opacity: 0.6, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#house-scene', start: 'top 70%' } })

  // Building home
  gsap.fromTo('#building .scene-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#building', start: 'top 65%' } })

  // Good times grid
  gsap.fromTo('#good .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#good', start: 'top 65%' } })
  gsap.utils.toArray('#good-grid .good-item').forEach((item, i) => {
    gsap.to(item, { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'power3.out', delay: i * 0.08, scrollTrigger: { trigger: '#good-grid', start: 'top 75%' } })
  })

  // Engagement
  gsap.fromTo('#engagement .ring-burst', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#engagement', start: 'top 65%' } })

  // Bad times
  gsap.fromTo('#bad .scene-title', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#bad', start: 'top 65%' } })

  // Turn
  gsap.fromTo('#turn .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#turn', start: 'top 65%' } })

  // Leaves
  gsap.fromTo('#leaves .scene-title', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#leaves', start: 'top 65%' } })
  gsap.fromTo('#fallen-star', { y: 40, opacity: 0 }, { y: 0, opacity: 0.8, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#fallen-star', start: 'top 80%' } })

  // Leaving home
  gsap.fromTo('#leaving .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#leaving', start: 'top 65%' } })
  gsap.fromTo('#table-scene', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#table-scene', start: 'top 80%' } })

  // Closing letter
  gsap.fromTo('#closing .scene-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#closing', start: 'top 65%' } })
  gsap.to('#closing .envelope', { y: 0, opacity: 1, rotateX: 0, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#closing', start: 'top 65%' } })
  gsap.fromTo('#star-release', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#star-release', start: 'top 80%' } })
}
