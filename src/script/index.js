import '../styles/main.scss';

const hamburger = document.querySelector('.header__hamburger');
const navLinks = document.querySelector('.header__nav-links');
const overlay = document.querySelector('.blur-overlay');

let isSidebarOpen = false;

function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    navLinks.classList.toggle('header__nav-links--open', isSidebarOpen);
    overlay.classList.toggle('blur-overlay--active', isSidebarOpen);

    hamburger.firstElementChild.classList.toggle('icon-Vector');
    hamburger.firstElementChild.classList.toggle('icon-cross');
}

hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', () => {
    if (isSidebarOpen) toggleSidebar();
});
