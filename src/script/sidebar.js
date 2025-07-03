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
/**
 * Event listener : Handles TAB key
 * when sidebar is open the focus is trapped in the header
 * As soon as focus leaves header we focus hamburger close button
 */
window.addEventListener('keyup', () => {
    if (
        navLinks?.classList.contains('nav-links--open') ||
        navLinksContainer?.classList.contains('nav-links__container--open')
    ) {
        if (
            document.activeElement ==
            document.querySelector('.hero__explore-button')
        ) {
            hamburger.focus();
        }
    }
});

// All the containers that are linked to header
const sectionsToObserve = [
    document.querySelector('#top'),
    document.querySelector('#services'),
    document.querySelector('#features'),
    document.querySelector('#footer'),
];

// event listener on window for scroll to change the current active element
window.addEventListener(
    'scroll',
    () => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // if the current container on screen is one of the container linked to nav links we activate it
                    if (entry.target.id == 'top') {
                        document.querySelectorAll('.nav-link').forEach((e) => {
                            e.classList.remove('nav-link--active');
                        });
                        document
                            .querySelector('.nav__link-home')
                            .classList.toggle('nav-link--active');
                    } else if (entry.target.id == 'services') {
                        document.querySelectorAll('.nav-link').forEach((e) => {
                            e.classList.remove('nav-link--active');
                        });
                        document
                            .querySelector('.nav__link-discover')
                            .classList.toggle('nav-link--active');
                    } else if (entry.target.id == 'features') {
                        document.querySelectorAll('.nav-link').forEach((e) => {
                            e.classList.remove('nav-link--active');
                        });
                        document
                            .querySelector('.nav__link-special')
                            .classList.toggle('nav-link--active');
                    } else if (entry.target.id == 'footer') {
                        document.querySelectorAll('.nav-link').forEach((e) => {
                            e.classList.remove('nav-link--active');
                        });
                        document
                            .querySelector('.nav__link-contact')
                            .classList.toggle('nav-link--active');
                    }
                }
            });
        });

        sectionsToObserve.forEach((s) => {
            if (s.id) {
                obs.observe(s);
            }
        });
    },
    { threshold: 0.5 },
);
