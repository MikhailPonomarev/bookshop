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
        const categoryItem = document.createElement('span');
        categoryItem.classList.add('category-item');
        categoryItem.innerText = it;

        sidebar.appendChild(categoryItem);
    });

    return sidebar;
};
