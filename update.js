// Page load par data bharo
let student = JSON.parse(localStorage.getItem("loggedInStudent"));

if (!student) {
    alert("Please login first");
    window.location.href = "register.html";
}

// Prefill data
document.getElementById("name").value = student.name;
document.getElementById("className").value = student.className;
document.getElementById("roll").value = student.roll;
document.getElementById("username").value = student.username;


// Update function
function updateStudent() {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    student.name = document.getElementById("name").value;
    student.className = document.getElementById("className").value;
    student.roll = document.getElementById("roll").value;

    let index = students.findIndex(s => s.username === student.username);

    if (index !== -1) {
        students[index] = student;

        localStorage.setItem("students", JSON.stringify(students));
        localStorage.setItem("loggedInStudent", JSON.stringify(student));

        alert("Data updated successfully!");
        window.location.href = "display.html";
    }
}
