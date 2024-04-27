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
  return Math.round((num1 / num2) * 1e7) / 1e7;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "*") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
}

let buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");
let displayValue = document.createElement("span");

const numbers = "1234567890";

displayValue.textContent = "0";
display.appendChild(displayValue);

for (let button of buttons) {
  button.addEventListener("click", () => {
    if (numbers.includes(button.textContent)) {
      if (displayValue.textContent === "0") {
        displayValue.textContent = button.textContent;
      } else {
        displayValue.textContent += button.textContent;
      }
      display.appendChild(displayValue);
    }
  })
}