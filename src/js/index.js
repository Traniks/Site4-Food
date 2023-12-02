import {tabs} from "./blocks/tabs.js";
import {cards} from "./blocks/cards.js";
import {slider} from "./blocks/slider.js";
import {calc} from "./blocks/calc.js";
import {timer} from "./blocks/timer.js";
import {forms} from "./blocks/forms.js";
import {modal, showModal} from "./blocks/modal.js";

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => showModal(".modal", modalTimerId), 30000);
    localStorage.setItem("showModal", false);

    tabs(); 
    cards();
    slider();
    calc();
    timer("2023-9");
    forms(modalTimerId);
    modal("[data-modal]", ".modal", modalTimerId);
});