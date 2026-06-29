let content = ""
window.onload = function() {
    updateScreenSizeMessage();
    let p = document.getElementById("loadorresize");   
    content = content + "onload is called.";
    p.textContent = content;
};
window.onresize = function() {
    updateScreenSizeMessage();
    let p = document.getElementById("loadorresize");   
    content = content + "resize is called.";
    p.textContent = content;
};


function updateScreenSizeMessage() {
    const screenSize = window.innerWidth;
    let screenSizeMessage;

    if (screenSize >= 1024) {
        screenSizeMessage = "You are using a laptop with a large screen.";
    } else if (screenSize >= 768) {
        screenSizeMessage = "You are using a laptop with a medium-sized screen.";
    } else if (screenSize >= 600) {
        screenSizeMessage = "You are using a tablet with a 10-inch screen.";
    } else if (screenSize >= 414) {
        screenSizeMessage = "You are using a smartphone with a 6.5-inch screen.";
    } else if (screenSize >= 375) {
        screenSizeMessage = "You are using a smartphone with a 6-inch screen.";
    } else {
        screenSizeMessage = "You are using a smartphone with a 5-inch screen.";
    }

    document.getElementById("screenSizeMessage").textContent = screenSizeMessage;
}