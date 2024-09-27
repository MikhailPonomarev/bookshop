import { buttonComponent } from '../common/button/button';
import './books.scss';

const fetchBooks = async (category) => {
    const apiKey = 'AIzaSyAsv8VzHXHcFJPaku9yFph8JFXvJbsLi3I';
    const url = `https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;
    let books;

    try {
        const response = await fetch(url);
        const body = await response.json();

        books = Array.from(body.items).map((it) => {
            return {
                thumbnail: it.volumeInfo.imageLinks.thumbnail,
                authors: it.volumeInfo.authors,
                title: it.volumeInfo.title,
                averageRating: it.volumeInfo.averageRating,
                ratingsCount: it.volumeInfo.ratingsCount,
                description: it.volumeInfo.description,
                retailPrice: it.saleInfo.retailPrice?.amount,
            };
        });
    } catch (error) {
        console.log(error);
    }

    return books;
};

export const booksComponent = async () => {
    const booksContainer = document.createElement('section');
    booksContainer.classList.add('books-container');

    const books = await fetchBooks();
    if (!books) {
        throw new Error('books is undefined');
    }

    books.forEach((b) => {
        const book = document.createElement('div');
        book.classList.add('book');

        //create thumbnail
        const thumbnail = document.createElement('img');
        thumbnail.classList.add('thumbnail');
        thumbnail.src = b.thumbnail;
        book.appendChild(thumbnail);

        //create info
        const info = document.createElement('div');
        info.classList.add('info');

        //append authors in info
        const authors = document.createElement('span');
        authors.classList.add('authors');
        authors.innerText = b.authors.join(' ');
        info.appendChild(authors);

        //append title in info
        const title = document.createElement('span');
        title.classList.add('title');
        title.innerText = b.title;
        info.appendChild(title);

        //append start in info

        //append ratings count in info

        //append description in info
        const description = document.createElement('p');
        description.classList.add('description');
        description.innerText = b.description.length >= 110 ? `${b.description.substring(0, 110)}...` : b.description;
        info.appendChild(description);

        //append price in info
        const price = document.createElement('span');
        price.classList.add('price');
        price.innerText = b.retailPrice ? `$${b.retailPrice}` : 'FREE';
        info.appendChild(price);

        //append btn in info
        const buyBtn = buttonComponent('BUY NOW');
        buyBtn.classList.add('buy-btn');
        info.appendChild(buyBtn);

        //append info in book
        book.appendChild(info);
        //append book in container
        booksContainer.appendChild(book);
    });

    return booksContainer;
};
