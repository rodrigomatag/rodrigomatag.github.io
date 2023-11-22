const hint = document.querySelector('.hint');
const phrases = document.querySelectorAll('.hidden');
const quote = document.querySelector('.quote-text');

hint.addEventListener('mouseover', () => {
  phrases.forEach(phrase => phrase.style.opacity = '1');
  quote.style.opacity = '1';
});
