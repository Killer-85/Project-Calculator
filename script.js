const display = document.getElementById('display');
const digitBtns = document.querySelectorAll('.digit');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('btn-clear');
const equalBtn = document.getElementById('btn-equal');

let num1 = "";
let num2 = "";
let operator = "";
display.value = "";
let activeOperator = null;
let shouldClearDisplay = false;

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  if (parseFloat(num2) === 0) {
    return "Error: Cannot divide with 0!!";
  }
  return parseFloat(num1) / parseFloat(num2);
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error: Invalid operation!!";
  }
}

// Handle Digits
digitBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (shouldClearDisplay) {
      display.value = "";
      shouldClearDisplay = false;
    }
    display.value += button.textContent;
  });
});


// Handle Operators
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator && !display.value) {
      operator = button.textContent;
    }

    if (activeOperator) {
      activeOperator.classList.remove("operator-active");
    }
    button.classList.add("operator-active");
    activeOperator = button;

    if (num1 === "" || shouldClearDisplay) {
      num1 = display.value;
    } else if (num1 && display.value) {
      num2 = display.value;
      let result = operate(num1, num2, operator);
      if (result === "Error: Cannot divide with 0!!") {
        clearAll();
        display.value = result;
        return;
      }
      num1 = result.toString();
      display.value = num1;
    }

    operator = button.textContent;
    shouldClearDisplay = true;
  });
});

// Handle Equals
equalBtn.addEventListener("click", () => {
  if (activeOperator) {
    activeOperator.classList.remove("operator-active");
    activeOperator = null;
  }
  if (!num1 || !operator || !display.value) {
    return;
  }

  num2 = display.value;
  let result = operate(num1, num2, operator);
  if (result === "Error: Cannot divide with 0!!") {
    clearAll();
    display.value = result;
    return;
  }
  display.value = result;
  num1 = result.toString();
  num2 = "";
  operator = "";
  shouldClearDisplay = true;
});

// Handle Clear Button
clearBtn.addEventListener("click", () => {
  clearAll();
});

function clearAll() {
  num1 = "";
  num2 = "";
  operator = "";
  display.value = "";
  shouldClearDisplay = false;
  if (activeOperator) {
    activeOperator.classList.remove("operator-active");
    activeOperator = null;
  }
}