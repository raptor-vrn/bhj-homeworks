'use strict';

document.addEventListener('click', (event) => {

    const subMenu = event.target.nextElementSibling;

    if (!subMenu) return;

    if (subMenu.classList.contains('menu_sub')) {
        event.preventDefault();
        const subMenuActive = document.querySelector('.menu_active');

        if (subMenuActive) {
            subMenu.classList.add('menu_active')
            subMenuActive.classList.remove('menu_active');
            return
        }

        subMenu.classList.toggle('menu_active')
    }
});