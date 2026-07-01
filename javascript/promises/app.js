// const promiseOne = new Promise((resolve, reject) => {
//    fetch('https://jsonplaceholder.typicode.com/todos/1');
//   resolve();
// //   console.log(response);
// });

// promiseOne.then((res) => {
// //  console.log('res',res);
//    res.json()
// }).then((data) => {
//   console.log(data);
  
// })
// .catch((error) => {
//  console.log('error',error); 
// })


// let asyncTask = new Promise((resolve, reject) => {
//    let user = false;
//    if(user){
//     resolve('Task completed')
//    }else{
//     reject('Task rejected')
//    };
// });

// asyncTask.then((response) => {
//  console.log('response',response);
// }).catch((error) => {
//  console.log(error);
// })


//   new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('ho gaya resolve')
//    }, 1000)
// }).then((res) => console.log(res))
// .catch((bhand) => console.log(bhand));


// let taskOne = new Promise((resolve, reject) => {
//     try{

//         let user = true;
//         setTimeout(() => {
//             user = true;
//         }, 1000);
//         if(user){
//             console.log('ho gaya kam');
//             resolve()
//         }else{
//             console.log('kam nahi hua');
//             reject();
//         }
//     }catch(err){
//         console.log('catch wala err',err);
        
//     }
// });

// taskOne.then((res) => {
//     return res
// })
// .catch((error) => {
//     return error
// })
// .finally(() => console.log('final chal gaya')
//  )


//    fetch('https://jsonplaceholder.typicode.com/todos')
//    .then((res) => res.json())
//    .then((data) => {
//     console.log(data);
//     let titles = data.map((dt) => {
//         return dt.completed;
//     })
//     console.log(titles);
//    }
//    )
//    .catch((error) => console.log('error',error))
//    .finally(() => console.log('final chal gaya'))


// let req = fetch('https://jsonplaceholder.typicode.com/todos/1');

// let test = async () => {
//   let response = await req;
// //   console.log(response);
//  let final = await response.json();
//  console.log(final);
   
// };

// test();



// let req = fetch('https://jsonplaceholder.typicode.com/todos/1');

// let test = () => {
//     let final;
//     setTimeout(() => {
//       final = req.json();
//     }, 5000);

//     setTimeout(() => {
//      console.log('final',final);
     
//     },6000);
// };

// test();
 

// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise resolve');
//     resolve();

// });

// promise1.then((response) => response )
// .catch((err) => err );


// const prom2 = new Promise((resolve, reject) => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1');
//   resolve();
// });

// prom2.then((response) => {
//   console.log(response);
//   response.json()
// })
// .then((data) => console.log(data))


// const promiseOne = new Promise((resolve, reject) => {
//    fetch('https://jsonplaceholder.typicode.com/todos/1');
//   resolve();
// });

// promiseOne.then((res) => {
// //  console.log('res',res);
//    res.json()
// }).then((data) => {
//   console.log(data);
  
// })
// .catch((error) => {
//  console.log('error',error); 
// })

// const myData = fetch('https://jsonplaceholder.typicode.com/todos');

// myData.then((res) => res.json('res',res))
// .then((data) => console.log('data',data.filter((d) => d.id < 50 ))
//  ).catch((error) => console.log(error)
//   )


// const task = new Promise((resolve, reject) => {
//     let user = true;
//     setTimeout(() => {
//       user = false;
//     },0);

//     if(user){
//       console.log('Kam ho gaya');
//       resolve();
//     }else{
//       console.log('Kam nahi hua');
//       reject();     
//      }
// });

// task.then((res) => res )
// .catch((err) => err )


// const task2 = async () => {
//    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//    const data = await res.json();
//    console.log(data);
   
// }

// task2()




let user = true;
console.log('user',user);

task2();

setTimeout(() => {
   console.log('set time out');   
},0)

new Promise((resolve, reject) => {
   resolve('chal gaya')
}).then((res) => console.log(res))
.catch((err) => console.log(err))


