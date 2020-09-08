(function() {
    window.initScrollSnap = function(s) {
        let inTransition = false;
        let inScroll = false;
        let inScrollTimer = null;
        s.addEventListener('wheel', async function(e) {
            // preventing regular scroll
            e.preventDefault();
            // resetting scroll timeout as scroll still goes on
            clearTimeout(inScrollTimer);
            inScrollTimer = setTimeout(function() {
                inScroll = false;
            }, 150);
            // if active transition in progress - doing nothing
            // if scrolling still happenning (inertia) - doing nothing
            if(inTransition || inScroll) return;
            inScroll = true;

            let currentItem = parseInt(s.getAttribute('active-item'));
            let itemsCount = s.children.length;

            // identifying next item withing boundaries 1 to max
            let nextItem = Math.max(Math.min(itemsCount, currentItem + Math.sign(e.deltaY)), 1);
            // if next item is current item doing nothing
            if(nextItem == currentItem) return;

            // transitioning between items
            inTransition = true;
            s.setAttribute('active-item', nextItem);
            s.children[0].addEventListener('transitionend', function() {
                inTransition = false;
            }, { once: true })
        });
    };
    const scrollSnapContainers = document.querySelectorAll('.scroll-snap');
    scrollSnapContainers.forEach(initScrollSnap);
})();