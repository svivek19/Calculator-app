const outputScreen = document.querySelector('input');

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value)
    }
    catch (err) {
        alert("Invalid!")
    }
}
function Reset() {
    outputScreen.value = "";
}
function Delete() {
    outputScreen.value = outputScreen.value.slice(0, -1)
}






