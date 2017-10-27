$(window).load(function() {

	var altura = 0;

	$(".normalize_height").each(function(){
		if($(this).outerHeight() > altura)
		{
			altura = $(this).outerHeight();
		}
	});

	$(".normalize_height").css("height", altura)

});
