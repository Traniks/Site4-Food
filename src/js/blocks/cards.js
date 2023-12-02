const axios = require('axios');

export function cards() {
    class MenuCard {
        constructor(scr, alt, title, descr, price, parentSelector, ...classes) {
            this.scr = scr;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changedToUAH();
        }

        changedToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const elem = document.createElement("div");
            if (this.classes.length === 0) {
                this.classes = "menu__item"
                elem.classList.add(this.classes);
            } else {
                this.classes.forEach(className => elem.classList.add(className));
            }
            elem.innerHTML = `
                <img src=${this.scr} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <hr class="menu__item-divider">
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(elem);
        }
    }

    axios.get("http://localhost:3000/menu")
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });
}
