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
		var check_phone = /^\([+]\d{2,4}\)[\s\.-]\d{3}[\s\.-]\d{3}[\s\.-]\d{3}$/;
		var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
		var check_username = /^[A-Za-z0-9]{1,20}$/;
		var check_subject = /^[A-Za-z]{1,40}$/;
		var check_message = /^[A-Za-z0-9]{1,2000}$/;

		function checknull(txt){
			if(txt.value.length==0)
				return true;
			else
				return false;
		}

		function isInteger(txt){
			if((!isNaN(txt.value)) && (parseInt(txt.value))===Number(txt.value))
				return true;
			else
				return false;
		}	

		function StringMatch(txt,reg){
			return reg.test(txt.value)
		}	
		function validform(f){
				if(checknull(f.fullname))
				{
					alert('Name must be not null');
					f.fullname.focus();
					return;
				}
				if(checknull(f.subject))
				{
					alert('Subject must be not null');
					f.subject.focus();
					return;
				}

				if(checknull(f.message))
				{
					alert('Message must be not null');
					f.message.focus();
					return;
				}
				
				if(!StringMatch(f.subject,check_subject)){
					alert("Subject is not valid");
					f.subject.focus();
					return;
				}
				
				if(!StringMatch(f.message,check_message)){
					alert("Message is not valid");
					f.message.focus();
					return;
				}
				
				if(!StringMatch(f.email,check_email)){
					alert("Email is not valid");
					f.email.focus();
					return;
				}
				if(!StringMatch(f.phone,check_phone)){
					alert('Phone is not valid');
					return;
				}
				alert('Sent to admin successfully');
		}