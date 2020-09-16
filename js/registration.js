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