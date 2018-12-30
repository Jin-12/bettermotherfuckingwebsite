var elem = document.querySelector('html');
elem.addEventListener('click', function(e) {
  if  (confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please! Tu viens ?')) {
	  document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
	  } else { 
	};
		
});
setTimeout(function() {
    elem.dispatchEvent(new Event('click'));
}, 10000);

