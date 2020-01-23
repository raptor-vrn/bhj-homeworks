'use strict';

editor.value = localStorage.getItem('text');
editor.oninput = () => {
    localStorage.setItem('text', editor.value)
};

reset.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('text');
    editor.value = '';
});