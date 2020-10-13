(function() {
    'use strict';

    const form = document.getElementById('form');
    const errorText = document.getElementById('error');

    const formElements = {
        name: form.name,
        mail: form.mail,
        gender: form.gender,
        age: form.age,
        term: form.term,
    };

    const formElementsArray = Object.values(formElements);

    const formElementsFilter = (element) => {
        if (element.type === 'checkbox') {
            return element.checked === false;
        } else {
            return element.value === '';
        }
    }

    const isFormElementsFilled = () => {
        return formElementsArray.filter(formElementsFilter).length === 0;
    };

    const activeError = () => {
        errorText.classList.add('is-active');
    };

    form.onsubmit = (e) => {
        e.preventDefault();
        if (isFormElementsFilled()) {
            e.currentTarget.submit();
        } else {
            activeError();
        }
    };
})();