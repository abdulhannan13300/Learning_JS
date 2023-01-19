var blackBtn = document.getElementById('color-black')
var redBtn = document.getElementById('color-red')
var blueBtn = document.getElementById('color-blue')
var purpleBtn = document.getElementById('color-purple')
var pinkBtn = document.getElementById('color-pink')
var timeBtn = document.getElementById('time-btn')

var hearRateBtn = document.getElementById('heartrate-btn')
var heartRate = document.getElementById('heart-rate')
var timeText = document.getElementById('time-text')

var watch = document.getElementById('watch')
blackBtn.addEventListener('click',function(){
    watch.src = "BlackWatch.png"
});
redBtn.addEventListener('click',function(){
    watch.src = "RedWatch.png"
});

blueBtn.addEventListener('click',function(){
    watch.src = "BlueWatch.png"
});
pinkBtn.addEventListener('click',function(){
    watch.src = "PinkWatch.png"
});
purpleBtn.addEventListener('click',function(){
    watch.src = "PurpleWatch.png"
});
function time() {
    heartRate.style.display = "none";

    if(timeText.classList.contains('hide')) {
        timeText.classList.remove('hide')
    } else {
        timeText.classList.add('hide')
    }
  

    setInterval(function() {
        var date = new Date();
        var sec = date.getSeconds();
        var min = date.getMinutes();
        var hrs = date.getHours();
        timeText.textContent = hrs + ":" + min + ":" + sec
    },1000);
}

function heartMeter(){
    if(timeText.classList.contains('show')){
        timeText.classList.add('hide')
    } 

    if (heartRate.style.display == "block") {
            heartRate.style.display = "none";
    }else{
        heartRate.style.display = "block";

    }
}


timeBtn.addEventListener('click',time)
hearRateBtn.addEventListener('click', heartMeter)
