// Registration Function
function registerUser() {
    const regNo = document.getElementById("regNo").value;
    const password = document.getElementById("regPassword").value;
    const message = document.getElementById("regMessage");

    if (regNo && password) {
        localStorage.setItem("regNo", regNo);
        localStorage.setItem("password", password);
        message.textContent = "Registration Successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Please fill all fields";
        message.style.color = "red";
    }
}

// Login Function
function loginUser() {
    const loginRegNo = document.getElementById("loginRegNo").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const message = document.getElementById("loginMessage");

    const storedRegNo = localStorage.getItem("regNo");
    const storedPassword = localStorage.getItem("password");

    if (loginRegNo === storedRegNo && loginPassword === storedPassword) {
        message.textContent = "Login Successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid Registration No or Password";
        message.style.color = "red";
    }
}
