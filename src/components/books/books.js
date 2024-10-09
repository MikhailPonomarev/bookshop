import { buttonComponent } from '../common/button/button';
import './books.scss';
import noThumbnail from '/src/assets/books/no_thumbnail.png';
import yellowStar from '/src/assets/books/yellow_star.svg';
import greyStar from '/src/assets/books/grey_star.svg';

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

    books.forEach((it) => {
        const book = document.createElement('div');
        book.id = it.id;
        book.classList.add('book');

        book.append(createThumbnail(it.thumbnail), createInfo(it));

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

const createInfo = (bookInfo) => {
    const info = document.createElement('div');
    info.classList.add('info');

    info.append(
        createAuthors(bookInfo.authors),
        createTitle(bookInfo.title),
        createRating(bookInfo.averageRating, bookInfo.ratingsCount),
        createDescription(bookInfo.description),
        createPrice(bookInfo.retailPrice),
        createBuyBtn(),
    );

    return info;
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

    title.innerText = titleText.length > 45 ? `${titleText.substring(0, 45)}...` : titleText;

    return title;
};

const createRating = (averageRating, ratingsCount) => {
    const rating = document.createElement('div');
    rating.classList.add('rating');

    if (averageRating === undefined && ratingsCount === undefined) {
        rating.style.display = 'none';
        return rating;
    }

    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');

    for (let i = 0; i < averageRating; i++) {
        starsContainer.appendChild(createStar(yellowStar));
    }

    if (averageRating < 5) {
        let countGreyStarsToAdd = 5 - averageRating;
        while (countGreyStarsToAdd > 0) {
            starsContainer.appendChild(createStar(greyStar));
            countGreyStarsToAdd--;
        }
    }

    const reviewsCount = document.createElement('span');
    reviewsCount.classList.add('reviews-count');
    reviewsCount.innerText = `${ratingsCount} review`;

    rating.append(starsContainer, reviewsCount);

    return rating;
};

const createStar = (path) => {
    const star = document.createElement('img');
    star.src = path;
    star.alt = 'star';

    return star;
};

const createDescription = (descriptionText) => {
    const description = document.createElement('p');
    description.classList.add('description');

    let descriptionTextToShow = 'Description not added';
    if (descriptionText) {
        descriptionTextToShow =
            descriptionText.length > 110 ? `${descriptionText.substring(0, 110)}...` : descriptionText;
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
