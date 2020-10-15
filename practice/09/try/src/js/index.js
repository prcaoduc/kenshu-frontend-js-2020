(function() {
    'use strict'
    const mainImg = document.getElementsByClassName('main-img')[0];
    const thumbImgs = document.getElementsByClassName('thumb-item-img');
    
    // console.log(activedThumb);

    [...thumbImgs].forEach(element => {
        element.onmouseover = (event) => {
            let newMainImgScr = event.currentTarget.getAttribute('src').replace('small', 'large');
            let activedThumb = document.getElementsByClassName('is-active')[0];
            mainImg.setAttribute('src', newMainImgScr);
            activedThumb.classList.remove('is-active');
            element.classList.add('is-active');
        };
    });
})();