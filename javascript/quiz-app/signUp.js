let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");
message.style.display = "none";

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  // console.log(email.value, password.value);
  if (email.value.trim() === "" || password.value.trim() === "") {
    message.style.display = "block";
    return;
  }else{
      message.style.display = "none";
      let user = {
        userEmail : email.value,
        userPass : password.value,
      }
      localStorage.setItem('users',JSON.stringify(user));
      location.pathname = './login.html';
  };
});
