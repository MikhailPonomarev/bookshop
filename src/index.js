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

export const getBuyButtons = () => document.querySelectorAll('.buy-btn');

let addedBooksCount = 0;
let buyBtns = getBuyButtons();
const shopBagCounter = document.querySelector('.shop-bag-counter');

const addOnClickBuyButtonsEvent = () => {
    buyBtns.forEach((it) => {
        it.addEventListener('click', () => {
            addedBooksCount += 1;

            shopBagCounter.style.display = 'flex';
            shopBagCounter.innerHTML = addedBooksCount;
        });
    });
};

addOnClickBuyButtonsEvent();

document.querySelector('.load-more-btn').addEventListener('click', async () => {
    const displayedBooksCount = document.querySelectorAll('.book').length;

    const moreBooks = await fetchBooks(displayedBooksCount, APP_STATE.getCurrentCategory());
    displayBooks(moreBooks);

    buyBtns = getBuyButtons();
    addOnClickBuyButtonsEvent();
});
