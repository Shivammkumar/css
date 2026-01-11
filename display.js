// Function to render the student form
function renderStudentForm() {
    let student = JSON.parse(localStorage.getItem('loggedInStudent'));
    if(!student){
        document.getElementById('studentData').innerHTML = "<p>No data found. Please login first.</p>";
        return;
    }

    document.getElementById('studentData').innerHTML = `
        <label>Name:</label><br>
        <input type="text" id="name" value="${student.name}"><br><br>
        
        <label>Class:</label><br>
        <input type="text" id="class" value="${student.class}"><br><br>
        
        <label>Roll No:</label><br>
        <input type="text" id="roll" value="${student.roll}"><br><br>
        
        <label>Username:</label><br>
        <input type="text" id="username" value="${student.username}" disabled><br><br>
        <button onclick="Updatedata()">Update</button>
        <button onclick="deleteData()">Delete</button>
        <button onclick="logout()">Logout</button>
    `;
}

// Call render function on page load
renderStudentForm();

// Update function

function Updatedata() {
    window.location.href = "update.html";
}
// Delete function
function deleteData(){
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let student = JSON.parse(localStorage.getItem('loggedInStudent'));

    students = students.filter(s => s.username !== student.username);
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.removeItem('loggedInStudent');
    alert("Account deleted successfully!");
    window.location = "login.html";
}



// Logout function
function logout(){
    localStorage.removeItem('loggedInStudent');
    window.location = "login.html";
}


