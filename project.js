let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

let successMessage = document.getElementById("successMessage");
let button = document.getElementById("registerBtn");

button.addEventListener("click", function() {

    // Clear old messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";
    successMessage.innerHTML = "";

    let valid = true;

    // Check name
    if (name.value == "") {
        nameError.innerHTML = "Name cannot be empty";
        valid = false;
    }

    // Check email
    if (email.value == "") {
        emailError.innerHTML = "Email cannot be empty";
        valid = false;
    }

    // Check password
    if (password.value.length < 8) {
        passwordError.innerHTML = "Password must contain at least 8 characters";
        valid = false;
    }

    // Check confirm password
    if (confirmPassword.value != password.value) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        valid = false;
    }

    // If everything is correct
    if (valid == true) {
        successMessage.innerHTML = "Registration Successful";
    }

});