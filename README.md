# ScrollSnap
## Minimalistic customisable fullPage.js replacement

It just works. Scroll your mouse over the container to navigate between items.
It is dead simple and only ~50 lines of code that are easily customisable. No dependencies.

## [Demo](https://alexuslab.com/scrollsnap/)

## Use & Install
Drop 
```html
<div class="scroll-snap" active-item="1">
    <div class="scroll-snap__item">Item 1</div>
    <div class="scroll-snap__item">Item 2</div>
    <div class="scroll-snap__item">Item 3</div>
</div>
```
code wherever you need in your markup. 
Link `scrollsnap.css` in your header and `scrollsnap.js` before end of body tag. 

## Help tips

### Make Full Screen
```css
.scroll-snap {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 1;
}
```

### Alter transition between items
```css
.scroll-snap__item {
    /* making it faster with custom timing */
    transition: transform 0.3s cubic-bezier(.17,.67,.83,.67);
}
```

### Get\Set current item with code
```js
let scrollSnap = document.querySelector('.scroll-snap');
// this is how you get current item
console.log(scrollSnap.getAttribute('current-item'));
// this is how you set current item
scrollSnap.setAttribute('current-item', 2);
```

### Initialize dynamically added scroll snap
```js
initScrollSnap(newScrollSnapDOMNode);
```

### Increase max items limit
There is max of 9 items supported in code by default. If you need more you might need to review your design. Here is a way how you can add support for more
```css
*:nth-child(10) { --nth-child-idx: 10; }
.scroll-snap[active-item="10"] { --active-item: 10; }
```

### Track change of active item
```js
const scrollSnap = document.querySelector('.scroll-snap');
const observer = new MutationObserver(function() {
    console.log(scrollSnap.getAttribute('active-item'));
});
observer.observe(scrollSnap, { attributes: true, attributeFilter: ['active-item']});
```