import { buttonComponent } from '../common/button/button';
import './books.scss';

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

        const thumbnail = document.createElement('img');
        thumbnail.classList.add('thumbnail');
        thumbnail.src = b.thumbnail;
        book.appendChild(thumbnail);

        const info = document.createElement('div');
        info.classList.add('info');

        const authors = document.createElement('span');
        authors.classList.add('authors');
        authors.innerText =
            b.authors.length <= 3 ? b.authors.join(', ') : `${b.authors.slice(0, 3).join(', ')} and more`;

        const title = document.createElement('span');
        title.classList.add('title');
        title.innerText = b.title;

        //append stars in info

        //append ratings count in info

        const description = document.createElement('p');
        description.classList.add('description');
        if (b.description) {
            description.innerText =
                b.description?.length >= 110 ? `${b.description.substring(0, 110)}...` : b.description;
        } else {
            description.style.display = 'none';
        }

        const price = document.createElement('span');
        price.classList.add('price');
        price.innerText = b.retailPrice ? `$${b.retailPrice}` : 'FREE';

        const buyBtn = buttonComponent('BUY NOW');
        buyBtn.classList.add('buy-btn');

        info.append(authors, title, description, price, buyBtn);

        //append info in book
        book.appendChild(info);
        //append book in container
        booksContainer.appendChild(book);
    });
};
