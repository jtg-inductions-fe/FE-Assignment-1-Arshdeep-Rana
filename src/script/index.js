import '../styles/main.scss';

const hamburger = document.querySelector('.header__hamburger');
const navLinks = document.querySelector('.header__nav-links');
const overlay = document.querySelector('.blur-overlay');

let isSidebarOpen = false;

function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    navLinks.classList.toggle('header__nav-links--open', isSidebarOpen);
    overlay.classList.toggle('blur-overlay--active', isSidebarOpen);

    // Optionally switch icon class (e.g., between icon-Vector and close)
    hamburger.firstElementChild.classList.toggle('icon-Vector');
    hamburger.firstElementChild.classList.toggle('icon-cross'); // You’ll need to define `.icon-close`
}

hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', () => {
    if (isSidebarOpen) toggleSidebar();
});
