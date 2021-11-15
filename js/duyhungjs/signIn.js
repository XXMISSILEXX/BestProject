        var check_username = /^[A-Za-z0-9]{5,20}$/;
		var check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;	
		var check_password_repeat = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;	

		function checknull(txt){
			if(txt.value.length==0)
				return true;
			else
				return false;
		}
		function StringMatch(txt,reg){
			return reg.test(txt.value)
		}	
		function validform(f){

				if(checknull(f.username))
				{
					alert('Username must be not null');
					f.username.focus();
					return;
				}

				if(checknull(f.password))
				{
					alert('Password must be not null');
					f.password.focus();
					return;
				}

				if(!StringMatch(f.username,check_username)){
					alert("Username must be more than 5 characters");
					f.username.focus();
					return;
				}
				if(!StringMatch(f.password,check_password)){
					alert("Password must contain all characters (a,0,@,...");
					f.password.focus();
					return;
				}
				alert('Logged in successfully');
		}