'use strict';

const visForm = () => {
    const signin = document.querySelector('.signin');
    signin.classList.add('signin_active');
}
window.onload = visForm;

const form = document.getElementById('signin__form');
form.addEventListener('click',  (e) => {
    let formData = new FormData(form);
});