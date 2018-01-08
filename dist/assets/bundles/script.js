(function ($) {

	$(function () {});

	$(window).load(function () {});

	$(document).ready(function () {

		var timeoutId;

		$('#ul_slider li img').click(function () {
			var imgbg = $(this).attr('src');
			//console.log(imgbg);
			$('#bg').css({ backgroundImage: "url(" + imgbg + ")" });
		});

		$('a.fa-chevron').click(function () {
			$('.content_about').toggle();
			return false;
		});

		//When clicked on Pause
		$('#pause').click(function () {

			//Clear timeout
			clearTimeout(timeoutId);

			//Hide Pause and show Play
			$(this).hide();
			$('#play').show();
		});

		//When clicked on Play
		$('#play').click(function () {

			//Start slide image
			//slideImage(0);
			//Hide Play and show Pause
			$(this).hide();
			$('#pause').show();
		});
	});
})(jQuery);