document.addEventListener('DOMContentLoaded', function () {

    const cb1 = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }
    const cb2 = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        }
    } 
    
    const cb3 = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('down');
        }
    } 

    const so1 = new ScrollObserver('.animate-title', cb1);
    const so2 = new ScrollObserver('.cover-slide', cb2);
    const so3 = new ScrollObserver('.appear', cb3);
});

