// Footer section: Handling accordion toggle behavior for footer links

// Getting elements with the class called 'footer__accordion'
const acc = document.getElementsByClassName('footer__accordion');

// Loop through all accordion elements
for (let i = 0; i < acc.length; i++) {
    // Add a click event listener to each accordion
    acc[i].addEventListener('click', function () {
        this.classList.toggle('footer__accordion--active');
        const panel = this.parentNode.querySelector('.panel');

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
    });
}
