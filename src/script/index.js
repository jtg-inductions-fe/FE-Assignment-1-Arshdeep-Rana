import '../styles/main.scss';

<<<<<<< HEAD


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
=======
//variables go here
let siderbar = document.querySelector('.header__sidebar');
let hamburger = document.querySelector('.header__hamburger');
let blurOverlay = document.querySelector('.blur-overlay');

//event listeners go here
document.querySelector('.header__hamburger').addEventListener('click', () => {
    //if the sidebar is not opened then open it or else close it
    if (siderbar.style.display == 'none') {
        siderbar.style.display = 'flex';
>>>>>>> 601ba52 (AR_RU_02 : header : header with sidebar completed)
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
