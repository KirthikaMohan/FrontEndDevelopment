$(document).ready(function() {

<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->
    
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 2000);
return false;
});
	
<!-- =============================================== -->
<!-- ========== navbar js down ========== -->
<!-- =============================================== -->
$('.nav a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 40
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
	
	
	
});
	