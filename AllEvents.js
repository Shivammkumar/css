let msg = document.getElementById("msg");

// Function
function showMessage(text) {
    msg.innerText = text;
}

// Click
document.getElementById("clickBtn").addEventListener("click", function () {
    showMessage("Click Event Triggered");
});

// Double Click
document.getElementById("dblBtn").addEventListener("dblclick", function () {
    showMessage("Double Click Event Triggered");
});

// Mouse Over
document.getElementById("overBtn").addEventListener("mouseover", function () {
    showMessage("Mouse Over Event Triggered");
});

// Mouse Out
document.getElementById("outBtn").addEventListener("mouseout", function () {
    showMessage("Mouse Out Event Triggered");
});

// Mouse Down
document.getElementById("downBtn").addEventListener("mousedown", function () {
    showMessage("Mouse Down Event Triggered");
});

// Mouse Up
document.getElementById("upBtn").addEventListener("mouseup", function () {
    showMessage("Mouse Up Event Triggered");
});

// Mouse Move
document.getElementById("moveBtn").addEventListener("mousemove", function () {
    showMessage("Mouse Move Event Triggered");
});

// Mouse Enter
document.getElementById("enterBtn").addEventListener("mouseenter", function () {
    showMessage("Mouse Enter Event Triggered");
});

// Mouse Leave
document.getElementById("leaveBtn").addEventListener("mouseleave", function () {
    showMessage("Mouse Leave Event Triggered");
});




let mssg = document.getElementById("mssg");

// Function
function showMessage(text) {
    mssg.innerText = text;
}


document.getElementById("keydownBtn").addEventListener("keydown", function () {
    showMessage("keydown Event Triggered");
});

// Double Click
document.getElementById("dblBtn").addEventListener("dblclick", function () {
    showMessage("Double Click Event Triggered");
});

// Mouse Over
document.getElementById("overBtn").addEventListener("mouseover", function () {
    showMessage("Mouse Over Event Triggered");
});