import '../styles/main.scss';

const hamburger = document.querySelector('.header__hamburger');
const navLinks = document.querySelector('.header__nav-links');

let isSidebarOpen = false;

function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    navLinks.classList.toggle('header__nav-links--open', isSidebarOpen);

    const iconEl = hamburger.firstElementChild;
    if (iconEl) {
        iconEl.classList.toggle('icon-Vector');
        iconEl.classList.toggle('icon-cross');
    }
}

hamburger.addEventListener('click', toggleSidebar);
