const favicon = document.getElementById('favicon');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  favicon.href = '../img/logo-white.png';
} else {
  favicon.href = '../img/logo-black.png';
}

function thisWorks() {
  alert('You\'ve found a secret! Get Ready!');
}

const audio = document.querySelector('.eggAudio');
const gif = document.querySelector('.eggGif');
const scroll = document.querySelector('.scrollingFarewell');
const eggContainer = document.querySelector('.egg');
const playButton = document.querySelector('.playButton');
const initialMessage = document.querySelector('.initialMessage');

playButton.addEventListener('click', () => {
  initialMessage.style.display = 'none';
  eggContainer.style.display = 'grid';
  audio.play();
  gif.style.display = 'block';
  scroll.style.visibility = 'visible';
  scroll.style.opacity = '1';
  scroll.style.animation = 'none';
  void scroll.offsetWidth;
  scroll.style.animation = 'scrollUp 90s linear forwards';
});

/* lluvia de estrellas (y logos) ! */
const itsRainingStars = document.querySelector('.itsRainingStars');
const arrayStars = ['star1.png', 'star2.png', 'star3.png', 'star4.png', 'star5.png'];

let starsInterval;
let stopGenerating = false;

function starsShower() {
  if (stopGenerating) return;
  const star = document.createElement('div');
  star.classList.add('stars');

  const randomStar = arrayStars[Math.floor(Math.random() * arrayStars.length)];
  star.style.backgroundImage = `url('../img/${randomStar}')`;

  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * -100 + 'px';

  const size = Math.random() * 28 + 5;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.opacity = Math.random() * 0.5 + 0.5;

  const fallDuration = Math.random() * 5 + 5 + 's';
  const sparkleDuration = Math.random() * 2 + 1 + 's';

  star.style.animation = `fall ${fallDuration} linear, 
                          sparkle ${sparkleDuration} ease-in-out infinite`;

  itsRainingStars.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, parseFloat(fallDuration) * 1000);
}


starsInterval = setInterval(starsShower, 150);

setTimeout(() => {
  stopGenerating = true;
  clearInterval(starsInterval);
}, 87000);


/* burbujas */
const bubbleContainer = document.querySelector('.egg');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 50 + 10;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  const xStart = Math.random() * 100 + '%';
  const yStart = Math.random() * 100 + '%';
  const xEnd = Math.random() * 200 - 100 + '%';
  const yEnd = Math.random() * 200 - 100 + '%';

  bubble.style.setProperty('--x-start', xStart);
  bubble.style.setProperty('--y-start', yStart);
  bubble.style.setProperty('--x-end', xEnd);
  bubble.style.setProperty('--y-end', yEnd);

  bubble.style.left = `calc(${xStart})`;
  bubble.style.top = `calc(${yStart})`;

  const duration = Math.random() * 10 + 10;
  bubble.style.animationDuration = `${duration}s`;

  bubbleContainer.appendChild(bubble);

  bubble.addEventListener('animationend', () => {
    bubble.remove();
    createBubble();
  });
}

for (let i = 0; i < 40; i++) {
  createBubble();
}
