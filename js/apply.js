document.getElementById("regform").onsubmit = show;

function show(e) {
    e.preventDefault();
    var pass = document.getElementById('password');
    var repass = document.getElementById('repassword');
    if (pass.value != repass.value) {
        pass.value = "";
        repass.value = "";
        swal("Try again!", "Password and Confirm-password should be same", "error");
    } else {
        swal("Good Job!", "You are successfully reegistered", "success").then(() => { document.getElementById("regform").submit() });
    }
}
document.getElementById("loginform").onsubmit = login;

function login(e) {
    e.preventDefault();
    var uname = document.getElementById("username");
    var pass = document.getElementById("password");
    if (uname.value != "admin" || pass.value != "admin") {
        swal("Try again!", "Invalid Username or Password", "warning");
    } else {
        document.getElementById("loginform").submit();
    }
}

function summer() {
    $(document).ready(function() {
        $('#summernote').summernote();
    });
    $('#summernote').summernote({
        height: 300,
        minHeight: null,
        maxHeight: null,
        focus: true,
        placeholder: 'write here...'
    });
    
}