import { fetchBooks } from './api/fetchBooks';
import { APP_STATE } from './appState';
import { booksContainer, displayBooks } from './components/books/books';
import { headerComponent } from './components/header/header';
import { loadMoreComponent } from './components/loadmore/loadMore';
import { promoComponent } from './components/promo/promo';
import { sidebarComponent } from './components/sidebar/sidebar';
import './style.scss';

document.body.append(
    headerComponent(),
    promoComponent(),
    await booksContainer(),
    sidebarComponent(),
    loadMoreComponent(),
);

displayBooks(await fetchBooks(0));

const getBuyButtons = () => document.querySelectorAll('.buy-btn');

let addedBooksCount = 0;
let buyBtns = getBuyButtons();
const addedBooksKey = 'addedBooks';
localStorage.setItem(addedBooksKey, '');
const shopBagCounter = document.querySelector('.shop-bag-counter');

export const addOnClickBuyButtonsEvent = () => {
    buyBtns = getBuyButtons();

    buyBtns.forEach((it) => {
        it.addEventListener('click', () => {
            const bookToAdd = it.closest('.info').querySelector('.title').innerText;

            const addedBooks = localStorage.getItem(addedBooksKey);
            if (addedBooks.includes(bookToAdd)) {
                it.textContent = 'BUY NOW';

                if (addedBooksCount > 1) {
                    addedBooksCount -= 1;
                    shopBagCounter.innerText = addedBooksCount;
                } else {
                    addedBooksCount -= 1;
                    shopBagCounter.style.display = 'none';
                }

                localStorage.setItem(addedBooksKey, addedBooks.replace(`${bookToAdd}/`, ''));
            } else {
                it.textContent = 'IN THE CART';

                addedBooksCount += 1;
                shopBagCounter.style.display = 'flex';
                shopBagCounter.innerText = addedBooksCount;

                localStorage.setItem(addedBooksKey, addedBooks + `${bookToAdd}/`);
            }
        });
    });
};

addOnClickBuyButtonsEvent();

document.querySelector('.category-item').classList.add('active');

const categoryItems = document.querySelectorAll('.category-item');

for (const it of categoryItems) {
    it.addEventListener('click', async () => {
        document.querySelectorAll('.book').forEach((it) => it.remove());

        categoryItems.forEach((it) => it.classList.remove('active'));
        it.classList.add('active');

        APP_STATE.setCurrentCategory(it.textContent);

        const books = await fetchBooks(0, APP_STATE.getCurrentCategory());
        displayBooks(books);

        addOnClickBuyButtonsEvent();
    });
}

document.querySelector('.load-more-btn').addEventListener('click', async () => {
    const displayedBooksCount = document.querySelectorAll('.book').length;

    const moreBooks = await fetchBooks(displayedBooksCount, APP_STATE.getCurrentCategory());
    displayBooks(moreBooks);

    addOnClickBuyButtonsEvent();
});
