// let test = () => {
//     let para = document.getElementsByTagName('p');
//     // let firstPara = 
//     // let second = para[1];
//     // let third = para[2]
//     // // console.log('para',para);
//     // console.log('firstPara',firstPara)
//     // console.log('firstPara',second)
//     // console.log('firstPara',third)

//     // for(let i = 0; i < para.length; i++){
//     //     if(para[i].innerHTML.includes('hello')){
//     //         para[i].style.color = 'blue';
//     //     }
//     // }

   


// } 

// test();


// let test = () => {
//     let divs = document.getElementsByTagName('div');
//     let first = divs[0];
//     let childs = first.childNodes[0];
//     // for(let i = 0; i < childs.length; i++){
//     //     console.log(childs[i].innerHtml);
//     // }
//     console.log(childs)
// }

// test();

// let para = document.querySelector('p');
// console.log(para.innerHTML)

// let para = document.querySelectorAll('p');
// console.log(para[0].innerHTML);

// let div = document.getElementById('div');
// let p = div.getElementsByTagName('p');
// console.log(p[0].innerHTML)


// let af = document.childNodes;
// let ae = af[1].childNodes[1].childNodes
// console.log(ae)


// let parent = document.getElementById('div');
// let firstPara = parent.firstElementChild
// // let node = firstChild.nodeValue;
// console.log(firstPara.innerText)

// let target = document.getElementById('p1');
//  target.setAttribute('class','sky');
// let getAtt = target.getAttribute('class')
// console.log(getAtt)

// let target = document.getElementById('p1');
// let nodeList = target.childNodes;
// console.log(nodeList[0].nodeType);

// let div = document.getElementById('div2');
// console.log(div.nodeType)


//  var d = document.getElementById("humpty");
//  let childNodes = d.childNodes;
//  let counter = 0;

//  for(let i = 0; i < childNodes.length; i++){
//     if(childNodes[i].nodeType === 1){
//         counter++;
//     };
//     console.log('counter',counter)
//     if(counter == 2){
//         childNodes[i].innerHTML = 'hello guys';
//         break;
//     }
//  };

//  for(let i = 0; i < childNodes.length; i++){
//     console.log(childNodes[i])
//  }


//  var d = document.getElementById("humpty");
//  console.log(d.firstChild)


// let target = document.getElementById('humpty');
// // console.log(target.previousElementSibling)
// // console.log(target.nextElementSibling)
// let child = target.firstChild;
// let nameNode = child.nodeName;
// // console.log(nameNode)
// console.log(child.nodeValue)

// let li = document.getElementsByTagName('li');
// console.log(li)


// let parent = document.getElementById('ul');
// let childList = parent.childNodes
// console.log(childList)


// let p1 = document.getElementById('p1').attributes;
// console.log(p1[2].nodeValue)

//  var parentDiv = document.getElementById("div1");
//  var newParagraph = document.createElement("p");
//  var t = document.createTextNode("Hello world!");
//  newParagraph.appendChild(t);
//  parentDiv.appendChild(newParagraph)
//  let nodeToRemove = parentDiv.childNodes[1];
// //  parentDiv.removeChild(nodeToRemove)
// //  let p1 = document.getElementById('p1');
// //  parentDiv.insertBefore(newParagraph, p1);
// console.log(parentDiv.childNodes)


//  var parentDiv = document.getElementById("div1").attributes;
// //  let attributesList = parentDiv.getAttribute("class");
//  console.log(parentDiv[0].nodeValue)

var fruits = ["apple", "banana", "mango", "orange"];

let check = fruits.includes('apple');
console.log(check)



