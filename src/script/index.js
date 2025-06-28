import Splide from '@splidejs/splide';
const BREAKPOINT_TABLET = '(min-width: 600px)';

const hamburger = document.querySelector('.js-header__hamburger');
const navLinksContainer = document.querySelector('.js-nav-links__container');
const navLinks = document.querySelector('.js-header__nav-links');
const iconEl = document.querySelector('.js-sidebar__icon');

// Track previous media state
let mediaQuery = window.matchMedia(BREAKPOINT_TABLET);
let wasTablet = mediaQuery.matches;

/**
 * Handles layout-specific adjustments on viewport resize.
 *
 * @returns {void}
 */
function handleResize() {
    const isNowTablet = mediaQuery.matches;

    if (isNowTablet !== wasTablet) {
        // Close any open nav
        navLinksContainer?.classList.remove('nav-links__container--open');
        navLinks?.classList.remove('nav-links--open');

        // Unlock body scroll
        document.body.classList.remove('overflow-hidden');

        // Reset icon to hamburger
        if (iconEl) {
            iconEl.classList.remove('icon-cross');
            iconEl.classList.add('icon-Vector');
        }

        // Update last known state
        wasTablet = isNowTablet;
    }
}

/**
 * Toggles the sidebar menu depending on viewport width.
 *
 * @returns {void}
 */
function toggleSidebar() {
    const isTablet = mediaQuery.matches;

    document.body.classList.toggle('overflow-hidden');

    if (isTablet) {
        navLinksContainer?.classList.toggle('nav-links__container--open');
    } else {
        navLinks?.classList.toggle('nav-links--open');
    }

    iconEl?.classList.toggle('icon-Vector');
    iconEl?.classList.toggle('icon-cross');
}

/**
 * Sets up all required event listeners.
 *
 * @returns {void}
 */
function init() {
    window.addEventListener('resize', handleResize);
    window.addEventListener('DOMContentLoaded', handleResize);

    hamburger?.addEventListener('click', toggleSidebar);
}

window.addEventListener('DOMContentLoaded', () => {
    init();
});

// Instantiating splide class, and calling the mount() method.
window.addEventListener('DOMContentLoaded', () => {
    const testimonialSplide = new Splide('.splide', {
        rewind: true,
        perPage: 1,
    });

    testimonialSplide.mount();
});

var acc = document.getElementsByClassName('footer__accordian');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('footer__accordian--active');
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
