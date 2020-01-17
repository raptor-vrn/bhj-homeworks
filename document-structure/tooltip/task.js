'use strict';

const linksTooltip = document.querySelectorAll('.has-tooltip');

const addElement = (parent) => {
    let tooltip = document.createElement('div');
    let coordinates = parent.getBoundingClientRect();
    let tooltipText = parent.title;

    tooltip.classList.add('tooltip');
    tooltip.innerText = tooltipText;

    tooltip.style.left = `${coordinates.x}px`;
    tooltip.style.top = `${coordinates.y + 20}px`;

    return tooltip;
};

function showTooltip() {
    event.preventDefault();
    this.appendChild(addElement(this));

    const activeLink = document.querySelector('.tooltip_active');

    if (activeLink) {
        this.querySelector('.tooltip').classList.add('tooltip_active');
        activeLink.classList.remove('tooltip_active');
        return;
    }

    this.querySelector('.tooltip').classList.toggle('tooltip_active');

}

for (let link of linksTooltip) {
    link.addEventListener('click', showTooltip);
}