'use strict';

function funonload() {
    const modal = document.getElementById('subscribe-modal');
    const closeBtns = document.querySelector('.modal__close');
    modal.classList.add('modal_active');

    closeBtns.addEventListener('click', function () {
        modal.classList.remove('modal_active');
        document.cookie = "modal=hidden";
    });
    
}

const getCookie = (name) => {

    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");

    if (parts.length === 2) {

        return parts
            .pop()
            .split(";")
            .shift();
    }
};

let result = getCookie('modal');

if (!result) {
    window.onload = funonload;
}
//document.cookie = 'modal=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
