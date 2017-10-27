$(document).ready(function(){
	$(".icon-mobile").click(function(){
		if ($("body").hasClass( "open" )) {
			$("body").removeClass("open")
		}
		else{
			$("body").addClass("open")
		}		
	});



	// btn scroll to top
	$(window).scroll(function(event) {
		if($(window).scrollTop() > 50)
		{
			//console.log($(window).scrollTop());
			$('.top_page').fadeIn('300');
		}
		else{
			$('.top_page').fadeOut('300');
		}
	});
	$('.top_page').click(function() {
		var body = $("html, body");
		body.stop().animate({scrollTop:0}, 500, 'swing');
		return false;
	});
	

});
