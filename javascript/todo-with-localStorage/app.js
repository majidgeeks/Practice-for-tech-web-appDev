// // console.log(Math.floor(Math.random() * 6 + 1));

// var image = document.getElementById('img');


// var image1 = "./images/dice 1.webp"
// var image2 = "./images/dice 2.webp"
// var image3 = "./images/dice 3.webp"
// var image4 = "./images/dice 4.webp"
// var image5 = "./images/dice 5.webp"
// var image6 = "./images/dice 6.webp"


// function dice() {
//     var num = Math.floor(Math.random() * 6) + 1;
     
//     if(num === 1){
//         image.src = image1
//     }
//     else if(num === 2){
//         image.src = image2
//     }
//     else if(num === 3){
//         image.src = image3
//     }
//     else if(num === 4){
//         image.src = image4;
//     }
//     else if(num === 5){
//         image.src = image5;
//     }
//     else if(num === 6){
//         image.src = image6;
//     }
// };


// var obj = {
//     name : 'majid',
//     age : 30
// };

// for(var val of obj){
//     document.write(val)
// }


//  var plan1 = {
//    name:   "Basic",
//    price: 3.99,
//    space: 100,
//    transfer: 1000,
//    pages: 10
//  };


//   function Plan(name, price, space, transfer, pages) {
//    this.name = name;
//    this.price = price;
//    this.space = space;
//    this.transfer = transfer;
//    this.pages = pages;
//  };

//  var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);

 
//  var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
//  var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
//  var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);
 
//  console.log(plan1.price)
//  console.log(plan2)
//  console.log(plan3)


// function data() {
//   console.log('func')
// var value = document.getElementById('inp').value
// console.log('value',value)
// }

// var ul = document.getElementById('ul');

// function todo() {
//   var input = document.getElementById('inp');
//   var li = document.createElement('li');
//   var text = document.createTextNode(input.value);
//   li.appendChild(text);

//   //dlt btn
//   var dlt = document.createElement('button');
//   dlt.innerText = 'dlt';

//   dlt.addEventListener('click', function() {
//     uraDo(this)
//   })

//   li.appendChild(dlt)
//   ul.appendChild(li);

//   // edit btn
//   var edit = document.createElement('button');
//   edit.innerHTML = 'Edit';
//   li.appendChild(edit);

//   edit.addEventListener('click', function(){
//     editFunc(this)
//   });


//   input.value = '';
// };

// function editFunc(e) {
//   var li = e.parentNode.firstChild.nodeValue
//   var newValue = prompt('enter new', li);
//    e.parentNode.firstChild.nodeValue = newValue 
// }

// function uraDo(e) {
//   e.parentNode.remove();
// }




// var ul = document.getElementById('ul');

// function todo() {
//   var inp = document.getElementById('inp');
//   var input;
//   if(inp.value.trim() !== ''){
//     input = inp.value;
//   }
//   var li = document.createElement('li');
//   li.innerText = input;
//   ul.appendChild(li);

//   // delete btn
//   var dlt = document.createElement('button');
//   dlt.innerHTML = 'Delete';
//   li.appendChild(dlt)

//   //edit btn
//   var edt = document.createElement('button');
//   edt.innerHTML = 'Edit';
//   li.appendChild(edt);

//   //add event listner
//   // dlt.addEventListener('click', function() {
//   //   dlte(this);
//   // });
//   dlt.setAttribute('onclick', 'dlte(this)')

//   edt.addEventListener('click', function() {
//     edit(this);
//   })

//   // dlt.setAttribute('class', 'dlt')
//   dlt.className = 'dlt'

//   inp.value = '';

// };

// function dlte(e) {
//   e.parentNode.remove();
// }

// function edit(e) {
//   var li = e.parentNode.firstChild.nodeValue;
//   var newValue = prompt('enter new', li);
//   e.parentNode.firstChild.nodeValue = newValue;
// }


// var todos = JSON.parse(localStorage.getItem('todos')) || [];
// var ul = document.getElementById('ul');
// var inp = document.getElementById('inp');

// function todo() {

//   if(inp.value.trim() === ''){
//     return
//   }

//   var obj = {
//     id : Date.now(),
//     text : inp.value,
//     completed : false
//   }

//   todos.push(obj);
//   localStorage.setItem('todos', JSON.stringify(todos));

//   inp.value = ''
//   renderTodos();
// };

// function renderTodos() {
//   ul.innerHTML = "";

//   for(let i = 0; i < todos.length; i++){
//     let id = todos[i].id;
//     console.log('id',id)
//     var li = document.createElement('li');
//     li.innerText = todos[i].text;

//     var dlt = document.createElement('button');
//     dlt.innerHTML = 'Delete';
//     dlt.addEventListener('click', function() {
//       deleteTodo(id)
//     })

//     var edt = document.createElement('button');
//     edt.innerHTML = 'Edit';
//     edt.addEventListener('click', function() {
//       editTodo(id)
//     })

//     li.appendChild(dlt);
//     li.appendChild(edt);
//     ul.appendChild(li);
//   }
// }

// function deleteTodo(id) {
//   console.log(id)
//   var newTodos = [];
//   for(var i = 0; i < todos.length; i++){
    
//     if(todos[i].id !== id){
//       newTodos.push(todos[i]);

//     }
//   }
//   todos = newTodos;
//   localStorage.setItem('todos', JSON.stringify(todos));
//   renderTodos();
// };

// function editTodo(id) {
//   for(var i = 0; i < todos.length; i++){
//     if(todos[i].id === id){
//       var updated = prompt('edit', todos[i].text);
//       if(updated !== null && updated.trim() !== ''){
//         todos[i].text = updated;
//       }
//     }
//   }
//   localStorage.setItem('todos', JSON.stringify(todos));
//   renderTodos();
// };

// renderTodos();



var todos = JSON.parse(localStorage.getItem('todos')) || [];
var ul = document.getElementById('ul');
var inp = document.getElementById('inp');

function todo() {
  if(inp.value.trim() === '') return;
  var obj = {
    id : Date.now(),
    text : inp.value,
    completed : false
  }
 
  todos.push(obj);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
};

function renderTodos() {
  ul.innerHTML = '';
  for(var i = 0; i < todos.length; i++){
    let id = todos[i].id;
    var li = document.createElement('li');
    li.innerHTML = todos[i].text; 
    ul.appendChild(li);

    //dlt btn
    var dlt = document.createElement('button');
    dlt.innerHTML = 'Delete';
    li.appendChild(dlt);
    dlt.addEventListener('click', function() {
      deleteTodos(id);
    })

    var edt = document.createElement('button');
    edt.innerHTML = 'Edit';
    li.appendChild(edt);
    edt.addEventListener('click', function() {
      editTodos(id);
    });
  }
};

function deleteTodos(id) {
  var newTodos = [];
  // console.log('id',id)
  for(let i = 0; i < todos.length; i++){
    // console.log('todos[i]',todos[i]);
    if(todos[i].id !== id){
     newTodos.push(todos[i]);
    };
  };
  todos = newTodos;
  renderTodos();
}

function editTodos(id) {
  console.log('id',id)
  for(let i = 0; i < todos.length; i++){
    if(todos[i].id === id){
      var updated = prompt('edit', todos[i].text);
      todos[i].text = updated;
    };
  };
  localStorage.setItem('todos', JSON.stringify(todos))
  renderTodos();
}

renderTodos();


