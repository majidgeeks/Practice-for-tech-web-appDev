// function Plan(name, price, space, transfer, pages, discountMonths) {
// this.name = name;
// this.price = price;
// this.space = space;
// this.transfer = transfer;
// this.pages = pages;
// this.discountMonths = discountMonths;
// this.calcAnnual = function (percentIfDisc) {
// var bestPrice = this.price;
// var currDate = new Date();
// var thisMo = currDate.getMonth();
// for (var i = 0; i < this.discountMonths.length; i++) {
//   if (this.discountMonths[i] === thisMo) {
//     bestPrice = this.price * percentIfDisc;
//     break;
//   }
//     }
//     return bestPrice * 12;
//   };
// };


// var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [9, 7]);
// var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
// var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);

// console.log(p1);
// console.log(p2);
// console.log(p3);



// function Plan(name, price, space, transfer, pages, discountMonths) {
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.transfer = transfer;
//   this.pages = pages;
//   this.discountMonths = discountMonths;
//   this.calcAnnual = function(percentIfDisc) {
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();
//     console.log('thisMonth',thisMonth)
//     let discount;
//     for(let i = 0; i < this.discountMonths.length; i++){
//       if(this.discountMonths[i] === thisMonth){
//         console.log(true);
//          discount = this.price * percentIfDisc;
//          console.log('discount',discount);
         
//         break;
//       }
//     }
//      this.price = this.price - discount ;
//      return  this.price * 12;
//   }
// };

// var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [1, 7], 0.10);

// console.log('p1',p1);
// // console.log('p1.calcAnnual(0.10)',p1.calcAnnual(0.10));

// // var gotTheProperty = p1.hasOwnProperty(price)

// // console.log(gotTheProperty);


// let obj = {
//   name : 'hamza',
//   clss : 5,
// };

// for(let prop in obj){
//   // console.log(obj[prop]);
//   if(prop !== 'roll'){
//     obj.roll = 123;
//   }
// };

// console.log('obj',obj);


// let hasProp = 'name' in obj;
// console.log(hasProp);

// console.log(obj.hasOwnProperty('name'));

//  Spread in object

// let user = {
//   name: "Majid",
//   age: 22
// };

// let updatedUser = {
//   ...user,
//   city: "Karachi"
// };

// console.log(updatedUser);


//  Object Override Example (Very Important )

// let obj = { name: "Ali", age: 20 };

// let newObj = { 
//   ...obj,
//   age: 25 
// };

// console.log(newObj);


// let mySet = new Set();

// console.log('mySet',mySet);


// let numbers = new Set([1, 2, 3, 3, 4]);

// console.log(numbers);


// let s = new Set();

// s.add(10);
// s.add(20);
// s.add(10); // duplicate

// console.log(s);


// let arr = [1, 2, 2, 3, 4];

// let uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);













