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

document.getElementById("regform").onsubmit = show;

function show(e) {

    let otp = Math.floor(Math.random() * 1000) + 1000;
    alert("Enter this as otp :- " + otp);
    e.preventDefault();
    let pass = document.getElementById('password');
    let repass = document.getElementById('repassword');
    if (pass.value != repass.value) {
        pass.value = "";
        repass.value = "";
        swal("Try again!", "Password and Confirm-password should be same", "error");
    } else {
        swal("Enter Your Otp ", {
            content: "input",
            placeholder: "Enter Otp"
        }).then((value) => {
            if (value == otp) {
                swal("Good Job", "You have successfully registered", "success").then(() => { document.getElementById("regform").submit() });
            } else {
                swal("", "Enter Correct Otp", "error");
            }
        });
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

function admin(){
	$(document).ready(function() {

		swal("To remove any User click on that row");
         
        $("#search").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".table tr2").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

        $("tbody tr").click(function(){
        	$(this).remove();
        });
    });
}