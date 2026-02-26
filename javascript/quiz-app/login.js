let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginMessage = document.getElementById("loginMessage");
loginMessage.style.display = "none";

let users = JSON.parse(localStorage.getItem("users")) || [];

console.log(users);

let loginBtn = document.getElementById("loginBtn");

loginBtn &&
  loginBtn.addEventListener("click", () => {
    console.log("login btn");
    let isUser = false;
    if (loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
      loginMessage.style.display = "block";
      return;
    }
    loginMessage.style.display = "none";

    if(loginEmail.value === users.userEmail && loginPassword.value === users.userPass){
        isUser = true;
    }
    // for (let i = 0; i < users.length; i++) {
    //   if (
    //     loginEmail.value === users[i].userEmail &&
    //     loginPassword.value === users[i].userPass
    //   ) {
    //     isUser = true;
    //     console.log(loginEmail.value, loginPassword.value);
    //     break;
    //   }
    // }

    isUser ? (window.location.href = "./home.html") : null;

    if (!isUser) {
      loginMessage.style.display = "block";
      loginMessage.innerText = "Invalid email or password";
    }
  });
