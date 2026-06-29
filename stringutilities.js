import { Student } from './student.js';
import stringUtils from './student.js';

window.onload = function () {
    const student = new Student(101, "Satyam", "Kumar");

    const studentInfo = document.getElementById('studentInfo');
    studentInfo.innerHTML = `
        <h3>Student Details</h3>
        <p><strong>ID:</strong> ${student.id}</p>
        <p><strong>Full Name:</strong> ${student.getFullName()}</p>
    `;

    const testString = "ChiPi Technologies Training Center";
    const leftPart = stringUtils.extractLeft(testString);
    const rightPart = stringUtils.extractRight(testString);
    const lengthWithoutSpaces = stringUtils.stringLengthWithoutSpaces(testString);

    const utilityInfo = document.getElementById('utilityInfo');
    utilityInfo.innerHTML = `
        <h3>String Utility Functions</h3>
        <p><strong>Original String:</strong> "${testString}"</p>
        <p><strong>Left hand string:</strong> "${leftPart}"</p>
        <p><strong>Right hand string:</strong> "${rightPart}"</p>
        <p><strong>Length Without Spaces:</strong> ${lengthWithoutSpaces}</p>
    `;
};