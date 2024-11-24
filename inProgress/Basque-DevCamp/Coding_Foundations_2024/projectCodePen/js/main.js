const favicon = document.getElementById('favicon');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    favicon.href = '../img/logo-white.png';
} else {
    favicon.href = '../img/logo-black.png'
}

function thisWorks() {
    alert('This action works! Try another buttons and see what you find ...');
}

const image = document.querySelector('.exampleWithShadowBox');

image.addEventListener('mouseover', () => {
    image.src = '../img/example2.png';
    image.classList.add('hovered');
});

image.addEventListener('mouseout', () => {
    image.src = '../img/lmr7a8E.png';
    image.classList.remove('hovered');
});

image.addEventListener('click', () => {
    alert('CodePen gives you a lightweight HTML-CSS-JS IDE!. Anyway, this a basic HTML/CSS/JS demo for a Bootcamp. But, here you\'ve found something ...');
    
});
