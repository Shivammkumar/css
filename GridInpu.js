function createBoxes() {

    let count = document.getElementById("boxCount").value;
    let text = document.getElementById("textValue").value;
    let size = document.getElementById("sizeValue").value;

    let container = document.getElementById("container");

    let countError = document.getElementById("countError");
    let textError = document.getElementById("textError");
    let sizeError = document.getElementById("sizeError");

    // clear errors
    countError.innerText = "";
    textError.innerText = "";
    sizeError.innerText = "";

    container.innerHTML = "";

    let isValid = true;

    if (!count) {
        countError.innerText = "Enter number of boxes!";
        isValid = false;
    }

    if (!text) {
        textError.innerText = "Enter text!";
        isValid = false;
    }

    if (!isValid) return;

    count = parseInt(count);

    if (count > 10 || count <= 0) {
        countError.innerText = "Enter 1 to 10 boxes only!";
        return;
    }

    let sizes = [];

    //  1 BOX
    if (count === 1) {
        size = parseInt(size);

        if (!size || size <= 0 || size > 100) {
            sizeError.innerText = "Size must be 1-100!";
            return;
        }

        sizes = [size];
    }

    //  Multiple boxes (1 custom + rest auto)
    else {
        size = parseInt(size);

        if (!size || size <= 0 || size >= 100) {
            sizeError.innerText = "Size must be 1-99!";
            return;
        }

        let remaining = 100 - size;
        let otherSize = remaining / (count - 1);

        sizes.push(size); //  first box custom

        for (let i = 1; i < count; i++) {
            sizes.push(otherSize);
        }
    }

    // create boxes
    sizes.forEach((s, index) => {

        let box = document.createElement("div");
        box.classList.add("box");

        box.style.width = s + "%";
        box.innerHTML = text + "<br>(" + s.toFixed(2) + "%)";

        container.appendChild(box);
    });
}