$(document).ready(function() {

	// Open tab in background
	// Source: https://stackoverflow.com/questions/907634/is-this-how-you-define-a-function-in-jquery/907643
	$.openTabBackground = function(link){ 
		if (link !== null && link !== '') {
			// Source: https://stackoverflow.com/questions/10812628/open-a-new-tab-in-the-background
			let anchor = document.createElement("a");
			anchor.href = link;
			let evt = document.createEvent("MouseEvents");
			//The tenth parameter of initMouseEvent sets ctrl key
			evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
			                            true, false, false, false, 0, null);
			anchor.dispatchEvent(evt);
		}
	}

	// Prevent submit forms
	$('form').submit(function(event) {
		return false;
	});

	// Autoload notes
	if (!(localStorage.getItem('notes') == null)) {
		$('#notes').val(localStorage.getItem('notes'));
	}

	// Autoload favorite links
	for (let i = 1; i <= 3; i++) {
		if (localStorage.getItem('favoriteurl'+i) != null) {
			$('#favoriteurl'+i).val(localStorage.getItem('favoriteurl'+i));
		}
	}

	// Save notes
	$('#buttonsavenotes').click(function(event) {
		localStorage.setItem('notes', $('#notes').val());
	});

	// Save Update favorite links
	$('#buttonsaveall').click(function(event) {
		for (let i = 1; i <= 3; i++) {
			let link = $('#favoriteurl'+i).val();
			if (link !== null && link !== '') {
				localStorage.setItem('favoriteurl'+i, $('#favoriteurl'+i).val());
			}
		}
	});

	// Buttons Go to
	$('#buttongoto').click(function(event) {
		if ($("#open_mode").val() === '1' || $("#open_mode").val() === null) {
			$.openTabBackground($('#url').val());
		} else {
			if ($("#open_mode").val() === '2' && $('#url').val() !== null) {
				window.open($('#url').val(), '_self'); 
			} else {
				if ($("#open_mode").val() === '3' && $('#url').val() !== null) {
					window.open($('#url').val(), '_blank'); 
				}
			}
		}
	});

	$('#buttongoto1').click(function(event) {
		$.openTabBackground($('#favoriteurl1').val());
	});

	$('#buttongoto2').click(function(event) {
		$.openTabBackground($('#favoriteurl2').val());
	});

	$('#buttongoto3').click(function(event) {
		$.openTabBackground($('#favoriteurl3').val());
	});

});