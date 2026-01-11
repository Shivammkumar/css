// registration.js

function register() {
    let name = document.getElementById('name').value;
    let className = document.getElementById('class').value;
    let roll = document.getElementById('roll').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(!name || !className || !roll || !username || !password){
        alert("Please fill all fields!");
        return;
    }

    let student = {name, class: className, roll, username, password};

    // Fetch existing students from localStorage
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Check if username already exists
    let exists = students.some(s => s.username === username);
    if(exists){
        alert("Username already exists! Choose another.");
        return;
    }

    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    alert("Registration Successful!");
    window.location = "login.html"; // Redirect to login page
}
