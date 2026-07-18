export function initRoom() {
  const room = document.getElementById('room')
  if (!room) return
  const items = room.querySelectorAll('.item')
  ScrollTrigger.create({
    trigger: room,
    start: 'top 60%',
    end: 'bottom 40%',
    onEnter: () => {
      items.forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 220)
      })
    },
    once: true,
  })
}
