export function initScrollScenes() {
  // Activate scene background when in view
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

  // Once upon a time
  gsap.fromTo('#once .scene-title', { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#once', start: 'top 65%' } })
  gsap.fromTo('#once .chapter-mark', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '#once', start: 'top 65%' } })
  gsap.fromTo('#once .scene-text', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: '#once .scene-text', start: 'top 75%' } })
  gsap.to('#once .photo-reveal', { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#once .photo-reveal', start: 'top 80%' } })

  // Good times
  gsap.fromTo('#good .scene-title', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#good', start: 'top 65%' } })
  gsap.fromTo('#good .scene-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: '#good .scene-text', start: 'top 75%' } })
  gsap.utils.toArray('#good .photo-card').forEach((card, i) => {
    gsap.to(card, {
      y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: 'power3.out', delay: i * 0.15,
      scrollTrigger: { trigger: '#good .gallery', start: 'top 75%' }
    })
  })

  // Letter
  gsap.to('#letter .envelope', { y: 0, opacity: 1, rotateX: 0, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#letter', start: 'top 70%' } })
  gsap.fromTo('#letter .scene-title', { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#letter', start: 'top 70%' } })

  // Goodbyes
  gsap.fromTo('#goodbyes .scene-title', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#goodbyes', start: 'top 65%' } })
  gsap.fromTo('#goodbyes .scene-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: '#goodbyes .scene-text', start: 'top 75%' } })
  gsap.to('#goodbyes .photo-reveal', { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#goodbyes .photo-reveal', start: 'top 80%' } })

  // Release
  gsap.fromTo('#release .scene-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '#release', start: 'top 65%' } })
  gsap.fromTo('#release .scene-text', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: '#release .scene-text', start: 'top 75%' } })
  gsap.to('#release .star-stage', { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '#release .star-stage', start: 'top 80%' } })
}
