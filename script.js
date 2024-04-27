function add(num1, num2) {
  return num1 + num2;
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

buttons = document.querySelectorAll("button");
display = document.querySelector("#display");
let displayValue = "";
for (let button of buttons) {
  button.addEventListener("click", () => {
    if ("1234567890".includes(button.textContent)) {
      displayValue = document.createElement("span");
      displayValue.textContent = button.textContent;
      display.appendChild(displayValue);
    }
  });
}