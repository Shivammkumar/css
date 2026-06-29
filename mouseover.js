let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("mouseover", function () {
    msg.innerText = "mouseup";
});