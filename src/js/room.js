export function initRoom() {
  const room = document.getElementById('room')
  if (!room) return
  const order = ['.item-curtains', '.item-table', '.item-chair', '.item-lamp', '.item-shelf', '.item-stars', '.item-photos', '.item-plant']
  ScrollTrigger.create({
    trigger: room,
    start: 'top 62%',
    onEnter: () => {
      order.forEach((sel, i) => {
        const el = room.querySelector(sel)
        if (el) setTimeout(() => el.classList.add('visible'), i * 420)
      })
      const warmth = room.querySelector('.room-warmth')
      if (warmth) setTimeout(() => warmth.classList.add('visible'), order.length * 420)
    },
    once: true,
  })
}
