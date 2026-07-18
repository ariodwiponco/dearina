(function () {
  'use strict';
  const PASS = '251101';
  const gate = document.getElementById('gate');
  const site = document.getElementById('site');
  const input = document.getElementById('pass-input');
  const btn = document.getElementById('pass-btn');
  const error = document.getElementById('pass-error');
  const letter = document.getElementById('letter');
  const letterOpen = document.getElementById('letter-open');
  const letterClose = document.getElementById('letter-close');
  const star = document.getElementById('star');
  const starNote = document.getElementById('star-note');

  function unlock() {
    gate.classList.add('hidden');
    site.setAttribute('aria-hidden', 'false');
    site.classList.add('unlocked');
    document.body.style.overflow = 'auto';
    observeSections();
  }

  function checkPass() {
    if (input.value === PASS) {
      unlock();
    } else {
      error.classList.add('show');
      input.value = '';
      input.focus();
    }
  }

  btn.addEventListener('click', checkPass);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') checkPass(); });

  letterOpen.addEventListener('click', () => { letter.classList.add('open'); });
  letterClose.addEventListener('click', () => { letter.classList.remove('open'); });

  star.addEventListener('click', () => {
    if (star.classList.contains('floating')) return;
    star.classList.add('folding');
    setTimeout(() => {
      star.classList.remove('folding');
      star.classList.add('floating');
      starNote.classList.remove('hidden');
    }, 800);
  });

  star.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') star.click(); });

  // section reveal on scroll
  function observeSections() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.2 });
    sections.forEach((s) => observer.observe(s));
  }

  // hero always revealed
  const hero = document.querySelector('.hero');
  if (hero) hero.classList.add('revealed');
})();
