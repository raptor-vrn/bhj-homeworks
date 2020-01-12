'use strict'

const visElem = () => {
    const div = document.querySelectorAll('.reveal');

    for (let i = 0; i < div.length; i++) {
        const viewportHeight = window.innerHeight;
        const elementTop = div[i].getBoundingClientRect().top;

        if (elementTop < viewportHeight) {
            div[i].classList.add('reveal_active');
        } else {
            div[i].classList.remove('reveal_active');
        }
    }
}

document.addEventListener('scroll', visElem);

