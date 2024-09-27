import { buttonComponent } from '../common/button/button';
import './loadMore.scss';

export const loadMoreComponent = () => {
    const loadMoreContainer = document.createElement('section');
    loadMoreContainer.classList.add('load-more-container');

    const loadMoreBtn = buttonComponent('LOAD MORE');
    loadMoreBtn.classList.add('load-more-btn');
    loadMoreContainer.appendChild(loadMoreBtn);

    return loadMoreContainer;
};
