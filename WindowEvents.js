let msg = document.getElementById("msg");
let myWindow;

// PAGE LOAD EVENT
function pageLoaded() {
    msg.innerText = "Page Loaded Successfully";
}

// PAGE UNLOAD EVENT
function pageUnloaded() {
    alert("You are leaving the page!");
}

// WINDOW RESIZE EVENT
function windowResized() {
    msg.innerText = "Window Resized";
}

// WINDOW SCROLL EVENT
function windowScrolled() {
    msg.innerText = "Page Scrolled";
}

// OPEN WINDOW
function openWin() {
    myWindow = window.open("", "", "width=300,height=200");
    myWindow.document.write("<h3>New Window Opened</h3>");
}

// CLOSE WINDOW
function closeWin() {
    if (myWindow) {
        myWindow.close();
    }
}

// EVENTS APPLY
window.onload = pageLoaded;
window.onbeforeunload = pageUnloaded;
window.onresize = windowResized;
window.onscroll = windowScrolled;