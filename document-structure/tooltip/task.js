let tooltip = document.createElement('div');
tooltip.classList.add("tooltip");

linksTooltip = Array.from(document.getElementsByClassName("has-tooltip"));

function showTooltip() {
    let tooltipText = this.title;
    event.preventDefault();

    const linksActive = document.querySelector('.tooltip_active');

    if (linksActive) {
        tooltip.classList.add('menu_active');
        tooltip.classList.remove('tooltip_active');
        return
    }

    tooltip.innerText = tooltipText;

    let coordinates = this.getBoundingClientRect();
    tooltip.style.left = `${coordinates.x}px`;
    tooltip.style.top = `${coordinates.y + 20}px`;

    tooltip.classList.toggle('tooltip_active');

    this.appendChild(tooltip);
}

for (let link of linksTooltip) {
    link.addEventListener('click', showTooltip);
}