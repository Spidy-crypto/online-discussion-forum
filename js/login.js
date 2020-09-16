document.getElementById("loginform").onsubmit = login;
function login(e) {
    e.preventDefault();
    let uname = document.getElementById("username");
    let pass = document.getElementById("password");	
    if (uname.value != "admin" || pass.value != "admin") {
        swal("Try again!", "Invalid Username or Password", "warning");
    } else {
        document.getElementById("loginform").submit();
    }
}
