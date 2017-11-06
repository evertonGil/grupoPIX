$(window).load(function(){

	$(".open_pop_up").on('click', function(){
		$('body').addClass("open");
		$(".pop_up").removeClass('video');
		$(".pop_up .fechar").html('<div class="icone_fechar">x</div>');

		$(".overlay_pop").show();
		$(".pop_up .header h2").html($(this).attr("data-titulo"));

		if($(this).attr("data-conteudo")){
			var conteudo = eval($(this).attr("data-conteudo")).clone();
	    	conteudo.css({display: 'flex'});

			$(".pop_up .conteudo").html(conteudo);
		}
		if($(this).attr("data-url")){
		    	var url = $(this).attr("data-url");

		    	console.log(url);
		    	$(".pop_up .conteudo").load(url);
		}
	});



	var youtube1 = '<iframe width="900" height="520" src="';
	var youtube2 = '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
	var linkfinal = '';	

	$(".video").on('click', function () {
		linkfinal = youtube1 + $(this).attr('data-youtube') + youtube2;
		$(".pop_up").addClass('video');
		$(".pop_up .fechar").html('<i class="fa fa-times-circle-o "></i>');

		$(".pop_up .conteudo").html(linkfinal);
		$(".overlay_pop").show();

	});


	$(".overlay_pop").on('click', function (event) {
		console.log(this)
		if(event.target.classList.contains("overlay_pop") || event.target.classList.contains("fechar") || event.target.parentNode.classList.contains("fechar")){
			$(".overlay_pop .conteudo").html('');
			$(".overlay_pop").hide();
			$('body').removeClass("open");
		}
	});

});