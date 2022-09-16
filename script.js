
// selecting result
const result = document.querySelector("#resultValue");
// let resultValue = Number.parseInt(result.innerText);

// clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  // resultValue = 0;
  result.innerText = 0;
})

// backspace button
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function () {
  if (result.innerText.length > 1) {
    result.innerText = result.innerText.slice(0, -1);
  } else {
    result.innerText = 0;
  }
});

// number buttons
const numbers = document.querySelectorAll(".number button");
numbers.forEach((number) => {
  number.addEventListener("click", function () {
    if (result.innerText === "0") {
      result.innerText = number.innerText
    } else {
      result.innerText = result.innerText + number.innerText;
    }
  });
});

// operator buttons

const operators = document.querySelectorAll(".operator button");
operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    console.log(operator.classList);
  });
});
