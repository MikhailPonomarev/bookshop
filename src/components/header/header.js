import './header.scss';

export const headerComponent = () => {
    const header = document.createElement('header');

    header.append(createLogo(), createNavBlock(), createButtonsContainer());

    return header;
};

const createLogo = () => {
    const bookshopTitle = document.createElement('span');

    bookshopTitle.classList.add('logo');
    bookshopTitle.innerText = 'Bookshop';

    return bookshopTitle;
};

const createNavBlock = () => {
    const navLinksBlock = document.createElement('nav');

    const navLinksList = document.createElement('ul');
    navLinksList.classList.add('nav-list');

    const navLinksNames = ['BOOKS', 'AUDIOBOOKS', 'STATIONERY & GIFTS', 'BLOG'];

    navLinksNames.forEach((name) => {
        const link = document.createElement('li');
        link.innerText = name;
        link.classList.add('nav-list-item');
        navLinksList.appendChild(link);
    });

    navLinksBlock.appendChild(navLinksList);

    return navLinksBlock;
};

const createButtonsContainer = () => {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const user = document.createElement('div');
    user.classList.add('user');

    const search = document.createElement('div');
    search.classList.add('search');

    const shopBagContainer = document.createElement('div');
    shopBagContainer.classList.add('shop-bag-container');

    const bagImg = document.createElement('div');
    bagImg.classList.add('shop-bag');

    const bagCounter = document.createElement('div');
    bagCounter.classList.add('shop-bag-counter', 'hidden');

    shopBagContainer.append(bagImg, bagCounter);
    buttonsContainer.append(user, search, shopBagContainer);

    return buttonsContainer;
};
