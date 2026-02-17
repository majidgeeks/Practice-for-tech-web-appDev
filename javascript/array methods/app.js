// var students = ["Ali", "Ahmed", "Sara"];

// let studentCheck = (str) => {
//     let newStr = str.toLowerCase();
//     for(let i = 0; i < students.length; i++){
//         if(students[i].toLowerCase().includes(newStr)){
//             console.log('aya hai')
//             break;
//         }else{
//             console.log('nahi aya');
//             break;
            
//         }
//     }
// };

// studentCheck('wasi')

// var students = ["Ali", "Ahmed", "Sara"];

// let check = () => {
//    let checker = students.map((data, index) => {
//       return index
//    })

//    return checker;
// }

// console.log(check());


// var students = ["Ali", "Ahmed", "Sara"];

// let data = [
//     {
//         name : "Ali",
//         age : 30,
//         id : 1
//     },
//     {
//         name : "Ahmed",
//         age : 35,
//         id : 2
//     },
//     {
//         name : "Sara",
//         age : 25,
//         id : 3
//     },
// ]

// let filteration = () => {
//     let checking = data.filter((person) => {
//       return person.age < 35;
//     })
//     return checking;
// };

// console.log(filteration());

// let data = [
//     {
//         name : "Ali",
//         age : 30,
//         id : 1
//     },
//     {
//         name : "Ahmed",
//         age : 35,
//         id : 2
//     },
//     {
//         name : "Sara",
//         age : 25,
//         id : 3
//     },
// ]

// let finding = () => {
//     let checking = data.find((person) => {
//        return person.age < 35;
//     })

//     return checking;
// };

// console.log(finding());



// let data = [
//     {
//         name : "Ali",
//         age : 30,
//         id : 1
//     },
//     {
//         name : "Ahmed",
//         age : 35,
//         id : 2
//     },
//     {
//         name : "Sara",
//         age : 25,
//         id : 3
//     },
// ];

//  data.forEach((person) => {
//    console.log(person);
   
// })

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let cal = numbers.reduce((acc, current) => {
// //    console.log(acc + current);
//    return acc * current
// })

// console.log(cal)

 
//  let nums = [10, 3, 5, 9];

//  let sorting = nums.sort((a, b) => {
//    return a + b
//  });

//  console.log(sorting)


// var obj1 = { name: "Ali", age: 18, course: 'Ui Ux' };
// var obj2 = { course: "Web Development" };

// var result = Object.assign(obj1, obj2);

// console.log(result);


// var student = {
//   name: "Ali",
//   age: 18
// };

// // console.log(Object.keys(student));

// console.log(Object.values(student));




// Object.freeze(student)

// student.age = 20;

// console.log(student);



var student = {
  name: "Ali",
  age: 18
};

let seting = Object.entries(student);

console.log(seting)

