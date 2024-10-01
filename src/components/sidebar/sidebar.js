import './sidebar.scss';

export const sidebarComponent = () => {
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar-container');

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

    categories.forEach((it) => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('category-item');

        const activeDot = document.createElement('div');
        activeDot.classList.add('active-item-dot');

        const itemText = document.createElement('span');
        itemText.classList.add('item-text');
        itemText.innerText = it;

        categoryItem.append(activeDot, itemText);
        sidebar.appendChild(categoryItem);
    });

    return sidebar;
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.category-item').classList.add('active');
});
