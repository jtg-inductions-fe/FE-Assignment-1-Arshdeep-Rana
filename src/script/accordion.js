// Getting elements with the class called 'footer__accordion'
const acc = document.getElementsByClassName('footer__accordion');

function toggleAccordian() {
    // We toggle class 'footer__accordion--active' which displays the panel associated with the button clicked
    this.classList.toggle('footer__accordion--active');
    const panel = this.parentNode.querySelector('.panel');
    // If the panel is open -> close it, if closed -> open it
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
}

// Loop through all accordion elements
for (let i = 0; i < acc.length; i++) {
    // Add a click event listener to each accordion
    acc[i].addEventListener('click', toggleAccordian);
}
