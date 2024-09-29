import { fetchBooks } from './api/fetchBooks';
import { booksContainer, displayBooks } from './components/books/books';
import { headerComponent } from './components/header/header';
import { loadMoreComponent } from './components/loadmore/loadMore';
import { promoComponent } from './components/promo/promo';
import { sidebarComponent } from './components/sidebar/sidebar';
import './style.scss';
import firstBanner from '/src/assets/promo/banner1.png';
import secondBanner from '/src/assets/promo/banner2.png';
import thirdBanner from '/src/assets/promo/banner3.png';

document.body.append(
    headerComponent(),
    promoComponent(),
    await booksContainer(),
    sidebarComponent(),
    loadMoreComponent(),
);

const banners = [firstBanner, secondBanner, thirdBanner];
const selectorItems = document.querySelectorAll('.selector-item');
let currentBannerIndex = 0;

const changeSelectorItemColor = (itemIndex, color) => {
    selectorItems.item(itemIndex).style.backgroundColor = color;
};

const switchNavigationItems = (nextIndex) => {
    const activeSelectorItemColor = 'rgb(158, 152, 220)';
    const inactiveSelectorItemColor = 'rgb(239, 238, 246)';

    const currentActiveItemIndex = Array.from(selectorItems).findIndex((it) => {
        return window.getComputedStyle(it).backgroundColor === activeSelectorItemColor;
    });

    changeSelectorItemColor(currentActiveItemIndex, inactiveSelectorItemColor);
    changeSelectorItemColor(nextIndex, activeSelectorItemColor);
};

document.querySelector('.selector-item:nth-of-type(1)').addEventListener('click', () => {
    const banner = document.querySelector('.banner');
    banner.src = firstBanner;

    switchNavigationItems(0);
    currentBannerIndex = 0;
});

document.querySelector('.selector-item:nth-of-type(2)').addEventListener('click', () => {
    const banner = document.querySelector('.banner');
    banner.src = secondBanner;

    switchNavigationItems(1);
    currentBannerIndex = 1;
});

document.querySelector('.selector-item:nth-of-type(3)').addEventListener('click', () => {
    const banner = document.querySelector('.banner');
    banner.src = thirdBanner;

    switchNavigationItems(2);
    currentBannerIndex = 2;
});

setInterval(() => {
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    const banner = document.querySelector('.banner');
    banner.src = banners[currentBannerIndex];
    switchNavigationItems(currentBannerIndex < banners.length ? currentBannerIndex : 0);
}, 5000);

displayBooks(await fetchBooks(0));

const categoryItems = document.querySelectorAll('.category-item');
let currentCategory = 'Architecture';

for (const it of categoryItems) {
    it.addEventListener('click', async () => {
        document.querySelectorAll('.book').forEach((it) => it.remove());

        currentCategory = it.textContent;
        const books = await fetchBooks(0, currentCategory);
        displayBooks(books);
    });
}

let addedBooksCount = 0;
const buyBtns = document.querySelectorAll('.buy-btn');
const shopBagCounter = document.querySelector('.shop-bag-counter');

buyBtns.forEach((it) => {
    it.addEventListener('click', () => {
        addedBooksCount += 1;

        shopBagCounter.style.display = 'flex';
        shopBagCounter.innerHTML = addedBooksCount;
    });
});

document.querySelector('.load-more-btn').addEventListener('click', async () => {
    const displayedBooksCount = document.querySelectorAll('.book').length;
    const moreBooks = await fetchBooks(displayedBooksCount, currentCategory);
    displayBooks(moreBooks);
});
