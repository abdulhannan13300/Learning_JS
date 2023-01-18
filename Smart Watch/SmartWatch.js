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

