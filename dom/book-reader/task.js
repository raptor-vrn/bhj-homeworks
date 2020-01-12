'use strict';

const controls = document.querySelectorAll('.font-size');
const content = document.querySelector('.book__content');


function changeSizeText() {
    const deleteActive = document.querySelector('.font-size_active');
    deleteActive.classList.remove('font-size_active');
    event.preventDefault();
    this.classList.add('font-size_active');

    let size = this.dataset.size;

    if (size === 'small') {
        content.className = 'book__content book_fs-small'
    } else if (size === 'big') {
        content.className = 'book__content book_fs-big'
    } else {
        content.className = 'book__content'
    }

}

for (const cntrl of controls) {
    cntrl.onclick = changeSizeText;
}