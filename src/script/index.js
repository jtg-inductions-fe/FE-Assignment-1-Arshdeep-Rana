import '../styles/main.scss';

/**
 * @constant {HTMLElement} hamburger - The hamburger button element.
 */
const hamburger = document.querySelector('.js-header__hamburger');

/**
 * @constant {HTMLElement} navLinksContainer - The container for navigation links (tablet view).
 */
const navLinksContainer = document.querySelector('.js-nav-links__container');

/**
 * @constant {HTMLElement} navLinks - The navigation links element (phone view).
 */
const navLinks = document.querySelector('.js-header__nav-links');

/**
 * @constant {HTMLElement} iconEl - The icon element inside the hamburger.
 */
const iconEl = document.querySelector('.js-sidebar__icon');

/**
 * Stores the previous isTablet state for detecting breakpoint changes.
 * @type {boolean}
 */
let wasTablet = window.matchMedia('(min-width: 600px)').matches;

/**
 * Sets or updates the responsive class on <body> based on the current viewport width.
 * Also resets sidebar state only if breakpoint (mobile/tablet) has changed.
 *
 * - Adds class 'is-tablet' if the width is greater than 600px
 * - Removes it otherwise
 * - Resets sidebar, scroll, and icon state ONLY when transitioning between mobile and tablet
 *
 * @function setResponsiveClass
 * @returns {void}
 */
function setResponsiveClass() {
    const isTablet = window.matchMedia('(min-width: 600px)').matches;
    document.body.classList.toggle('is-tablet', isTablet);

    // Only reset sidebar and icon if breakpoint changed
    if (isTablet !== wasTablet) {
        // Close both sidebars
        if (navLinksContainer)
            navLinksContainer.classList.remove('nav-links__container--open');
        if (navLinks) navLinks.classList.remove('nav-links--open');

        // Enable body scroll
        document.body.classList.remove('overflow-hidden');

        // Reset icon to hamburger
        if (iconEl) {
            iconEl.classList.remove('icon-cross');
            iconEl.classList.add('icon-Vector');
        }

        // Update state
        wasTablet = isTablet;
    }
}

/**
 * Toggles the sidebar navigation menu based on the current layout.
 *
 * - Tablet: toggles 'nav-links__container--open'
 * - Phone: toggles 'nav-links--open'
 * - Toggles scroll lock via 'overflow-hidden' on <body>
 * - Toggles hamburger/close icon classes
 *
 * @function toggleSidebar
 * @returns {void}
 */
function toggleSidebar() {
    if (!hamburger || !navLinks || !navLinksContainer || !iconEl) return;

    const isTablet = document.body.classList.contains('is-tablet');
    document.body.classList.toggle('overflow-hidden');

    if (isTablet) {
        navLinksContainer.classList.toggle('nav-links__container--open');
    } else {
        navLinks.classList.toggle('nav-links--open');
    }

    iconEl.classList.toggle('icon-Vector');
    iconEl.classList.toggle('icon-cross');
}

/**
 * Sets up event listeners for:
 * - `resize`: layout breakpoint check
 * - `DOMContentLoaded`: apply responsive class on initial load
 * - `click`: sidebar toggle via hamburger icon
 *
 * @function init
 * @returns {void}
 */
function init() {
    window.addEventListener('resize', setResponsiveClass);
    window.addEventListener('DOMContentLoaded', setResponsiveClass);

    if (hamburger) {
        hamburger.addEventListener('click', toggleSidebar);
    }
}

// Initialize on load
init();
