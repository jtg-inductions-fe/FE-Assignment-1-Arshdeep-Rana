import '../styles/main.scss';

// Grab references to elements
const sidebar = document.querySelector('.header__sidebar');
const hamburger = document.querySelector('.header__hamburger');
const blurOverlay = document.querySelector('.blur-overlay');

// Track sidebar state
let isSidebarOpen = false;

// Toggle sidebar visibility
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

// Set up click event
hamburger.addEventListener('click', toggleSidebar);
