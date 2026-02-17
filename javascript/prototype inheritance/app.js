// Object.prototype.sum = function(a, b) {
//     return a + b;
// };

// // console.log(sum(12, 12));

// let student = {
//     fName : 'majid',
//     lName : 'hussain',

//     skill : function() {
//         console.log(`${this.fName} ${this.lName}`);
        
//     }
// };

// let student2 = Object.create(student);

// console.log(student2)

// let fruit = {
//    item1 : 'apple',
// };

// let vegetable = {
//     item2 : 'Gabbage',
//     __proto__: fruit
// };

// let dryFruit = {
//     item3 : 'Almond',
//     __proto__: vegetable
// };

// console.log(dryFruit.item1);

// let str = 'Hello';

// console.log(str.__proto__);


// let num2 = 10;

// console.log(num2.__proto__.__proto__);


let Cars = function(cName, cModal, color) {
    this.cName = cName,
    this.cModal = cModal,
    this.color = color
};

let myCar = new Cars('Civic', 2022, 'black');

// console.log(myCar);
// console.log(Cars('125', 2000, 'silver'));




