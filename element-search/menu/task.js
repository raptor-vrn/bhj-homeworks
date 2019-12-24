'use strict';

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.onclick = function (event) {

        const parentElement = event.target.closest('.menu__item');
        const children = Array.from(parentElement.children);

        children.forEach(child => {
            if(child.classList.contains('menu_sub')) {
                event.preventDefault();
                clearClass();
                child.classList.add('menu_active')
            }
        })

    };
});

const clearClass = () => {
    const subMenuActive = document.querySelector('.menu_active');

    if (subMenuActive) {
        subMenuActive.classList.remove('menu_active');
    }
}