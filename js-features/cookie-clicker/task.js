'use strict'

const image = document.getElementById('cookie');
let flag = 0;
let i = 0;

function changeSize() {
    if (flag === 0) {
        image.width = 300;
        flag = 1;
        i++;
        document.getElementById('clicker__counter').innerHTML = i;
    } else {
        image.width = 200;
        flag = 0;
        i++;
        document.getElementById('clicker__counter').innerHTML = i;
    }
}

image.addEventListener( "click" , changeSize);