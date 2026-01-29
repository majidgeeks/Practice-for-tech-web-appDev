
// var arr = [];

// var inp1 = document.getElementById('aa')
// var inp2 = document.getElementById('bb')
// var inp3 = document.getElementById('cc');

// function data() {
//     console.log('inp1.value',inp1.value)
//     console.log('inp2.value',inp2.value)
//     console.log('inp3.value',inp3.value)

//     arr.push(inp1.value, inp2.value)

//     console.log(arr)

// }



function submit() {
  var studentArr = JSON.parse(localStorage.getItem("stdData")) || [];
  var name1 = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var roll_num = document.getElementById("rollNum").value;

  var student = {
    stdName: name1,
    phone: phone,
    email: email,
    roll_num: roll_num,
  };

  studentArr.push(student);
  console.log("studentArr", studentArr);

  var finalData = JSON.stringify(studentArr);
  localStorage.setItem("stdData", finalData);
}

function getData() {
  var get = localStorage.getItem("stdData");
//   console.log('get',get)
  var parseValue = JSON.parse(get);
  console.log("parseValue", parseValue);
//   var displayName = '';
//   var displayPhone = '';
//   var displayEmail = '';
//   var displayRoll = '';
 var div = document.querySelector('div');
 div.innerHTML = "";

   parseValue.forEach((std, index) => {
   div.innerHTML += `
    <p>
     ${index + 1} | 
     ${std.stdName} |
     ${std.phone} |
     ${std.email} | 
     ${roll_num}
    </p>
   `;    
 
  })

//   var pName = document.getElementById('pName')
//   var pPhone = document.getElementById('pPhone')
//   var pEmail = document.getElementById('pEmail')
//   var pRollNum = document.getElementById('pRollNum')

//   pName.innerHTML = displayName;
//   pPhone.innerHTML = displayPhone;
//   pEmail.innerHTML = displayEmail;
//   pRollNum.innerHTML = displayRoll;
  

}


