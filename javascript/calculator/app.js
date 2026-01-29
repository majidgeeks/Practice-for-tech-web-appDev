function press(value) {
var btnValue = document.getElementById('display').value += value;
console.log('btnValue',btnValue);

}


function calculate() {
var display = document.getElementById('display');
display.value = eval(display.value);
}


function clearDisplay() {
document.getElementById('display').value = '';
}