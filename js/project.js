'use strict';

// Slider
const slides = document.querySelectorAll('.slide-inner'),
      next = document.querySelector('.next'),
      prev = document.querySelector('.prev'),
      cross = document.querySelector('.cross'),
      slideWrapper = document.querySelector('.slide-wrapper'),
      slideContent = document.querySelector('.slide-content'),
      width = window.getComputedStyle(slideWrapper).width;


let offset = 0,
    slideIndex = 1;

slideContent.style.width = 100 * slides.length + '%';
slideContent.style.display = 'flex';
slideContent.style.transition = '.5s all';
slideWrapper.style.overflow = 'hidden';



slides.forEach(slide => {
    slide.style.width = width;
});

function replaceStr(str) {
    return +str.replace(/\D/g, '');
}

next.addEventListener('click', () => {
    if (offset == replaceStr(width) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += replaceStr(width);
    }

    slideContent.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

});


prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = replaceStr(width) * (slides.length - 1);
    } else {
        offset -= replaceStr(width);
    }

    slideContent.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
});


const images = document.querySelectorAll('.img-block-right'),
      slider = document.querySelector('.slider'),
      slideInner = document.querySelectorAll('.slide-inner'),
      slideImages = document.querySelectorAll('.slide-img');

slider.style.display = 'none';

cross.addEventListener('click', () => {
    slider.style.display = 'none';
});


slideInner.forEach(slideI => {
    slideI.addEventListener('click', () => {
        slideImages.forEach(slideImg => {
            slideImg.classList.toggle('slide-img-big');
        });
        slideI.classList.toggle('slide-inner-big');
        next.classList.toggle('block-none');
        prev.classList.toggle('block-none');
        cross.classList.toggle('block-none');
    });
});


images.forEach(img => {
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('data-slide-to', i + 1);

        if (i == 0) {
            img.style.border = '';
        }
    }

    img.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        
        
        slider.style.display = 'block';
        
        slideIndex = slideTo;
        offset = replaceStr(width) * (slideTo - 1);

        slideContent.style.transform = `translateX(-${offset}px)`;

    });
});



// Tabs
function addClass(size, descr, arrow, title) {
    document.getElementById(size).addEventListener('click', () => {
        document.getElementById(descr).classList.toggle('info-descr-active');
        document.getElementById(arrow).classList.toggle('arrow-active');
        document.getElementById(title).classList.toggle('title-active');
    });

}
addClass('size-wrapp', 'size-descr', 'size-arrow', 'size-title');
addClass('material-wrapp', 'material-descr', 'material-arrow', 'material-title');
addClass('price-wrapp', 'price-descr', 'price-arrow', 'price-title');


