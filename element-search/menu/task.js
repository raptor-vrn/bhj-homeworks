'use strict';

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.onclick = function (event) {
        const subMenu = event.target.nextElementSibling;

        if (!subMenu) return;

        if(subMenu.classList.contains('menu_sub')) {
            event.preventDefault();
            subMenu.classList.toggle('menu_active')

            const siblings = getSiblings(subMenu.closest('.menu__item'))

            siblings.forEach(element => {
                const childrens = Array.from(element.children);
                childrens.forEach(children => {
                    if(children.classList.contains('menu_sub')) {
                        children.classList.remove('menu_active')
                    }
                })
            })
        }
    };
});

const getSiblings = (elem) => {
    const siblings = [];
    let sibling = elem.parentNode.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }

    return siblings;
};