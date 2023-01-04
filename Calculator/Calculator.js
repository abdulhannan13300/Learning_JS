var zero = document.getElementById('0')
var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')

var add = document.getElementById('+')
var subtract = document.getElementById('-')
var multiply = document.getElementById('*')
var divide = document.getElementById('/')
var equalTo = document.getElementById('=')
var clear = document.getElementById('C')

var calculator = document.getElementById('calc-wrapper')
var input = document.getElementById('input-area')

var inputString = ''
document.body.addEventListener('keypress', function(event) {
    var key = event.key
    
    if (key === '1'|| key=='2'|| key=='3'|| key=='4'|| key=='5'|| key=='6'|| key=='7'|| key=='8'|| key=='9'|| key=='0') {
        inputString += key
        input = inputString
    } 
    else if(key==='+'){
      inputString+=key
      input.innerText=inputString
 }
 else if(key==='-'){
    inputString+=key
    input.innerText=inputString
}
else if(key==='*'){
    inputString+=key
    input.innerText=inputString
}
else if(key==='/'){
    inputString+=key
    input.innerText=inputString
}
else if(key==='c'|| key==='C'){
    inputString=''
    input.innerText=inputString
}
else if(key==='='|| key==='Enter'){
    inputString=eval(inputString)
    input.innerText=inputString
}
})