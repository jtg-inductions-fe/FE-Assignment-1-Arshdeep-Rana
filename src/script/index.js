import '../styles/main.scss';

const hamburger = document.querySelector('.js-header__hamburger');
const navLinksContainer = document.querySelector('.js-nav-links__container');
const navLinks = document.querySelector('.js-header__nav-links');

/**
 * Function name : toggleSidebar
 * Purpose : When clicked on the hamburger button on phone or tablet screen, this function toggles classes
 * on nav-links on phones and on nav-links-container on tablets.
 */
function toggleSidebar() {
    if (hamburger && navLinksContainer && navLinks) {
        /**
         * Variable name : navLinkIsRelative
         * Note : nav-link is relative on tablet screen.
         * Purpose : To figure out what screen, hamburger was clicked.
         */
        const navLinksIsRelative =
            window.getComputedStyle(navLinks).getPropertyValue('position') ===
            'relative';
        document.body.classList.toggle('no-scroll');

        if (navLinksIsRelative)
            navLinksContainer.classList.toggle('nav-links__container--open');
        else navLinks.classList.toggle('header__nav-links--open');
    }

    /**
     * Variable name : iconEl
     * Purpose : To switch hamburger and close icons
     */
    const iconEl = document.querySelector('.js-sidebar__icon');

    if (iconEl) {
        iconEl.classList.toggle('icon-Vector');
        iconEl.classList.toggle('icon-cross');
    }
}

hamburger.addEventListener('click', toggleSidebar);
