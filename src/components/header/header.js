import './header.scss';

const createLogo = () => {
    const bookshopTitle = document.createElement('span');

    bookshopTitle.innerText = 'Bookshop';
    bookshopTitle.classList.add('logo');

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
    buttonsContainer.appendChild(user);

    const search = document.createElement('div');
    search.classList.add('search');
    buttonsContainer.appendChild(search);

    const shopBagContainer = document.createElement('div');
    shopBagContainer.classList.add('shop-bag-container');

    const bagImg = document.createElement('div');
    bagImg.classList.add('shop-bag');
    shopBagContainer.appendChild(bagImg);

    const bagCounter = document.createElement('div');
    bagCounter.classList.add('shop-bag-counter', 'hidden');
    shopBagContainer.appendChild(bagCounter);

    buttonsContainer.appendChild(shopBagContainer);

    return buttonsContainer;
};

export const headerComponent = () => {
    const header = document.createElement('header');

    header.appendChild(createLogo());
    header.appendChild(createNavBlock());
    header.appendChild(createButtonsContainer());

    return header;
};
