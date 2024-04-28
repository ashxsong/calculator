function add(num1, num2) {
  return Math.round((parseFloat(num1) + parseFloat(num2)) * 1e12) / 1e12;
}

function subtract(num1, num2) {
  return Math.round((num1 - num2) * 1e12) / 1e12;
}

function multiply(num1, num2) {
  return Math.round(num1 * num2 * 1e12) / 1e12;
}

function divide(num1, num2) {
  if (parseFloat(num2) === 0) {
    return "Error";
  }
  return Math.trunc((num1 / num2) * 1e7) / 1e7;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else {
    return divide(num1, num2);
  }
}

let buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");
let displayValue = document.createElement("span");
let operation = [];
let isOperandComplete = true;
let operator;
let num1;
let num2;

const numbers = "1234567890.";
const operators = "+-*/";

displayValue.textContent = "0";
display.appendChild(displayValue);

for (let button of buttons) {
  button.addEventListener("click", () => {
    if (numbers.includes(button.textContent)) {
      if (button.textContent === "." && displayValue.textContent === "0") {
        displayValue.textContent = "0.";
        isOperandComplete = false;
      } else if ((displayValue.textContent === "0" || operation.length !== 0) && isOperandComplete) {
        displayValue.textContent = button.textContent;
        if (operation[0] === "operation complete") {
          operation = [];
        }
        if (displayValue.textContent !== "0") {
          isOperandComplete = false;
        }
      } else {
        if (displayValue.textContent.length < 9) {
          if (button.textContent !== "." || !(displayValue.textContent.includes("."))) {
            displayValue.textContent += button.textContent;
          }
        }
      }
    } else if (operators.includes(button.textContent)) {
      isOperandComplete = true;
      if (operation[0] === "operation complete") {
        operation.shift()
      }
      operation.push(displayValue.textContent);
      operation.push(button.textContent);
    } else if (button.textContent === "=") {
      isOperandComplete = true;
      if (operation.length !== 0 && operation[0] !== "operation complete") {
        operation.push(displayValue.textContent);
        operator = operation[1];
        num1 = operation[0];
        num2 = operation[2];
        displayValue.textContent = operate(operator, num1, num2);
        operation = ["operation complete"];
      }
    } else if (button.textContent === "B") {
      if (displayValue.textContent.length === 1) {
        displayValue.textContent = "0";
        isOperandComplete = true;
      } else {
        displayValue.textContent = displayValue.textContent.substring(0, displayValue.textContent.length - 1);
      }
    } else {
      isOperandComplete = true;
      displayValue.textContent = "0";
      operation = [];
    }
    if (operation.length > 3) {
      operator = operation[1];
      num1 = operation[0];
      num2 = operation[2];
      displayValue.textContent = operate(operator, num1, num2);
      operation.splice(0, 3, displayValue.textContent);
    }
  })
}