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
        alert('Tiene que seleccionar una opción');
        return;
    }
}

// * Note: When you use `!! `, the return value is always a boolean value. Even if the return value is `null` or `undefined`.
