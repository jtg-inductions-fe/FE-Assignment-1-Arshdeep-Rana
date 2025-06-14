import '../styles/main.scss';

//variables go here
let siderbar = document.querySelector('.header__sidebar');
let hamburger = document.querySelector('.header__hamburger');
let blurOverlay = document.querySelector('.blur-overlay');

//event listeners go here
document.querySelector('.header__hamburger').addEventListener('click', () => {
    //if the sidebar is not opened then open it or else close it
    if (siderbar.style.display == 'none') {
        siderbar.style.display = 'flex';
        blurOverlay.style.backdropFilter = 'blur(10px)';
        hamburger.style.transform = 'rotate(90deg)';
    } else {
        siderbar.style.display = 'none';
        blurOverlay.style.backdropFilter = '';
        hamburger.style.transform = 'rotate(180deg)';
    }
});
