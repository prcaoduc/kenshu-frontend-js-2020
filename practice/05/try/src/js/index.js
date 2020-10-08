(function() {
    const input = document.getElementById('input');
    const text = document.getElementById('text');

    input.onkeyup = event => {
        text.textContent = (event.currentTarget.value.includes('yes')) ? event.currentTarget.value : '';
    };
})();