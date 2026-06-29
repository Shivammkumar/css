function showMessage(msg, type) {
    let message = document.getElementById("message");
    message.innerText = msg;
    message.className = type; // success ya error
}

function saveData() {
    let name = document.getElementById("name").value;

    if (name === "") {
        showMessage("Please enter your name", "error");
        return;
    }

    let existingData = sessionStorage.getItem("username");

    if (existingData !== null) {
        showMessage("Data already exists!", "error");
    } else {
        sessionStorage.setItem("username", name);
        showMessage("Data Saved Successfully!", "success");
    }
}

function getData() {
    let data = sessionStorage.getItem("username");

    if (data !== null) {
        document.getElementById("output").value = data;
        showMessage("Data Retrieved!", "success");
    } else {
        showMessage("No data found!", "error");
    }
}

function clearData() {
    sessionStorage.clear();
    document.getElementById("output").value = "";
    showMessage("Data Cleared!", "success");
}