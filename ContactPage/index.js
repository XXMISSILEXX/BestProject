// Nav
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

// Fixed Nav
// const navBar = document.querySelector(".navigation");
// const navHeight = navBar.getBoundingClientRect().height;
// window.addEventListener("scroll", () => {
//   const scrollHeight = window.pageYOffset;
//   if (scrollHeight > navHeight) {
//     navBar.classList.add("fix-nav");
//   } else {
//     navBar.classList.remove("fix-nav");
//   }
// });

function check () {
      var name =document.forms.name.value;
      var email=document.forms.email.value;
      var phone=document.forms.phone.value;
      var sub=document.forms.subject.value;
      var mess=document.forms.message.value;
      if (name===null || name==='') {
        alert("Username can't be blank");
        document.forms.name.focus();
        return false;
      }
      if (email===null || email==='') {
        alert("Email can't be blank");
        document.forms.email.focus();
        return false;
      } 
      if (phone===null || phone==='') {
        alert("Phone can't be blank");
        document.forms.phone.focus();
        return false;
      }
      if (sub===null || sub==='') {
        alert("Subject can't be blank"); 
        document.forms.subject.focus();
        return false;
      }
      if (mess===null || mess==='') {
        alert("Message can't be blank");
        document.forms.message.focus();
        return false;
      }
    }