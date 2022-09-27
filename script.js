let runningTotal = 0;
let previousOperator = null;

// number on screen
const screen = document.querySelector(".screen h2");

// clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  screen.innerText = "0";
  runningTotal = 0;
})

// backspace button
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function () {
  if (screen.innerText.length === 1) {
    screen.innerText = "0";
  } else {
    screen.innerText = screen.innerText.slice(0, -1);
  }
});

// number buttons
const numbers = document.querySelectorAll(".number button");
numbers.forEach((number) => {
  number.addEventListener("click", function () {
    if (screen.innerText === "0") {
      screen.innerText = number.innerText
    } else {
      screen.innerText = screen.innerText + number.innerText;
    }
  });
});

// operator buttons
const operators = document.querySelectorAll(".operator button");
operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    let operation = operator.innerText;
    const screenValue = Number.parseInt(screen.innerText);
    if (operation === "=" && previousOperator === null ) {
      return;
    } else if (operation === "="){
      handleMath(previousOperator, screenValue);
      screen.innerText = runningTotal;
      previousOperator = null;
      runningTotal = 0;
    } else if (operation != "="){
      if (screen.innerText === "0") {
        return;
      } else if (runningTotal === 0) {
        runningTotal = screenValue;
      }
      if (previousOperator != null) {
        handleMath(previousOperator, screenValue);
      }
      screen.innerText = "0";
      previousOperator = operation;
    }
  });
});

const handleMath = (operator, value) => {
  switch (operator) {
    case "÷": runningTotal /= value;
    break;
    case "x": runningTotal *= value;
    break;
    case "-": runningTotal -= value;
    break;
    case "+": runningTotal += value;
    break;
  }
}
