import '../styles/main.scss';

const sidebar = document.querySelector('.header__sidebar');
const hamburger = document.querySelector('.header__hamburger');
const blurOverlay = document.querySelector('.blur-overlay');

let isSidebarOpen = false;

const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;

    if (isSidebarOpen) {
        sidebar.style.display = 'flex';
        blurOverlay.style.backdropFilter = 'blur(10px)';
        hamburger.style.transform = 'rotate(90deg)';
    } else {
        sidebar.style.display = 'none';
        blurOverlay.style.backdropFilter = 'none';
        hamburger.style.transform = 'rotate(0deg)';
    }
};

//event listener
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
