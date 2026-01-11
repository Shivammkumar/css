// login.js

function login() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    if(!username || !password){
        alert("Please enter username and password!");
        return;
    }

    let students = JSON.parse(localStorage.getItem('students')) || [];
    let student = students.find(s => s.username === username && s.password === password);

    if(student){
        localStorage.setItem('loggedInStudent', JSON.stringify(student));
        window.location = "display.html"; // Redirect to display page
    } else {
        alert("Invalid username or password!");
    }
}
