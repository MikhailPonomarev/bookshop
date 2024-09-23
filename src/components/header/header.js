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

    for (let index = 0; index < 3; index++) {
        const stub = document.createElement('div');
        stub.classList.add('stub');
        buttonsContainer.appendChild(stub);
    }

    return buttonsContainer;
};

export const headerComponent = () => {
    const header = document.createElement('header');

    header.appendChild(createLogo());
    header.appendChild(createNavBlock());
    header.appendChild(createButtonsContainer());

    return header;
};
