import '../styles/main.scss';

document.querySelector('.header__hamburger').addEventListener('click', () => {
    let siderbar = document.querySelector('.header__sidebar');

    if (siderbar.style.display == 'none') siderbar.style.display = 'flex';
    else siderbar.style.display = 'none';
});
