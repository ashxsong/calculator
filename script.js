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
  return num1 / num2;
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
let arr = [];
let displayValue = "";
for (let button of buttons) {
  button.addEventListener("click", () => {
    if ("1234567890".includes(button.textContent)) {
      displayValue = document.createElement("span");
      displayValue.textContent = button.textContent;
      display.appendChild(displayValue);
    }
    if ("1234567890+-*/".includes(button.textContent)) {
      arr.push(button.textContent);
    }
    else if (button.textContent === "AC") {
      let spans = document.querySelectorAll("span");
      for (let span of spans) {
        span.remove();
      }
    }
    else {
      let num1 = arr[0];
      let operator = arr[1];
      let num2 = arr[2];
      displayValue = document.createElement("span");
      displayValue.textContent = operate(operator, num1, num2);
      display.appendChild(displayValue);
      arr = [];
    }
  });
}