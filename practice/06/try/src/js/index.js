(function() {
    'use strict';

    const form = document.getElementById('form');
    const formElements = {
        name: form.name,
        gender: form.gender,
        button: form.button
    }

    const wrapper = document.getElementById('text-wrapper');
    const name = document.getElementById('name-text');
    const gender = document.getElementById('gender-text');

    formElements.button.onclick = () => {
        wrapper.classList.add('is-active');
        name.textContent = formElements.name.value;
        gender.textContent = formElements.gender.value;
    };
})();