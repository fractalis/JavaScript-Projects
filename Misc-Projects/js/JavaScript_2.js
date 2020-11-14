function validateForm() {
    var form = document.forms['personalInfoForm'];
    var fields = ["firstName", "lastName", "emailAddress", "phoneNumber"];
    let hasErrors = false

    document.getElementById("error-container").innerHTML = "";
    
    for(var i = 0; i < fields.length; i++) {
        if(form[fields[i]].value == "") {
            document.getElementById("error-container").innerHTML += `${fields[i]} must be filled out.<br>`;
            hasErrors = true;
        }
    }

    if(hasErrors) { 
        return false;
    } else {
        return true;
    }
}