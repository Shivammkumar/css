let btn = document.getElementById("btn");
let Shivamtext = document.getElementById("Shivamtext");

// single click
btn.onclick = function(){
text.innerHTML = "Single Click hua hai";
}

// double click
btn.ondblclick = function(){
Shivamtext.innerHTML = "Double Click hua hai";
}

// mouse down
btn.onmousedown = function(){
text.innerHTML = "Mouse Button Pressed";
}

// mouse up
btn.onmouseup = function(){
text.innerHTML = "Mouse Button Released";
}

// right click
btn.oncontextmenu = function(){
text.innerHTML = "Right Click hua hai";
return false;
}

// mouse over
btn.onmouseover = function(){
btn.style.background = "red";
text.innerHTML = "Mouse Button ke upar hai";
}

// mouse out
btn.onmouseout = function(){
btn.style.background = "blue";
text.innerHTML = "Mouse Button se bahar gaya";
}

// mouse move
document.onmousemove = function(){
console.log("Mouse Move ho raha hai");
}