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

document.addEventListener('keydown', (e) => {
    let signup = document.querySelector('.auth__signup');
    let logo = document.querySelector('.header__logo');
    if (e.key == 'Tab') {
        //  e.preventDefault();

        if (document.activeElement == signup) {
            logo.focus();
        }

        if (isSidebarOpen) {
            let signup = document.querySelector('.signup');
            if (document.activeElement == signup) {
                hamburger.focus();
            }
        }
    }
});
