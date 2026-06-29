document.getElementById("box").addEventListener("contextmenu", function(event){

    event.preventDefault();   // Default right-click menu ko stop karta hai

    alert("Right Click Disable!");
});