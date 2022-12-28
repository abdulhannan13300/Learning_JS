var heading = document.getElementById('heading');
var btn = document.getElementById('btn')


btn.addEventListener('click',function(){
    if(heading.classList.contains('big')) {
        heading.classList.remove('big');
    }else{ 
        heading.classList.add('big');
    }
});