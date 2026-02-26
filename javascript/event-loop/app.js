// Test variables in different contexts
// let globalVar = 'I am global';
// const globalNum = 42;

// function outerFunction(param1) {
//     let outerVar = 'I am in outer function';
//     const outerConstant = 100;
    
//     function innerFunction(param2) {
//         let innerVar = 'I am in inner function';
//         const innerConstant = 200;
        
//         console.log('Variables in inner function:');
//         console.log('globalVar:', globalVar);
//         console.log('outerVar:', outerVar);
//         console.log('innerVar:', innerVar);
//         console.log('param1:', param1);
//         console.log('param2:', param2);
        
//         return innerVar + ' - ' + outerVar;
//     }
    
//     return innerFunction('hello inner');
// }

// console.log('Starting execution...');
// let result = outerFunction('hello outer');
// console.log('Result:', result);



let str1 = 'karachi';

setTimeout(() => {
   console.log('i am setTimeOut one');
}, 1000);


setTimeout(() => {
 console.log('i am setTimeOut Two');
},0);

let prom = new Promise((resolve, reject) => {
   resolve('promise response');
});

prom.then((res) => console.log(res) )
.catch((err) => console.log(err));

console.log('str1',str1)