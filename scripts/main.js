var elem = document.querySelector('html');
elem.addEventListener('click', function(e) {
    alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');
});
setTimeout(function() {
    elem.dispatchEvent(new Event('click'));
}, 10000);
