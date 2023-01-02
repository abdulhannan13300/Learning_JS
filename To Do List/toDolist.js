var list = document.getElementById('todo-list')
var btnAdd = document.getElementById('add-btn')
var input = document.getElementById('input')

// It will trigger and store the text that we enter in the input box 
var inputValue = ''
input.addEventListener('input',function(){
        inputValue = input.value;
});

//It will trigger when an ENTER key is pressed and will store the 
// task from the input box then will call the function. 
input.addEventListener('keypress',function(e){
    var inputValue = input.value;
    if (e.key == 'Enter') {
        addListItem();
    }
});



function addListItem() {
    
    // The function will validate the condition for the empty text box.
    if(inputValue !== '' && inputValue !== undefined && inputValue !== null){
        
        //Create an Element snd then create the textnode and will append it to the parent 
        var newListElement = document.createElement('li');
        var textNode = document.createTextNode(inputValue);
        newListElement.appendChild(textNode);
        newListElement.id = "item" + (list.childElementCount + 1);
        list.appendChild(newListElement);
        
        input.value = ''
        inputValue = ''
        input.focus();
    } else {
        alert('Please enter a valid TODO item');
    }
}

// It will trigger when we click the Add Item Button and will store the 
// task from the input box then will call the function. 
btnAdd.addEventListener('click', addListItem)

