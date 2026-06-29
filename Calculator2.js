function appendValue(value){
    document.getElementById("result").value += value;
}

function clearResult(){
    document.getElementById("result").value = "";
}

function deleteLast(){
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0,-1);
}

function calculate(){
    let result = document.getElementById("result").value;
    try{
        document.getElementById("result").value = eval(result);
    }
    catch{
        alert("Invalid Expression");
    }
}