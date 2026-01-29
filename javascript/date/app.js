

var dob = new Date(prompt(`provide dob in '28, july 1988' format` ));
var getT = dob.getTime();
console.log('getT',getT)

var today = new Date();
var todayT = today.getTime();
console.log('todayT',todayT)

var minus = todayT - getT;
console.log('minus',minus)

var calAge =Math.floor(minus / (1000 * 60 * 60 * 24 * 365));
console.log('calAge',calAge)