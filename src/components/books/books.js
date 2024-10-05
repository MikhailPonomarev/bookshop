import { buttonComponent } from '../common/button/button';
import './books.scss';
import noThumbnail from '/src/assets/books/no_thumbnail.png';

export const booksContainer = async () => {
    const booksContainer = document.createElement('section');
    booksContainer.classList.add('books-container');

    return booksContainer;
};

export const displayBooks = (books) => {
    const booksContainer = document.querySelector('.books-container');

    if (!books) {
        throw new Error('books is undefined');
    }

    books.forEach((b) => {
        const book = document.createElement('div');

        book.classList.add('book');
        book.append(createThumbnail(b.thumbnail), createInfo(b));

        booksContainer.appendChild(book);
    });

    return booksContainer;
};

const createThumbnail = (imgLink) => {
    const thumbnail = document.createElement('img');

    thumbnail.classList.add('thumbnail');
    thumbnail.src = imgLink === undefined ? noThumbnail : imgLink;

    return thumbnail;
};

const createAuthors = (authorsList) => {
    const authors = document.createElement('span');

    authors.classList.add('authors');
    let authorsToShow = 'No author';
    if (authorsList) {
        authorsToShow =
            authorsList.length <= 3 ? authorsList.join(', ') : `${authorsList.slice(0, 3).join(', ')} and more`;
    }
    authors.innerText = authorsToShow;

    return authors;
};

const createTitle = (titleText) => {
    const title = document.createElement('span');

    title.classList.add('title');
    title.innerText = titleText;

    return title;
};

const createDescription = (descriptionText) => {
    const description = document.createElement('p');

    description.classList.add('description');
    let descriptionTextToShow = 'Description not added';
    if (descriptionText) {
        descriptionTextToShow =
            descriptionText.length >= 110 ? `${descriptionText.substring(0, 110)}...` : descriptionText;
    }
    description.innerText = descriptionTextToShow;

    return description;
};

const createPrice = (retailPrice) => {
    const price = document.createElement('span');

    price.classList.add('price');
    price.innerText = retailPrice ? `$${retailPrice}` : 'FREE';

    return price;
};

const createBuyBtn = () => {
    const buyBtn = buttonComponent('BUY NOW');

    buyBtn.classList.add('buy-btn');

    return buyBtn;
};

const createInfo = (bookInfo) => {
    const info = document.createElement('div');

    info.classList.add('info');
    info.append(
        createAuthors(bookInfo.authors),
        createTitle(bookInfo.title),
        createDescription(bookInfo.description),
        createPrice(bookInfo.retailPrice),
        createBuyBtn(),
    );

    return info;
};
