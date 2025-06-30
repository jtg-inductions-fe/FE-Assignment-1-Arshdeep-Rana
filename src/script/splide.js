import Splide from '@splidejs/splide';

// Instantiating splide class, and calling the mount() method.
window.addEventListener('DOMContentLoaded', () => {
    const testimonialSplide = new Splide('.splide', {
        rewind: true,
        perPage: 1,
    });
    testimonialSplide.mount();
});
