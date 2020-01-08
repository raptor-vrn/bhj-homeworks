'use strict';

const openDrop = () => {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
};
document.querySelector('.dropdown__value').addEventListener('click', openDrop);

document.querySelector('.dropdown__list').addEventListener('click', (event) => {

    if (!event.target.matches('.dropdown__value')) {
        event.preventDefault();

        const text = document.querySelector('.dropdown__value').innerText = event.target.innerText.trim();

        document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
    }
});


