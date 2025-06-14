import '../styles/main.scss';

let siderbar = document.querySelector('.header__sidebar');
let hamburger = document.querySelector('.header__hamburger');
let blurOverlay = document.querySelector('.blur-overlay');

document.querySelector('.header__hamburger').addEventListener('click', () => {
    if (siderbar.style.display == 'none' && hamburger.style.display != 'none') {
        siderbar.style.display = 'flex';
        blurOverlay.style.backdropFilter = 'blur(10px)';
    } else {
        siderbar.style.display = 'none';
        blurOverlay.style.backdropFilter = '';
    }
});
