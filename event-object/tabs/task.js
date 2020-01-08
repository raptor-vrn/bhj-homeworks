'use strict'

let tabs = Array.from(document.getElementsByClassName("tab"));
let tabContent = document.getElementsByClassName("tab__content");

function changeActiveElements() {
    for (const tab of tabs) {
        tab.className = "tab";
    }

    for (const tabcont of tabContent) {
        tabcont.className = "tab__content";
    }

    let i = tabs.indexOf(this)

    tabs[i].className = "tab tab_active";
    tabContent[i].className = "tab__content tab__content_active";
}

for (const tbs of tabs) {
    tbs.onclick = changeActiveElements;
}