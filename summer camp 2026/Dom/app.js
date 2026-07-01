// let head1 = document.getElementById('first').innerHTML;
// console.log('head1',head1)

// let custom = head1.innerHTML = 'Hello saylani'
// console.log('custom',custom)

// let bod = document.body
// console.log(bod);


let h1 = document.createElement('h6');
let inner = h1.innerHTML = 'Pakistan';
console.log(inner);

document.body.append(h1)


let p = document.createElement('p');
let pInner = p.innerHTML = 'Zindabad';
console.log(pInner);

document.body.append(p)

let inp = document.createElement('input');
document.body.append(inp);

let val = inp.value;

console.log(val);


