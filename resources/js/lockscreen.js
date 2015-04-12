$(function() {

	var lights = $('.lock-lights');
	var media = $('.lock-media');
	var hvac = $('.lock-hvac');


	lights.click(function() {
		lights.html('<i class="fa fa-spin fa-spinner"></i>');
		setTimeout(function() {

			lights.html('<i class="glyphicon glyphicon-ok"></i>');
			setTimeout(function() {
				lights.html('<i class="fa fa-lightbulb-o"></i>');
			}, 700);
		}, 450);
	})


	media.click(function() {
		media.html('<i class="fa fa-spin fa-spinner"></i>');
		setTimeout(function() {

			media.html('<i class="glyphicon glyphicon-ok"></i>');
			setTimeout(function() {
				media.html('<i class="fa fa-music"></i>');
			}, 700);
		}, 450);
	})


	hvac.click(function() {
		hvac.html('<i class="fa fa-spin fa-spinner"></i>');
		setTimeout(function() {

			hvac.html('<i class="glyphicon glyphicon-ok"></i>');
			setTimeout(function() {
				hvac.html('<i class="fa fa-cloud"></i>');
			}, 700);
		}, 450);
	})


});