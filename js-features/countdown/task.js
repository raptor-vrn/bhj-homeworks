'use strict'

let time;
const element = document.getElementById('timer');
let startSec = element.textContent;

function countdown() {
    document.getElementById('timer').innerHTML = startSec;
    startSec --;

    if (startSec < 0) {
        clearTimeout(time);
        alert('Вы победили в конкурсе');
    } else {
        time = setTimeout(countdown, 1000);
    }
}

countdown();