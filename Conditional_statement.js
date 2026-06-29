
document.getElementById("btn1")
.addEventListener("click", function () {

    let age =
    document.getElementById("age1").value;

    if (age === "" || isNaN(age)) {
        document.getElementById("result1")
        .innerText = "Enter valid age";
    }

    else if (Number(age) < 0 || Number(age) > 100) {
        document.getElementById("result1")
        .innerText = "Enter valid age";
    }

    else if (Number(age) >= 60) {
        document.getElementById("result1")
        .innerText =
        "Eligible for Senior Citizen Benefits";
    }

    else {
        document.getElementById("result1")
        .innerText = "Not Eligible";
    }
});


document.getElementById("btn2")
.addEventListener("click", function () {

    let year =
    document.getElementById("year").value;

    if (
        year === "" ||
        isNaN(year) ||
        Number(year) < 1000 ||
        Number(year) > 9999
    ) {
        document.getElementById("result2")
        .innerText = "Enter valid year";
    }

    else if (
        (Number(year) % 4 === 0 &&
        Number(year) % 100 !== 0) ||
        Number(year) % 400 === 0
    ) {
        document.getElementById("result2")
        .innerText =
        year + " is a Leap Year";
    }

    else {
        document.getElementById("result2")
        .innerText =
        year + " is Not a Leap Year";
    }
});


document.getElementById("btn3")
.addEventListener("click", function () {

    let unitsInput =
    document.getElementById("units");

    let units = unitsInput.value;

    if (
        units === "" ||
        !/^[-]?\d+$/.test(units) ||
        Number(units) > 0 ||
        Number(units) > 10000
    ) {
        document.getElementById("result3")
        .innerText =
        "Enter valid units";
        return;
    }

    units = Number(units);

    let bill;

    if (units <= 100) {
        bill = units * 5;
    }

    else if (units <= 200) {
        bill =
        (100 * 5) +
        ((units - 100) * 6);
    }

    else {
        bill =
        (100 * 5) +
        (100 * 6) +
        ((units - 200) * 7);
    }

    document.getElementById("result3")
    .innerText =
    "Total Bill = ₹" + bill;
});

document.getElementById("btn4")
.addEventListener("click", function () {

    let gender =
    document.getElementById("gender")
    .value.trim().toLowerCase();

    let age =
    document.getElementById("age2")
    .value.trim();

    // Age validation
    if (
        age === "" ||
        !/^\d+$/.test(age) ||
        Number(age) < 0 ||
        Number(age) > 100
    ) {
        document.getElementById("result4")
        .innerText =
        "Enter valid age";
        return;
    }

    age = Number(age);

    // Gender validation
    if (
        gender !== "male" &&
        gender !== "female"
    ) {
        document.getElementById("result4")
        .innerText =
        "Enter valid gender";
        return;
    }

    // Ladies quota check
    if (
        gender === "female" &&
        age >= 18
    ) {
        document.getElementById("result4")
        .innerText =
        "Passenger is eligible for Ladies Quota";
    }

    else {
        document.getElementById("result4")
        .innerText =
        "Passenger is not eligible";
    }
});


document.getElementById("btn5")
.addEventListener("click", function () {

    let userType =
    document.getElementById("userType")
    .value.toLowerCase();

    if (userType === "admin") {
        document.getElementById("result5")
        .innerText =
        "Welcome Admin";
    }

    else if (userType === "user") {
        document.getElementById("result5")
        .innerText =
        "Welcome User";
    }

    else {
        document.getElementById("result5")
        .innerText =
        "Invalid User Type";
    }
});


document.getElementById("btn6")
.addEventListener("click", function () {

    let age =
    document.getElementById("age3")
    .value.trim();

    // Age validation
    if (
        age === "" ||
        !/^\d+$/.test(age) ||
        Number(age) < 0 ||
        Number(age) > 100
    ) {
        document.getElementById("result6")
        .innerText =
        "Enter valid age";
        return;
    }

    age = Number(age);

    if (age < 5) {
        document.getElementById("result6")
        .innerText =
        "Free Ticket";
    }

    else if (age <= 12) {
        document.getElementById("result6")
        .innerText =
        "Half Ticket";
    }

    else {
        document.getElementById("result6")
        .innerText =
        "Full Ticket";
    }
});

document.getElementById("btn7")
.addEventListener("click", function () {

    let bookedClass =
    document.getElementById("bookedClass")
    .value.toLowerCase();

    let seats = Number(
        document.getElementById("seats").value
    );

    if (
        bookedClass === "sleeper" &&
        seats > 0
    ) {
        document.getElementById("result7")
        .innerText =
        "Upgrade to Second AC";
    }

    else {
        document.getElementById("result7")
        .innerText =
        "No Upgrade Available";
    }
});


document.getElementById("btn8")
.addEventListener("click", function () {

    let waitlist =
    document.getElementById("waitlist")
    .value.trim();

    // Validation
    if (
        waitlist === "" ||
        !/^\d+$/.test(waitlist)
    ) {
        document.getElementById("result8")
        .innerText =
        "Enter valid waitlist number";
        return;
    }

    waitlist = Number(waitlist);

    if (waitlist < 0) {
        document.getElementById("result8")
        .innerText =
        "Enter valid waitlist number";
    }

    else if (waitlist <= 10) {
        document.getElementById("result8")
        .innerText =
        "High Chance of Confirmation";
    }

    else {
        document.getElementById("result8")
        .innerText =
        "Low Chance of Confirmation";
    }
});


document.getElementById("btn9")
.addEventListener("click", function () {

    let status =
    document.getElementById("status")
    .value.toLowerCase();

    if (status === "cnf") {
        document.getElementById("result9")
        .innerText =
        "Ticket Confirmed";
    }

    else if (status === "wl") {
        document.getElementById("result9")
        .innerText =
        "Waiting List";
    }

    else {
        document.getElementById("result9")
        .innerText =
        "Invalid Status";
    }
});


document.getElementById("btn10")
.addEventListener("click", function () {

    let quota =
    document.getElementById("quota")
    .value.toLowerCase();

    if (quota === "tatkal") {
        document.getElementById("result10")
        .innerText =
        "Tatkal Booking";
    }

    else if (quota === "general") {
        document.getElementById("result10")
        .innerText =
        "General Booking";
    }

    else {
        document.getElementById("result10")
        .innerText =
        "Invalid Quota";
    }
});


document.getElementById("btn11")
.addEventListener("click", function () {

    let marks =
    document.getElementById("marks")
    .value.trim();

    // Validation
    if (
        marks === "" ||
        !/^\d+$/.test(marks) ||
        Number(marks) < 0 ||
        Number(marks) > 100
    ) {
        document.getElementById("result11")
        .innerText =
        "Marks must be between 0 to 100";
        return;
    }

    marks = Number(marks);

    if (marks >= 90) {
        document.getElementById("result11")
        .innerText =
        "Grade A";
    }

    else if (marks >= 80) {
        document.getElementById("result11")
        .innerText =
        "Grade B";
    }

    else if (marks >= 70) {
        document.getElementById("result11")
        .innerText =
        "Grade C";
    }

    else if (marks >= 60) {
        document.getElementById("result11")
        .innerText =
        "Grade D";
    }

    else {
        document.getElementById("result11")
        .innerText =
        "Grade F";
    }
});