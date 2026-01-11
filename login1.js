function login(){
    let email = loginEmail.value;
    let pass = loginPass.value;

    let storedEmail = localStorage.getItem("email");
    let storedPass = localStorage.getItem("password");

    if(email !== storedEmail){
        alert("Email not registered");
    }
    else if(pass !== storedPass){
        alert("Wrong password");
    }
    else{
        alert("Login Successful");
    }
}
