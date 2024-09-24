import './promo.scss';

export const promoComponent = () => {
    const promoContainer = document.createElement('section');
    promoContainer.classList.add('promo-container');

    const banner = document.createElement('div');
    banner.classList.add('banner');

    promoContainer.appendChild(banner);

    const bannerSelector = document.createElement('div');
    bannerSelector.classList.add('banner-selector');
    for (let index = 0; index < 3; index++) {
        const item = document.createElement('div');
        item.classList.add('selector-item');
        bannerSelector.appendChild(item);
    }

    promoContainer.appendChild(bannerSelector);

    return promoContainer;
};
