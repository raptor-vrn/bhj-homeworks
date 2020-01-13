'use strict';

let checkboxList = document.querySelectorAll('div > ul > li > label .interest__check');

function getCheckbox() {
    let checkboxChilds = this.closest('label').nextElementSibling.querySelectorAll('.interest__check');

    if (this.checked) {
        for (let i = 0; i < checkboxChilds.length; i++) {
            checkboxChilds[i].checked = true;
        }
    } else {
        for (let i = 0; i < checkboxChilds.length; i++) {
            checkboxChilds[i].checked = false;
        }
    }
}

for (let boxes of checkboxList) {
    boxes.addEventListener('change', getCheckbox)
}