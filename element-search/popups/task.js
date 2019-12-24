'use strict';


function funonload() {
    const modal = document.getElementById('modal_main');
    const newModal = document.getElementById('modal_success');
    const closeBtns = document.querySelectorAll('.modal__close');
    const modals = document.querySelectorAll('.modal');

    modal.classList.add('modal_active');

    closeBtns.forEach(btn => {
        btn.onclick = function () {
            if (btn.classList.contains('show-success')){
                newModal.classList.add('modal_active');
                modal.classList.remove('modal_active');
            } else {
                modals.forEach(modal => {
                    modal.classList.remove('modal_active');
                })
            }
        }
    })
}
window.onload = funonload;