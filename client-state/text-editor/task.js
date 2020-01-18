'use strict';

editor.value = localStorage.getItem('text');
editor.oninput = () => {
    localStorage.setItem('text', editor.value)
};