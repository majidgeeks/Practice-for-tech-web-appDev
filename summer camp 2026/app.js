// let num1 = +prompt('insert first number');
// let operator = prompt('insert operator');
// let num2 = +prompt('insert second number');
// let result;

// if(operator == 'x'){
//   result = num1 * num2
// }else if(operator == '+'){
//    result = num1 + num2
// }else if(operator == '-'){
//    result = num1 - num2
// }else if(operator == '/'){
//    result = num1 / num2
// }else{
//     result = 'please insert valid input '
// };

// document.write(result)


// marksheet

// let marks = +prompt('enter your marks');
// let grade;

// if(marks >= 90){
//   grade = 'A+'
// }else if(marks >= 80){
//   grade = 'A1'  
// }else if(marks >= 70){
//   grade = 'A'
// }else if(marks >= 60){
//   grade = 'B'  
// }else if(marks >= 50){
//   grade = 'C'  
// }else if(marks >= 40){
//   grade = 'D'  
// }else{
//     grade = 'Fail'
// }

// document.write('Grade is ' + grade)


let marksGot = +prompt('enter your marks');
let percentage = (marksGot * 100) / 1000 
document.write(percentage)