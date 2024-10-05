import './promo.scss';
import firstBanner from '/src/assets/promo/banner1.svg';

export const promoComponent = () => {
    const promoContainer = document.createElement('section');
    promoContainer.classList.add('promo-container');

    const banner = document.createElement('img');
    banner.classList.add('banner');
    banner.src = firstBanner;

    const bannerSelector = document.createElement('div');
    bannerSelector.classList.add('banner-selector');
    for (let index = 0; index < 3; index++) {
        const item = document.createElement('div');
        item.classList.add('selector-item');
        bannerSelector.appendChild(item);
    }

    const changeBook = document.createElement('div');
    changeBook.classList.add('change-book');

    const topBooks = document.createElement('div');
    topBooks.classList.add('top-books');

    promoContainer.append(banner, bannerSelector, changeBook, topBooks);
    return promoContainer;
};
