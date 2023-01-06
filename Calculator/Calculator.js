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
    // alert("clicked")
    var key = event.key
     console.log(key)

    if (key === '1'|| key=='2'|| key=='3'|| key=='4'|| key=='5'|| key=='6'|| key=='7'|| key=='8'|| key=='9'|| key=='0') {
        inputString += key
        input.innerHTML = inputString
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


zero.addEventListener('click',function(){
    inputString+='0'
    input.innerText=inputString
})

one.addEventListener('click',function(){
    inputString+='1'
    input.innerText=inputString
   })


two.addEventListener('click',function(){
    inputString+='2'
    input.innerText=inputString
})   

three.addEventListener('click',function(){
    inputString+='3'
    input.innerText=inputString
   })

four.addEventListener('click',function(){
    inputString+='4'
    input.innerText=inputString
})   

five.addEventListener('click',function(){
    inputString+='5'
    input.innerText=inputString
})

six.addEventListener('click',function(){
    inputString+='6'
    input.innerText=inputString
   })

seven.addEventListener('click',function(){
    inputString+='7'
    input.innerText=inputString
})

eight.addEventListener('click',function(){
    inputString+='8'
    input.innerText=inputString
   })

nine.addEventListener('click',function(){
    inputString+='9'
    input.innerText=inputString
})

clear.addEventListener('click',function(){
    inputString=''
    input.innerText=inputString
   })

divide.addEventListener('click',function(){
    inputString+='/'
    input.innerText=inputString
})

add.addEventListener('click',function(){
    inputString+='+'
    input.innerText=inputString
})   

subtract.addEventListener('click',function(){
    inputString+='-'
    input.innerText=inputString
})

multiply.addEventListener('click',function(){
    inputString+='*'
    input.innerText=inputString
})   

equalTo.addEventListener('click',function(){
    inputString=eval(inputString)
    input.innerText=inputString
})
