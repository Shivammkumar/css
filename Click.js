let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("dblclick", function () {
    msg.innerText = "Button Clicked!";
});