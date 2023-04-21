'use strict';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


setTimeout(() => {
    let imgBig = document.querySelector('.main-img');
    let title = document.querySelector('.title');
    let imagesR = document.querySelectorAll('.img-block-right');

    imgBig.style.opacity = 1;

    title.style.opacity = 1;
    title.style.bottom = 0;

    imagesR.forEach(imgR => {
        imgR.style.opacity = 1;
        imgR.style.transform = 'rotateY(0)';
    });

}, 300);

// GSAP Scroll
if (ScrollTrigger.isTouch != 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        effects: true,
    });
}


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

const header = document.querySelector('.header');

document.addEventListener('scroll', () => {
    if (window.scrollY) {
        header.classList.add('header-active');
    }
    else if (window.scrollY + 'px' == 0 + 'px') {
        header.classList.remove('header-active');
    }
});

function navigation(classSelector, idSelector) {
    const btn = document.querySelector(classSelector),
          section = document.querySelector(idSelector);

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        window.scroll({
            left: 0,
            top: section.offsetTop,
            behavior: 'smooth',
        });
    });
}
navigation('.btn', '#galerie');

