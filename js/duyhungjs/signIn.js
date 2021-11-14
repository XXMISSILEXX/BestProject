function validate() {
    var u = document.getElementById("login-username").value;
    var a = document.getElementById("login-password").value;
  
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
    else {
        alert("You have successfully login!");
    }
  }