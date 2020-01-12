'use strict';

let counter = 0;
let rotate = document.querySelectorAll('.rotator__case');
let colorRotate = rotate[counter].dataset.color;
rotate[counter].style.color = colorRotate;

const rotator = () => {
/*    let speed;

    if (counter == 0) {
        speed = Number(rotate[counter].dataset.speed);
    }*/

    counter ++;
    if (counter == rotate.length) {
        rotate[counter - 1].classList.remove('rotator__case_active');
        counter = 0;
    } else {
        rotate[counter - 1].classList.remove('rotator__case_active');
    }
    colorRotate = rotate[counter].dataset.color;
    rotate[counter].style.color = colorRotate;
    rotate[counter].classList.add('rotator__case_active');
/*    speed = Number(rotate[counter].dataset.speed);
    return speed*/
}

setInterval(rotator, 1000)