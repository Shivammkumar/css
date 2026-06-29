let form = document.getElementById("myForm");
let message = document.getElementById("message");
let output = document.getElementById("output");

// Page load par data show
window.onload = function () {
    let data = sessionStorage.getItem("student");

    if (data !== null) {
        let student = JSON.parse(data);
        showData(student);
    }
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    if (name === "" || mobile === "" || address === "") {
        message.innerText = "All fields are required!";
        message.style.color = "red";
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        message.innerText = "Enter valid mobile number!";
        message.style.color = "red";
        return;
    }

    let studentData = {
        name: name,
        mobile: mobile,
        address: address
    };

    sessionStorage.setItem("student", JSON.stringify(studentData));

    message.innerText = "Registration Successful!";
    message.style.color = "green";

    showData(studentData);
});

// Show data function
function showData(student) {
    output.innerHTML = `
        <h3>Saved Data:</h3>
        <p><b>Name:</b> ${student.name}</p>
        <p><b>Mobile:</b> ${student.mobile}</p>
        <p><b>Address:</b> ${student.address}</p>

        <button onclick="deleteData()">Delete</button>
    `;
}

// Delete function
function deleteData() {
    sessionStorage.removeItem("student");

    output.innerHTML = "";
    message.innerText = "Data Deleted Successfully!";
    message.style.color = "red";
}