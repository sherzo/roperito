
$(document).ready(function() {
	
	$('.dropdown-toggle').click(function(e) {
	  if ($(document).width() > 768) {
	    e.preventDefault();

	    var url = $(this).attr('href');

	       
	    if (url !== '#') {
	    
	      window.location.href = url;
	    }

	  }
	});
})


$(document).ready(function($) {
	console.log('cl2');
	$('.drowSubmenu').click(function() {
		console.log('cl');
		$(this).parent().find('ul.dropdown').toggleClass('activeSub');
	});
	$('.drowSubmenu2').click(function() {
		console.log('cl');
		$(this).parent().find('ul.dropdown2').toggleClass('activeSub2');
	});
});