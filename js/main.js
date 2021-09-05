document.addEventListener('DOMContentLoaded', () => {
    responsiveMenu();
});

// Menu Responsive
function responsiveMenu() {
    const menuBtn = document.querySelector('.menu');
    const closeMenu = document.querySelector('.cancel');
    const nav = document.querySelector('.responsive-nav');
    const links = document.querySelectorAll('.nav-items');

    menuBtn.addEventListener('click', () => {
        nav.classList.add('show-nav')
    });
    closeMenu.addEventListener('click', () => {
        nav.classList.remove('show-nav')
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show-nav')
        });
    });
}