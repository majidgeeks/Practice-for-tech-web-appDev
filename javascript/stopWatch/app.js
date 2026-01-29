
// var miliSec = 0;
// var sec = 0;
// var minute = 0;
// var hour = 0;

// var miliSecond = document.getElementById('miliSec');
// var Second = document.getElementById('second');
// var minutes = document.getElementById('minute');
// var hours = document.getElementById('hour');
// var inter;

// function start() { 
//     var inter = setInterval(function(){
//         miliSec++
//         miliSecond.innerHTML = miliSec; 
//         if(miliSec >= 100){
//             sec++;
//             Second.innerHTML = sec;
//             miliSec = 0;
//         }
//         else if(sec >= 60){
//             minute++;
//             minutes.innerHTML = minute;
//             sec = 0;
//         }
//         else if(minute >= 60)
//             hour++;
//             hours.innerHTML = hour;
//     }, 10);
// }

// // start();




var miliSec = 0;
var sec = 0;
var minute = 0;
var hour = 0;

var miliSecond = document.getElementById('miliSec');
var second = document.getElementById('second');
var minutes = document.getElementById('minute');
var hours = document.getElementById('hour');
var inter;

function start() {
    inter = setInterval(function() {
        miliSec++;
        miliSecond.innerHTML = miliSec;
        if(miliSec >=100){
            sec++;
          second.innerHTML = sec;
          miliSec = 0
        }
        if(sec >= 60){
          minute++;
          minutes.innerHTML = minute;
          sec = 0;
        }
        if(minute >= 60){
            hour++;
            hours.innerHTML = hour;
            minute = 0;
        }
    },10);

}

function stop() {
 clearInterval(inter);
}


// var miliSec = 0;
// var sec = 0;
// var minute = 0;
// var hour = 0;

function res() {
 clearInterval(inter);
    miliSecond.innerHTML = 0;
    second.innerHTML = 0;
    minutes.innerHTML = 0;
    hours.innerHTML = 0;
}

