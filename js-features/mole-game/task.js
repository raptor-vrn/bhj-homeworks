'use strict';

let winI = 0, loserI = 0;

const quantity = document.getElementsByClassName('hole').length;

function getHole(index) {
    return 'hole' + index;
}

for (let i = 1; i <= quantity; i++) {

    const element = document.getElementById(getHole(i));

    element.onclick = function (event) {
        console.log(event.target.classList.contains('hole_has-mole'))
        if (event.target.classList.contains('hole_has-mole')) {
            winI ++;
            document.getElementById('dead').textContent = winI;
        } else {
            loserI ++;
            document.getElementById('lost').textContent = loserI;
        }

        if(winI === 10) {
            alert('Вы выиграли');
            winI = 0;
            loserI = 0;
            document.getElementById('lost').textContent = loserI;
            document.getElementById('dead').textContent = winI;
        } else if (loserI === 5) {
            alert('Вы проиграли');
            winI = 0;
            loserI = 0;
            document.getElementById('lost').textContent = loserI;
            document.getElementById('dead').textContent = winI;
        }

    }
}
