function validateForm() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            inputs[i].style = "border: 2px solid #DC143C !important; outline:none !important;";
        } else {
            inputs[i].style.borderColor = "";
        }
    }

    var firstName = document.forms[0]["First_Name"].value;
    var lastName = document.forms[0]["Last_Name"].value;
    var email = document.forms[0]["Email"].value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    var agree = document.forms[0]["Agree_to_Rcv_update"].checked;
    var error = false;

    if (!firstName) {
        document.getElementById("first_name_error").innerHTML = "First name is required";
        document.getElementById("first_name_error").style.display = "flex";
        error = true;
    } else {
        document.getElementById("first_name_error").style.display = "none";
    }

    if (!lastName) {
        document.getElementById("last_name_error").innerHTML = "Last name is required";
        document.getElementById("last_name_error").style.display = "flex";
        error = true;
    } else {
        document.getElementById("last_name_error").style.display = "none";
    }

    if (!email) {
        document.getElementById("email_error").innerHTML = "Email is required.";
        document.getElementById("email_error").style.display = "flex";
        error = true;
    } else if (!emailRegex.test(email)) {
        document.getElementById("email_error").innerHTML = "Email is not in the correct format.";
        document.getElementById("email_error").style.display = "flex";
        error = true;
    } else {
        document.getElementById("email_error").style.display = "none";
    }

    if (!agree) {
        document.getElementById("agree_error").innerHTML = "Agree to receive updates is required";
        document.getElementById("agree_error").style.display = "block";
        error = true;
    } else {
        document.getElementById("agree_error").style.display = "none";
    }
    if (error) {
        return false;
    }
    return true;
}



function validateForm() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            inputs[i].style = "border: 2px solid #DC143C !important; outline:none !important;";
        } else {
            inputs[i].style.borderColor = "";
        }
    }

    var firstName = document.forms[0]["First_Name"].value;
    var lastName = document.forms[0]["Last_Name"].value;
    var email = document.forms[0]["Email"].value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    var agree = document.forms[0]["Agree_to_Rcv_update"].checked;
    var error = false;

    if (!firstName) {
        document.getElementById("first_name_error").innerHTML = "First name is required";
        document.getElementById("first_name_error").style.display = "flex";
        error = true;
    } else {
        document.getElementById("first_name_error").style.display = "none";
    }



    if (error) {
        return false;
    }
    return true;

}