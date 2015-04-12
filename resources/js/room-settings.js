function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(function() {

	var notifyParam = getParameterByName('room');
	var navbar = $('.navbar');
	if (notifyParam != '') {
		history.replaceState('', '', window.location.pathname);

			navbar.find('.page-title').html('<i class="fa fa-angle-left"></i>&nbsp;&nbsp;' + notifyParam.replace("_", " "));
			document.title = notifyParam.replace("_", " ") + " Settings";
	}

	$('.mode-select').click(function() {
		var t = $(this);
		t.siblings('.active').toggleClass('active');
		t.toggleClass('active');

		if (t.text() == "Manual") {
			$('.adaptive').parent().hide();
			$('.music-notif').attr('hidden', false);
		}
		if (t.text() == "Automatic") {
			$('.adaptive').parent().show();
			$('.music-notif').attr('hidden', true);
		}
	});

	$('.save-btn').click(function() {
		var t = $(this);
		t.html('<i class="fa fa-spin fa-spinner"></i>');
		t.attr('disabled', true);
		setTimeout(function() {
			t.removeAttr('disabled');
			t.html('<i class="fa fa-check"></i> Save');
		}, 500);
	});

	$('.revert-btn').click(function() {
		var t = $(this);
		t.html('<i class="fa fa-spin fa-spinner"></i>');
		t.attr('disabled', true);
		setTimeout(function() {
			t.removeAttr('disabled');
			t.html('<i class="fa fa-times"></i> Revert');
		}, 500);
	});
});