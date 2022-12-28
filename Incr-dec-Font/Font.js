var btnFontInc = document.getElementById('btn-fontInc')
var btnFontDec = document.getElementById('btn-fontDec')

var heading = document.getElementById('heading')

var initialFontSize = window.getComputedStyle(heading).fontSize;
// initialFontSize = 34px
// It will take the length of the String and remove "px" from it. 
initialFontSize = parseInt(initialFontSize.substring(0,(initialFontSize.length - 2)));;
console.log(initialFontSize)
// Increamenting the Font size by 10 px
btnFontInc.onclick = function(){
    initialFontSize += 10;
    heading.style.fontSize = initialFontSize + "px";
}
// Decreamenting the font size by 10 px
btnFontDec.addEventListener('click',function() {
    initialFontSize -= 10;
    heading.style.fontSize = initialFontSize + "px";
});