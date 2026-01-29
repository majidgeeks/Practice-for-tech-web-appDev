
// to do application

var ul = document.getElementById('ul');

function addToDo() {
    var input = document.getElementById('input');
    var text = document.createTextNode(input.value);
    var li = document.createElement('li');
    li.appendChild(text);
    ul.appendChild(li);
    input.value = '';
    
    // create delete btn 
    
    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'dlt';
    deleteBtn.onclick = function() {
        deleteBtn.parentElement.remove()
    }
    li.appendChild(deleteBtn);
    
    
//     // create edit btn 
    
    var editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.className = 'edt';
    editBtn.onclick = function(){
        var newValue = prompt('enter new', li.childNodes[0].nodeValue);
        li.childNodes[0].nodeValue = newValue;
    }
    li.appendChild(editBtn);
    
//     // create delete all btn;
     

};

function deleteAll() {
    ul.innerHTML = '';
}
