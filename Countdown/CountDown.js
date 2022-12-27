var countdownElement = document.getElementById("countdown");
var bgImg = document.getElementById("back-img");

var initialCountdownVal = countdownElement.innerHTML;

setInterval(function(){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal-1 : 0;
    countdownElement.innerHTML = initialCountdownVal;
    countdownElement.style.fontSize = initialCountdownVal * 100 + "px"

    bgImg.style.width = initialCountdownVal * 10 + "%"

},1000)