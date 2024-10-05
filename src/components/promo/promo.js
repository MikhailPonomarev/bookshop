import './promo.scss';
import firstBanner from '/src/assets/promo/banner1.svg';

export const promoComponent = () => {
    const promoContainer = document.createElement('section');

    promoContainer.classList.add('promo-container');

    promoContainer.append(createBanner(), createBannerSelector(), createChangeBook(), createTobBooks());

    return promoContainer;
};

const createBanner = () => {
    const banner = document.createElement('img');

    banner.classList.add('banner');
    banner.src = firstBanner;

    return banner;
};

const createBannerSelector = () => {
    const bannerSelector = document.createElement('div');

    bannerSelector.classList.add('banner-selector');

    for (let index = 0; index < 3; index++) {
        const item = document.createElement('div');
        item.classList.add('selector-item');
        bannerSelector.appendChild(item);
    }

    return bannerSelector;
};

const createChangeBook = () => {
    const changeBook = document.createElement('div');

    changeBook.classList.add('change-book');

    return changeBook;
};

const createTobBooks = () => {
    const topBooks = document.createElement('div');

    topBooks.classList.add('top-books');

    return topBooks;
};
