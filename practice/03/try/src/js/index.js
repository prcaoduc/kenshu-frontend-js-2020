(function() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');

    document.getElementById('button').onclick = () => {
        modalOverlay.classList.add('is-active');
        modalContent.classList.add('is-active');
    };

    document.getElementById('modal-close').onclick = () => {
        modalOverlay.classList.remove('is-active');
        modalContent.classList.remove('is-active');
    };

    document.getElementById('modal-overlay').onclick = () => {
        modalOverlay.classList.remove('is-active');
        modalContent.classList.remove('is-active');
    };
})();