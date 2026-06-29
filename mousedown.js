let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("mousedown", function () {
    msg.innerText = "mousedown";
});