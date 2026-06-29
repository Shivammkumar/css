let msg = document.getElementById("msg");

// Mouse Events
document.getElementById("clickBtn").onclick = () => msg.innerText = "Click Event";

document.getElementById("dblBtn").ondblclick = () => msg.innerText = "Double Click Event";

document.getElementById("overBtn").onmouseover = () => msg.innerText = "Mouse Over";

document.getElementById("outBtn").onmouseout = () => msg.innerText = "Mouse Out";

document.getElementById("downBtn").onmousedown = () => msg.innerText = "Mouse Down";

document.getElementById("upBtn").onmouseup = () => msg.innerText = "Mouse Up";

document.getElementById("moveBtn").onmousemove = () => msg.innerText = "Mouse Moving";

document.getElementById("enterBtn").onmouseenter = () => msg.innerText = "Mouse Enter";

document.getElementById("leaveBtn").onmouseleave = () => msg.innerText = "Mouse Leave";


// Keyboard Events
let input = document.getElementById("keyInput");
input.onkeydown = () => msg.innerText = "Key Down";
input.onkeyup = () => msg.innerText = "Key Up";
input.onkeypress = () => msg.innerText = "Key Press";


// Form Events
document.getElementById("myForm").onsubmit = function(e) {
    e.preventDefault();
    msg.innerText = "Form Submitted";
};


// Window Events
window.onload = () => msg.innerText = "Page Loaded";

window.onresize = () => msg.innerText = "Window Resized";

function resizeWindow() {
    window.resizeTo(500, 500);
}