let displayValue = "";

function appendInput(value) {
    displayValue += value;
    document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").innerText = "0";
}

function calculate() {
    let result;
    try {
        result = eval(displayValue); // Using eval for simplicity, but not recommended for production
    } catch (error) {
        result = "Error";
    }
    document.getElementById("display").innerText = result;
    displayValue = "";
}
