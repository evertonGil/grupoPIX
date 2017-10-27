$(window).load(function(){

	$(".open_pop_up").on('click', function(){
		$('body').addClass("open");
		$(".overlay_pop").show();
		$(".pop_up .header h2").html($(this).attr("data-titulo"));

		if($(this).attr("data-conteudo")){
			var conteudo = eval($(this).attr("data-conteudo")).clone();
			conteudo.css({display: 'flex'});
			$(".pop_up .conteudo").html(conteudo);
		}

		var width = $(".overlay_pop .pop_up").outerWidth();
		var metadeWidth = -parseInt(width / 2);
		$(".overlay_pop .pop_up").css({
			marginLeft :  metadeWidth
		});
		
	});



	var youtube1 = '<iframe width="900" height="520" src="';
	var youtube2 = '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
	var linkfinal = '';	

	$(".video").on('click', function () {
		linkfinal = youtube1 + $(this).attr('data-youtube') + youtube2;
		$(".overlay_pop .conteudo").html(linkfinal);
		$(".overlay_pop .header h2").html($(this).attr('data-titulo'));
		$(".overlay_pop").show();

		var width = $(".overlay_pop .pop_up").outerWidth();
		var metadeWidth = -parseInt(width / 2);
		$(".overlay_pop .pop_up").css({
			marginLeft :  metadeWidth
		});

	});

	$(".overlay_pop").on('click', function (event) {
		if(event.target.classList.contains("overlay_pop") || event.target.parentNode.classList.contains("fechar")){
			$(".overlay_pop .conteudo").html('');
			$(".overlay_pop").hide();
			$('body').removeClass("open");
		}
	});

});