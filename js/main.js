document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        }
    }

    const so = new ScrollObserver('.action_btn', cb);
}); 

document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        }
    }

    const so = new ScrollObserver('.awaSpotify', cb);
}); 
