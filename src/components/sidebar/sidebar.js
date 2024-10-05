import { fetchBooks } from '../../api/fetchBooks';
import { APP_STATE } from '../../appState';
import { displayBooks } from '../books/books';
import './sidebar.scss';

export const sidebarComponent = () => {
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar-container');

    createCategoriesList().forEach((it) => {
        sidebar.appendChild(it);
    });

    return sidebar;
};

const createCategoriesList = () => {
    const categories = [
        'Architecture',
        'Art & Fashion',
        'Biography',
        'Business',
        'Crafts & Hobbies',
        'Drama',
        'Fiction',
        'Food & Drink',
        'Health & Wellbeing',
        'History & Politics',
        'Humor',
        'Poetry',
        'Psychology',
        'Science',
        'Technology',
        'Travel & Maps',
    ];

    let categoriesList = [];

    categories.forEach((it) => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('category-item');

        const activeDot = document.createElement('div');
        activeDot.classList.add('active-item-dot');

        const itemText = document.createElement('span');
        itemText.classList.add('item-text');
        itemText.innerText = it;

        categoryItem.append(activeDot, itemText);
        categoriesList.push(categoryItem);
    });

    return categoriesList;
};

document.addEventListener('DOMContentLoaded', () => {
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
        });
    }
});
