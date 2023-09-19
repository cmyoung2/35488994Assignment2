function setPassword() {
    let setPass = prompt("Set a new password: ");
    let confirmPass = prompt("Confirm your new password: ");
    do{
        if(confirmPass !== setPass) {
            confirmPass = prompt("Password incorrect. Confirm your new password: ");
        }
    }while(confirmPass !== setPass);
    alert("Password is now changed!");
}

setPassword();