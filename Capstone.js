// Section Change
function showSection(id) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("forgotSection").style.display = "none";
    document.getElementById("dashboardSection").style.display = "none";

    document.getElementById(id).style.display = "block";
}

// Register
function handleRegister() {

    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPass").value.trim();

    if (email === "" || password === "") {
        alert("Fill all fields");
        return;
    }

    // Save data
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Register Successful");

    // Login page open
    showSection("loginSection");
}

// Login
function handleLogin() {

    let loginEmail =
        document.getElementById("loginEmail").value.trim();

    let loginPassword =
        document.getElementById("loginPass").value.trim();

    // Get data
    let savedEmail =
        localStorage.getItem("userEmail");

    let savedPassword =
        localStorage.getItem("userPassword");

    // Check
    if (
        loginEmail == savedEmail &&
        loginPassword == savedPassword
    ) {

        // Dashboard data
        document.getElementById("welcomeMsg").innerText =
            "Welcome User";

        document.getElementById("dispEmail").innerText =
            savedEmail;

        document.getElementById("dispDate").innerText =
            new Date().toLocaleString();

        showSection("dashboardSection");

    } else {
        alert("Email or Password Wrong");
    }
}

// Reset Password
function handleReset() {

    let newPass =
        document.getElementById("newPass").value.trim();

    let confirmPass =
        document.getElementById("confirmPass").value.trim();

    if (newPass === "" || confirmPass === "") {
        alert("Fill all fields");
        return;
    }

    if (newPass !== confirmPass) {
        alert("Password not match");
        return;
    }

    localStorage.setItem(
        "userPassword",
        newPass
    );

    alert("Password Changed");

    showSection("loginSection");
}

// Logout
function logout() {
    showSection("loginSection");
}