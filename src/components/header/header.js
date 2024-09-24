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

    const shopBag = document.createElement('div');
    shopBag.classList.add('shop-bag');
    buttonsContainer.appendChild(shopBag);

    return buttonsContainer;
};

export const headerComponent = () => {
    const header = document.createElement('header');

    header.appendChild(createLogo());
    header.appendChild(createNavBlock());
    header.appendChild(createButtonsContainer());

    return header;
};
