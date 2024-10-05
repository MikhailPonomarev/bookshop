import './promo.scss';
import firstBanner from '/src/assets/promo/banner1.svg';
import secondBanner from '/src/assets/promo/banner2.svg';
import thirdBanner from '/src/assets/promo/banner3.svg';

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

document.addEventListener('DOMContentLoaded', () => {
    const banners = [firstBanner, secondBanner, thirdBanner];
    const selectorItems = document.querySelectorAll('.selector-item');
    let currentBannerIndex = 0;

    const changeSelectorItemColor = (itemIndex, color) => {
        selectorItems.item(itemIndex).style.backgroundColor = color;
    };

    const switchNavigationItems = (nextIndex) => {
        const activeSelectorItemColor = 'rgb(158, 152, 220)';
        const inactiveSelectorItemColor = 'rgb(239, 238, 246)';

        const currentActiveItemIndex = Array.from(selectorItems).findIndex((it) => {
            return window.getComputedStyle(it).backgroundColor === activeSelectorItemColor;
        });

        changeSelectorItemColor(currentActiveItemIndex, inactiveSelectorItemColor);
        changeSelectorItemColor(nextIndex, activeSelectorItemColor);
    };

    document.querySelector('.selector-item:nth-of-type(1)').addEventListener('click', () => {
        const banner = document.querySelector('.banner');
        banner.src = firstBanner;

        switchNavigationItems(0);
        currentBannerIndex = 0;
    });

    document.querySelector('.selector-item:nth-of-type(2)').addEventListener('click', () => {
        const banner = document.querySelector('.banner');
        banner.src = secondBanner;

        switchNavigationItems(1);
        currentBannerIndex = 1;
    });

    document.querySelector('.selector-item:nth-of-type(3)').addEventListener('click', () => {
        const banner = document.querySelector('.banner');
        banner.src = thirdBanner;

        switchNavigationItems(2);
        currentBannerIndex = 2;
    });

    setInterval(() => {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        const banner = document.querySelector('.banner');
        banner.src = banners[currentBannerIndex];
        switchNavigationItems(currentBannerIndex < banners.length ? currentBannerIndex : 0);
    }, 5000);
});
