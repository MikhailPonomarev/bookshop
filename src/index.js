import './style.scss';

const component = () => {
    const elem = document.createElement('div');
    elem.innerHTML = 'Hello!';
    elem.classList.add('hello');

    return elem;
};

document.body.appendChild(component());
