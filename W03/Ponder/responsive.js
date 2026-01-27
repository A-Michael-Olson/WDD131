var menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');


menuBtn.addEventListener('click', toggleMenuButton);

function toggleMenuButton() {
    menu.classList.toggle('hide');
    menuBtn.classList.toggle('change');
}
