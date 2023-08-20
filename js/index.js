var password = document.getElementById("password");
var passwordConfirm = document.getElementById("passwordConfirm");

password.addEventListener("input", checkPwd);
passwordConfirm.addEventListener("input", checkPwd);

function checkPwd(){
    if(password.value != passwordConfirm.value){
        password.setCustomValidity("Invalid field.");
        passwordConfirm.setCustomValidity("Invalid field.");
    }
    else{
        password.setCustomValidity("");
        passwordConfirm.setCustomValidity("");
    }

}



