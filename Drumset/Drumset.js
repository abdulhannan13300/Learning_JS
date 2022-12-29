var audio = document.querySelectorAll("audio");
var btn = document.querySelectorAll("button");
var buttonKeys = [65,83,68,70,71,72,74,75,76];

document.body.addEventListener('keydown', function(event) {
	
	for (let i=0; i<buttonKeys.length; i++) {
		if (event.keyCode === buttonKeys[i]) { 
			btn[i].style.boxShadow = "1px 0px 3px #010b13";
			btn[i].style.transform = "scale(1.1)";
			audio[i].play();
	 		audio[i].currentTime = 0;
		}
	}
})

document.body.addEventListener('keyup', function(event) {

	for (let i=0; i<buttonKeys.length; i++) {
		if (event.keyCode === buttonKeys[i]) {
			btn[i].style.boxShadow = "";
			btn[i].style.transform = "scale(1.0)";
		}
	}
})