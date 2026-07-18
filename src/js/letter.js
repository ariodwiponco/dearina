const LETTER = [
  'Dear Ina,',
  'Time moves so fast. Does not it?',
  'Four years with you. All of it. Every good day, every hard day, every laugh and every tear.',
  'We fought. We tried. We held on. We hoped for the best in each other.',
  'Not a single moment of it do I regret. Not one.',
  'Every place we went together. Every date we planned. Every sunrise we chased. Every train we almost missed. Every song we sang in the car.',
  'Every juice we blended. Every meal we cooked. Every cake we baked. Every kiss. Every hug. They all meant something.',
  'We dreamed. I guess some dreams stay dreams.',
  'Maybe we were not meant to stay in this universe together.',
  'Do I envy the version of me in another universe who gets to keep you?',
  'Of course I do.',
  '@indo:Aku mungkin bukan yang terbaik di luar sana, tapi aku sudah berusaha yang terbaik menurut aku. Maaf itu belum cukup untuk kamu.',
  '@indo:Tidak ada sedikit pun yang bisa aku rayakan dari perpisahan kita, karena kamu, adalah hal yang selalu aku impikan.',
  'I am not celebrating this goodbye.',
  'I am honoring what we built.',
  'Every corner of that home. Every star I folded for you. Every wave we weathered.',
  'You were my dream, Ina.',
  'I hope your beauty never fades. Not the one the world sees. The one I was lucky enough to witness. The way you smiled when we baked together. The way you looked at me when you thought I was not watching. I hope that beauty stays. Always.',
  'Dreams do not disappear. They just change shape.',
  'Go find your next shore, Ina.',
  'I will be okay.',
  '@sig:Goodbye, my dream girl.',
]

export function initLetter() {
  const folded = document.getElementById('folded-letter')
  const paper = document.getElementById('letter-paper')
  if (!folded || !paper) return

  LETTER.forEach((line) => {
    const p = document.createElement('p')
    if (line.startsWith('@indo:')) { p.className = 'lp-indo'; p.textContent = line.slice(6) }
    else if (line.startsWith('@sig:')) { p.className = 'lp-sig'; p.textContent = line.slice(5) }
    else p.textContent = line
    paper.appendChild(p)
  })

  const open = () => {
    if (paper.classList.contains('open')) return
    folded.classList.add('hidden')
    paper.classList.add('open')
    paper.querySelectorAll('p').forEach((p, i) => setTimeout(() => p.classList.add('inked'), 500 + i * 320))
  }

  folded.addEventListener('click', open)
  folded.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } })
}
