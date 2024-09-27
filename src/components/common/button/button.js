import './button.scss';

export const buttonComponent = (text) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = text;
    return btn;
};
