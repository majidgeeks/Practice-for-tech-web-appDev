// function changeClr() {
//     alert("hello")
// }

// function changeTheme(inp) {
//     inp.style.backgroundColor = 'blue';
//     inp.style.color = 'white';
//     inp.style.width = '400px'
// }


// function test(e) {
//     // e.preventDefault();
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     console.log(email, password)
// }


//   function fillCity() {
    
// var cityName;   
// var zipEntered = document.getElementById("zip").value;
// switch (zipEntered) {
// case "123" :
// cityName = "Chicago";
// break;
// case "124" :
// cityName = "Omaha";
// break;
//    case "125" :  
// cityName = "Milwaukee";  
//  }
//   document.getElementById("city").value = cityName;
//  }


function readText() {
    let read = document.getElementById('para').innerText = 'Han bhai kahan ho sab';
    console.log(read)
    let btn =document.getElementById('btn');
    btn.style.display = 'none';
    let btn2 = document.getElementById('btn2');
    btn2.style.display = 'block';
}

function hideBtn() {
    let btn2 = document.getElementById('btn2');
    btn2.style.display = 'none';
    let read = document.getElementById('para').innerText = 'Bas kar do khelna perh lo';

}