window.addEventListener('DOMContentLoaded', start);

function start() {

	// Open tab in background
	function openTabBackground(url) {
		if (url !== null && url !== '') {
			// Source: https://stackoverflow.com/questions/10812628/open-a-new-tab-in-the-background
			let anchor = document.createElement("a");
			anchor.href = url;
			let evt = document.createEvent("MouseEvents");
			//The tenth parameter of initMouseEvent sets ctrl key
			evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
				true, false, false, false, 0, null);
			anchor.dispatchEvent(evt);
		}
	}

	// Prevent submit forms
	let form_list = document.getElementsByTagName('form');

	for (let i = 0; i < form_list.length; i++) {
		form_list[i].addEventListener('submit', (event) => event.preventDefault());		
	}

	// Autoload notes
	if (!(localStorage.getItem('notes') == null)) {
		document.getElementById('notes').value = localStorage.getItem('notes');
	}else{
		// Create a default note
		localStorage.setItem('notes', 'https://www.google.com/');	
		document.getElementById('notes').value = localStorage.getItem('notes');			
	}

	// Autoload favorite URLs
	for (let i = 1; i <= 3; i++) {
		if (localStorage.getItem('favoriteurl'+i) != null) {
			document.getElementById('favoriteurl'+i).value = localStorage.getItem('favoriteurl'+i);
		}
	}

	// Save notes
	document.getElementById('buttonsavenotes').addEventListener('click', () => localStorage.setItem('notes', document.getElementById('notes').value));

	// Save update favorite URLs
	document.getElementById('buttonsaveall').addEventListener('click', function(){
		for (let i = 1; i <= 3; i++) {
			let url = document.getElementById('favoriteurl'+i).value;
			if (url !== null && url !== '') {
				localStorage.setItem('favoriteurl'+i, document.getElementById('favoriteurl'+i).value);
			}
		}
	});

	// Go to Buttons
	document.getElementById('buttongoto').addEventListener('click', function(event){
		let open_mode_value = document.getElementById('open_mode').selectedIndex;
		let url = document.getElementById('url').value;
		if ((open_mode_value === 1 || open_mode_value === 0) && url !== null) {
			openTabBackground(url)
		} else {
			if (open_mode_value === 2 && url !== null) {
				window.open(url, '_self');
			} else {
				if (open_mode_value === 3 && url !== null) {
					window.open(url, '_blank');
				}
			}
		}
	});

	document.getElementById('buttongoto1').addEventListener('click', function(event){
		openTabBackground(document.getElementById('favoriteurl1').value);
	});

	document.getElementById('buttongoto2').addEventListener('click', function(event){
		openTabBackground(document.getElementById('favoriteurl2').value);
	});

	document.getElementById('buttongoto3').addEventListener('click', function(event){
		openTabBackground(document.getElementById('favoriteurl3').value);
	});

}