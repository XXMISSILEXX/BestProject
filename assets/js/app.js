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
      alert("Vui lòng nhập tên!");
  }
  if (u.length > 0 && u.length < 5) {
      alert("Tên đăng nhập phải trên 5 ký tự!");
      return false;
  }
  if (a == "") {
      alert("Vui lòng nhập mật khẩu!");
      return false;
  }
  if (b == "") {
      alert("Vui lòng nhập lại mật khẩu!");
      return false;
  }
  if (a != b) {
      alert("Xin hãy nhập đúng mật khẩu!");
      return false;
  }
  else {
      alert("Bạn đã đăng ký thành công!");
  }
}