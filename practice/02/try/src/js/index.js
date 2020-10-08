(function() {
    const button = document.getElementById('button');
    const typeText = document.getElementsByClassName('text--type')[0];
    const classText = document.getElementsByClassName('text--class')[0];

    // button.addEventListener('click', () => {
    //     typeText.textContent = button.getAttribute('data-type');
    //     classText.textContent = button.getAttribute('class');
    // });

    button.onclick = () => {
        typeText.textContent = button.getAttribute('data-type');
        classText.textContent = button.getAttribute('class');
    }

})();