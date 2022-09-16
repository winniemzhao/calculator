
// selecting result
const result = document.querySelector("#resultValue");
// let resultValue = Number.parseInt(result.innerText);
console.log(result);

// clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  // resultValue = 0;
  result.innerText = 0;
})

// backspace button
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function (event) {
  if (result.innerText.length > 1) {
    result.innerText = result.innerText.slice(0, -1);
  } else {
    result.innerText = 0;
  }
});
