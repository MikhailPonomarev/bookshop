import { booksComponent } from './components/books/books';
import { headerComponent } from './components/header/header';
import { loadMoreComponent } from './components/loadmore/loadMore';
import { promoComponent } from './components/promo/promo';
import { sidebarComponent } from './components/sidebar/sidebar';
import './style.scss';

document.body.append(
    headerComponent(),
    promoComponent(),
    await booksComponent(),
    sidebarComponent(),
    loadMoreComponent(),
);
