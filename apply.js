function show(argument) {
	var pass = document.getElementById('password');
	var repass = document.getElementById('repassword');
	if(pass.value != repass.value){
		alert("Password and confirm password not same");
	}
	else{
		var tags = document.getElementsByTagName('input');
		var fname = tags[0].value;
		var lname = tags[1].value;
		var email = tags[2].value;
		document.getElementById("abc").innerHTML = "First name is "+fname +"<br>Last name is "+lname+"<br>Email id is "+email;
	}
}
document.getElementById("loginform").onsubmit = login;
function login(e){
	e.preventDefault();
	var uname = document.getElementById("username");
	var pass = document.getElementById("password");
	if(uname.value != "admin" || pass.value != "admin"){
		alert("username and password must be admin");
	}
	else{
		document.getElementById("loginform").submit();
	}
}
