// import { htmlData, cssData, jsData } from "./data.js";


// let htmlBtn = document.getElementById("htmlBtn");

// htmlBtn &&
//   htmlBtn.addEventListener("click", () => {
//     localStorage.setItem("selectedQuiz", "html");
//     window.location.pathname = "./quiz.html";
//   });

// let cssBtn = document.getElementById("cssBtn");
// cssBtn &&
//   cssBtn.addEventListener("click", () => {
//     localStorage.setItem("selectedQuiz", "css");
//     window.location.pathname = "./quiz.html";
//   });

// let jsBtn = document.getElementById("jsBtn");
// jsBtn &&
//   jsBtn.addEventListener("click", () => {
//     localStorage.setItem("selectedQuiz", "js");
//     window.location.pathname = "./quiz.html";
//   });

//   let startQuiz = () => {
//      console.log('start func call');
     
//       let selectedQuiz = localStorage.getItem('selectedQuiz');
      
//       let quizArray;
//       if(selectedQuiz === 'html'){
//         quizArray = htmlData;
//       }else if(selectedQuiz === 'css'){
//         quizArray = cssData;
//       }else if(selectedQuiz === 'js'){
//         quizArray = jsData;
//       };
      
//       let quest = document.getElementById('quest');
//       let labelA = document.getElementById('labelA');
//       let labelB = document.getElementById('labelB');
//       let labelC = document.getElementById('labelC');
//       let labelD = document.getElementById('labelD');
//       let inp = document.getElementsByTagName('input');

//       let indexCount = 0;
//       let score = 0;
//       let marks = 0;

//       function showQuestion() {
//         quest.innerHTML = quizArray[indexCount].question;
//        let lA = labelA.textContent = quizArray[indexCount].A;
//        let lB = labelB.textContent = quizArray[indexCount].B;
//        let lC = labelC.textContent = quizArray[indexCount].C;
//        let lD = labelD.textContent = quizArray[indexCount].D;

//        console.log('lA, lB, lC, lD',lA, lB, lC, lD);
       
  
        
//         for(let i = 0; i < inp.length; i++){
//           if(inp[i].type == 'radio'){
//             inp[i].checked = false;
//           }  
//         }
        
//       };
      
//       showQuestion();
      
//       let nextBtn = document.getElementById('nextBtn');
//       nextBtn?.addEventListener('click', () => {

//         let selectedOption = null;
//         for(let i = 0; i < inp.length; i++){
//           if(inp[i].type === 'radio' && inp[i].name === 'option' && inp[i].checked){
//             selectedOption = inp[i].value;
//             break;
//           }
//         }

//         if(!selectedOption){
//           alert('please select an option');
//           return;
//         };

//         if(selectedOption === quizArray[indexCount].answer){
//           score++;
//           marks += 10; 
//         }
        
//         indexCount++;
//         console.log('indexCount',indexCount);
        
//         if(indexCount < quizArray.length){
//           showQuestion();
//         }else{
//           quest.innerHTML = `Quiz Completed! Your Score: ${score}/${quizArray.length} and you got ${marks} marks`;
//           for(let i = 0; i < inp.length; i++){
//             if(inp[i].type === 'radio') inp[i].parentElement.style.display = 'none';
//           }
//           nextBtn.style.display = 'none';
//         };

//     });
      
//   };

//   if(window.location.pathname.endsWith('quiz.html') ){
//     startQuiz();
//   };


import {htmlData, cssData, jsData} from './data.js';


let htmlBtn = document.getElementById('htmlBtn');
let cssBtn = document.getElementById('cssBtn');
let jsBtn = document.getElementById('jsBtn');
let quizArray;

    let quest = document.getElementById('quest');
    let labelA = document.getElementById('labelA');
    let labelB = document.getElementById('labelB');
    let labelC = document.getElementById('labelC');
    let labelD = document.getElementById('labelD');


 htmlBtn?.addEventListener('click', function() {
  localStorage.setItem('selectedQuiz', 'html');
  location.pathname = './quiz.html';
});


cssBtn?.addEventListener('click', function() {
  localStorage.setItem('selectedQuiz', 'css');
  location.pathname = './quiz.html';
});


jsBtn?.addEventListener('click', function() {
  localStorage.setItem('selectedQuiz', 'js');
  location.pathname = './quiz.html';
});

let startQuiz = () => {
  console.log('start func call');

let inp = document.getElementsByTagName('input');
  
  let selectedQuiz = localStorage.getItem('selectedQuiz');

  if(selectedQuiz === 'html'){
    quizArray = htmlData;
  }else if(selectedQuiz === 'css'){
    quizArray = cssData;
  }else if(selectedQuiz === 'js'){
    quizArray = jsData;
  };

  console.log('dataArray',quizArray);
  

  console.log(localStorage.getItem('selectedQuiz'));
  let index = 0;
  let score = 0;
  let marks = 0;

  let showQuestion = () => {

    quest.textContent = quizArray[index].question;
    labelA.textContent = quizArray[index].A;
    labelB.textContent = quizArray[index].B;
    labelC.textContent = quizArray[index].C;
    labelD.textContent = quizArray[index].D; 

    for(let i = 0; i < inp.length; i++){
      if(inp[i].type === 'radio'){
        inp[i].checked = false;
      }
    }

  };

  showQuestion();

  let nextBtn = document.getElementById('nextBtn');
  nextBtn?.addEventListener('click', () => {
    let selectedOption = null;
    for(let i = 0; i < inp.length; i++){
      if(inp[i].type === 'radio' && inp[i].name === 'option' && inp[i].checked){
        selectedOption = inp[i].value;
      };
    };

    if(!selectedOption){
      alert('plz select an option');
      return;
    };

    if(selectedOption === quizArray[index].answer){
      score++;
      marks += 10;
    };
     index++;

     if(index < quizArray.length){
       showQuestion();
     }else{
      quest.innerHTML = `quiz completed your score is ${score}/${quizArray.length} and marks ${marks}`;
      for(let i = 0; i < inp.length; i++){
        if(inp[i].type === 'radio' && inp[i].name === 'option'){
          inp[i].parentElement.style.display = 'none';
        }
      }
      nextBtn.style.display = 'none';
     };
  })
};

if(window.location.pathname.endsWith('quiz.html')){
  startQuiz(); 
}
