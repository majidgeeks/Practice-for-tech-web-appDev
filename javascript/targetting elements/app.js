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

let target = document.getElementById('p1');
 target.setAttribute('class','sky');
let getAtt = target.getAttribute('class')
console.log(getAtt)

