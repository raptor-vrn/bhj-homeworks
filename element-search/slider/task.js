'use strict';
const slides = document.querySelectorAll('.slider__item');
let currentSlide = 0;

function nextSlide(){
    goToSlide(currentSlide + 1);
}

function previousSlide(){
    goToSlide(currentSlide - 1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slider__item';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__item slider__item_active';
}

let next = document.querySelector('.slider__arrow_next');
let previous = document.querySelector('.slider__arrow_prev');

next.onclick = function(){
    console.log(111);
    nextSlide();
};
previous.onclick = function(){
    console.log(222);
    previousSlide();
};