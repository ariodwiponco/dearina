export function initScrollScenes() {
  gsap.utils.toArray('.scene').forEach((scene) => {
    ScrollTrigger.create({
      trigger: scene,
      start: 'top 65%',
      end: 'bottom 35%',
      onEnter: () => scene.classList.add('active'),
      onEnterBack: () => scene.classList.add('active'),
      onLeave: () => scene.classList.remove('active'),
      onLeaveBack: () => scene.classList.remove('active'),
    })
  })

  gsap.utils.toArray('.typed-block').forEach((block) => {
    const lines = block.querySelectorAll('p')
    ScrollTrigger.create({
      trigger: block,
      start: 'top 78%',
      onEnter: () => lines.forEach((l, i) => setTimeout(() => l.classList.add('revealed'), i * 260)),
      once: true,
    })
  })

  gsap.utils.toArray('.slide-card').forEach((card) => {
    ScrollTrigger.create({ trigger: card, start: 'top 82%', onEnter: () => card.classList.add('revealed'), once: true })
  })

  gsap.utils.toArray('.mcard').forEach((card, i) => {
    ScrollTrigger.create({ trigger: card, start: 'top 88%', onEnter: () => setTimeout(() => card.classList.add('revealed'), (i % 3) * 120), once: true })
  })

  const alive = document.querySelector('.alive-line')
  if (alive) ScrollTrigger.create({ trigger: alive, start: 'top 85%', onEnter: () => alive.classList.add('revealed'), once: true })

  gsap.utils.toArray('.scene-title').forEach((t) => {
    gsap.fromTo(t, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3, ease: 'power3.out', scrollTrigger: { trigger: t, start: 'top 80%' } })
  })

  gsap.utils.toArray('.chapter-mark').forEach((m) => {
    gsap.fromTo(m, { opacity: 0 }, { opacity: 0.45, duration: 1.6, scrollTrigger: { trigger: m, start: 'top 82%' } })
  })

  const stair = document.getElementById('staircase')
  if (stair) gsap.fromTo(stair, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: stair, start: 'top 78%' } })

  const house = document.getElementById('house-wrap')
  if (house) gsap.fromTo(house, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: house, start: 'top 75%' } })

  const kneel = document.getElementById('kneel-wrap')
  if (kneel) gsap.fromTo(kneel, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: kneel, start: 'top 72%' } })

  const fallen = document.getElementById('fallen-star')
  if (fallen) gsap.fromTo(fallen, { opacity: 0, y: -120, rotation: -40 }, { opacity: 1, y: 0, rotation: 24, duration: 2.4, ease: 'bounce.out', scrollTrigger: { trigger: fallen, start: 'top 82%' } })

  const door = document.getElementById('doorframe')
  if (door) gsap.fromTo(door, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: door, start: 'top 75%' } })

  const stage = document.getElementById('letter-stage')
  if (stage) gsap.fromTo(stage, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: stage, start: 'top 75%' } })
}
