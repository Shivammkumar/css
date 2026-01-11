function getData() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

function saveData(data) {
    localStorage.setItem("students", JSON.stringify(data));
}

function register() {
    let student = {
        name: name.value,
        father: father.value,
        gender: gender.value,
        dob: dob.value,
        stream: stream.value,
        class10: class10.value,
        mobile: mobile.value,
        address: address.value
    };

    if (student.name === "" || student.gender === "" || student.stream === "") {
        alert("Please fill required fields");
        return;
    }

    let data = getData();
    data.push(student);
    saveData(data);

    alert("Registration Successful");
    showData();
}

function deleteStudent(index) {
    let data = getData();
    data.splice(index, 1);
    saveData(data);
    showData();
}

function showData() {
    let data = getData();
    tableData.innerHTML = "";

    data.forEach((s, i) => {
        tableData.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.gender}</td>
            <td>${s.stream}</td>
            <td>${s.class10}</td>
            <td><button onclick="deleteStudent(${i})">Delete</button></td>
        </tr>`;
    });
}

showData();
