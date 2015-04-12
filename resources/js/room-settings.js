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

			navbar.find('.page-title').text(notifyParam.replace("_", " "));
			document.title = notifyParam.replace("_", " ") + "Settings";
	}

});