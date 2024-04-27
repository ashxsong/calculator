function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
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

const numbers = "1234567890";
const operators = "+-*/";

displayValue.textContent = "0";
display.appendChild(displayValue);

for (let button of buttons) {
  button.addEventListener("click", () => {
    if (numbers.includes(button.textContent)) {
      if (displayValue.textContent === "0" || operation.length !== 0) {
        displayValue.textContent = button.textContent;
        if (operation[0] === "operation complete") {
          operation = [];
        }
      } else {
        displayValue.textContent += button.textContent;
      }
    } else if (operators.includes(button.textContent)) {
      if (operation[0] === "operation complete") {
        operation.shift()
      }
      operation.push(displayValue.textContent);
      operation.push(button.textContent);
      console.log(operation);
    } else if (button.textContent === "=") {
      if (operation.length !== 0 && operation[0] !== "operation complete") {
        operation.push(displayValue.textContent);
        displayValue.textContent = operate(operation[1], operation[0], operation[2]);
        console.log(operation);
        operation = ["operation complete"];
      }
    } else {
      displayValue.textContent = "0";
      operation = [];
    }
    if (operation.length > 2) {
      displayValue.textContent = operate(operation[1], operation[0], operation[2]);
      operation.splice(0, 3, displayValue.textContent);
    }
  })
}