'use strict';

const cardWapper = document.querySelector('.card__wrapper');
const cardBack = document.querySelector('.card__back');

// Form elements (inputs & labels)
const optionsInput = document.querySelectorAll('.form__input');
const optionsLabel = document.querySelectorAll('.form__label');

// `span` for number selected
const selectedNumber = document.getElementById('selected-number');

const onSubmit = e => {
    e.preventDefault();

    const selectedValue = checkedVerify();
    if (!!selectedValue) {
        selectedNumber.textContent = selectedValue; // * Note on line 19

        cardWapper.classList.add('disabled');
        cardBack.classList.remove('disabled');
    }
};

const btn = document.querySelector('.form__btn');
btn.addEventListener('click', onSubmit);

function checkedVerify() {
    let sentinel = 0;
    let count = 0;
    let value = '';
    optionsInput.forEach(input => {
        if (input.checked) {
            sentinel += 1;
            let label = optionsLabel[count];
            value = label.textContent;
        }
        count += 1;
    });

    if (sentinel > 0) {
        return value;
    } else {
        addModal();
        return;
    }
}

// * Note: When you use `!! `, the return value is always a boolean value. Even if the return value is `null` or `undefined`.

function addModal() {
    const mainTag = document.getElementById('primary-content'); // main tag

    const modalContainer = document.createElement('div'); // Create modal container
    modalContainer.setAttribute('id', 'modal');

    const modalBackground = document.createElement('div'); // Create modal background
    modalBackground.classList.add('modal__background');

    const modal = document.createElement('div'); // Create modal card
    modal.classList.add('modal');

    const modalTitle = document.createElement('h3'); // Modal title
    modalTitle.classList.add('card__title');
    modalTitle.classList.add('modal__title');
    modalTitle.textContent = `Warning`;

    const modalMessage = document.createElement('p'); // Modal message
    modalMessage.classList.add('modal__message');
    modalMessage.textContent = `You have to select an option!`;

    const modalBtn = document.createElement('button'); // Modal button
    modalBtn.classList.add('form__btn');
    modalBtn.classList.add('modal__btn');
    modalBtn.textContent = `OK`;
    // Function to close modal
    modalBtn.addEventListener('click', () => {
        modalContainer.remove();
    });
    // Button accessibility attributes
    modalBtn.setAttribute('tabindex', '0');
    modalBtn.setAttribute('aria-label', 'Close button for warning');

    // Added elements to modal
    modal.appendChild(modalTitle);
    modal.appendChild(modalMessage);
    modal.appendChild(modalBtn);

    modalBackground.appendChild(modal);
    modalContainer.appendChild(modalBackground);

    // Insert modal into parent container
    mainTag.appendChild(modalContainer);
}
