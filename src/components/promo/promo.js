import './promo.scss';
import firstBanner from '/src/assets/promo/banner1.png';

export const promoComponent = () => {
    const promoContainer = document.createElement('section');
    promoContainer.classList.add('promo-container');

    const banner = document.createElement('img');
    banner.classList.add('banner');
    banner.src = firstBanner;
    banner.width = '1120';
    banner.height = '690';
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
