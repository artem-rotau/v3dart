'use strict';

// Preloader
window.onload = function() {
    document.body.classList.add('loaded-hiding');
    window.setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded-hiding');
    }, 500);
};


// Hamburger
const hamburger = document.querySelector('.hamburger'),
      headerCross = document.querySelector('.header-cross'),
      hiddenMenu = document.querySelector('.hidden-menu'),
      links = document.querySelectorAll('.hidden-link');

function classToggle() {
    hiddenMenu.classList.toggle('menu-active');
    hamburger.classList.toggle('hidden-hamburger');
    headerCross.classList.toggle('active-cross');
}

hamburger.addEventListener('click', () => {
    classToggle();
});

headerCross.addEventListener('click', () => {
    classToggle();
});

links.forEach(link => {
    link.addEventListener('click', () => {
        classToggle();
    });
});


