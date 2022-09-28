let runningTotal = 0;
let previousOperator = null;
const screen = document.querySelector(".screen h2");

// clear button functionality
const clear = document.querySelector(".clear button");
const clearScreen = () => {
  screen.innerText = "0";
  runningTotal = 0;
}
clear.addEventListener("click", function () {
  clearScreen();
})

// backspace button functionality
const backspace = document.querySelector(".backspace button");
const backspaceScreen = () => {
  if (screen.innerText.length === 1) {
    screen.innerText = "0";
  } else {
    screen.innerText = screen.innerText.slice(0, -1);
  }
}
backspace.addEventListener("click", function () {
  backspaceScreen();
});

// digit buttons functionality
const screenDisplay = (digit) => {
  if (screen.innerText === "0") {
    screen.innerText = digit
  } else {
    screen.innerText = screen.innerText + digit;
  }
}
const digits = document.querySelectorAll(".digit button");
digits.forEach((digit) => {
  digit.addEventListener("click", function () {
    screenDisplay(digit.innerText);
  });
});

// calculation functionality
const handleMath = (operator, value) => {
  switch (operator) {
    case "÷":
    case "/":
      runningTotal /= value;
    break;
    case "x":
    case "*":
      runningTotal *= value;
    break;
    case "-": runningTotal -= value;
    break;
    case "+": runningTotal += value;
    break;
  }
}

const handleOperator = (operator, value) => {
  if (screen.innerText === "0") {
    return;
  } else if (runningTotal === 0) {
    runningTotal = value;
  }
  if (previousOperator != null) {
    handleMath(previousOperator, value);
  }
  screen.innerText = "0";
  previousOperator = operator;
}

const handleCalculation = (operator, value) => {
  handleMath(operator, value);
  screen.innerText = runningTotal;
  previousOperator = null;
  runningTotal = 0;
}

const operators = document.querySelectorAll(".operator button");
operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    let currentOperator = operator.innerText;
    const screenValue = Number.parseInt(screen.innerText);
    if (currentOperator === "=" && previousOperator === null ) {
      return;
    } else if (currentOperator === "="){
      handleCalculation(previousOperator, screenValue);
    } else if (currentOperator != "="){
      handleOperator(currentOperator, screenValue);
    }
  });
});

// keyboard functionality
document.addEventListener("keydown", function(e) {
  const screenValue = Number.parseInt(screen.innerText);
  const digitStyle = "opacity: 0.9; box-shadow: 0px 0px 0px 3px #157eff inset;";
  const operatorStyle = "opacity: 0.9; box-shadow: 0px 0px 0px 3px #57b223 inset;";

  for (let i = 1; i < 10; i++) {
    let number = i.toString();
    if (e.key === number) {
      screenDisplay(number);
      const digits = document.querySelectorAll(".digit button");
      digits.forEach((digit) => {
        if (digit.innerText === number){
          digit.style.cssText = digitStyle;
        }
      })
    }
  }

  ["/", "*", "-", "+"].forEach((operator) => {
    if (e.key === operator) {
      handleOperator(operator, screenValue);
      switch (operator) {
        case "/":
          document.querySelector(".divide button").style.cssText = operatorStyle;
        break;
        case "*":
          document.querySelector(".multiply button").style.cssText = operatorStyle;
        break;
        case "-":
          document.querySelector(".subtract button").style.cssText = operatorStyle;
        break;
        case "+":
          document.querySelector(".add button").style.cssText = operatorStyle;
        break;
      }
    }
  })

  switch(e.key) {
    case "c":
      clearScreen();
      clear.style.cssText = "opacity: 0.9; box-shadow: 0px 0px 0px 3px #d1671b inset;"
    break;
    case "Backspace":
      backspaceScreen();
      backspace.style.cssText = "opacity: 0.9; box-shadow: 0px 0px 0px 3px #8342e4 inset;"
    break;
    case "=":
    case "Enter":
      handleCalculation(previousOperator, screenValue);
      document.querySelector(".equals button").style.cssText = operatorStyle;
    break;
  }
})

document.addEventListener("keyup", function(e) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.cssText = "opacity = 1; box-shadow: none;"
  })
})
