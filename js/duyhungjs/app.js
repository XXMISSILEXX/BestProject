const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  navigation.classList.add("show");
  nav.classList.add("show");
  document.body.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("show");
  nav.classList.remove("show");
  document.body.classList.remove("show");
});

function validate() {
  var u = document.getElementById("username").value;
  var a = document.getElementById("password").value;
  var b = document.getElementById("password-repeat").value;

  if(u == "") {
      alert("Please enter a name!");
  }
  if (u.length > 0 && u.length < 5) {
      alert("Username must be more than 5 characters!");
      return false;
  }
  if (a == "") {
      alert("Please enter a password!!");
      return false;
  }
  if (b == "") {
      alert("Please re-enter your password!");
      return false;
  }
  if (a != b) {
      alert("Please enter the correct password!");
      return false;
  }
  else {
      alert("You have successfully registered!");
  }
}