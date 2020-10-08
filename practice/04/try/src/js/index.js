(function() {

    const buttons = document.getElementsByClassName('button');
    // console.log(buttons);
    [...buttons].forEach(element => {
        element.addEventListener('click', () => {
            element.nextElementSibling.classList.toggle('is-active');
        });
    });
})();