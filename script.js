function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        window.alert("Fill in Username and Password to continue.")
    }
    else {
        window.location.href = "surveyform.html";
    }
}

function validateSignup() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkbox = document.getElementById("terms-conditions").value;

    if (username === "" || password === "") {
        window.alert("Fill in Username and Password to continue.")
    }
    else if (!checkbox.check) {
        window.alert("Please accept the terms and conditions.")
    }
    else {
        window.location.href = "surveyform.html";
    }
}