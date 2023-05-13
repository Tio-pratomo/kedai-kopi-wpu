import menus from './menu-detail';

const containerCard = document.querySelector('.menu__row');
const cards = menus
    .map(
        ({ name, price, img }) => /* html */ `
    <div class="menu__card">
        <img src=${img} alt=${img} class="menu__card__img">
        <h3 class="menu__card__title menu__card__title--text-white">${name}</h3>
        <p class="menu__card__price menu__card__price--text-white">Rp.${price}</p>

    </div>
`
    )
    .join(' ');

export const renderMenu = () => {
    containerCard.innerHTML = cards;
};
