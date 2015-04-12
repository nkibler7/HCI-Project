$(function() {

	$('.room-row').click(function() {
		var t = $(this);
		var location = t.children().children().text();

		t.addClass('clicked');

		setTimeout(function() {
			window.location.href = 'room-settings.html?room=' + location.replace(" ", "_");
		}, 500);
	});

});