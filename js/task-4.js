const valueRef = document.querySelector("#value");
const decrementBtnRef = document.querySelector("[data-action = decrement]");
const incrementBtnRef = document.querySelector("[data-action =increment");

incrementBtnRef.addEventListener("click", incrementValue);
decrementBtnRef.addEventListener("click", decrementValue);

function incrementValue() {
  let result = Number(valueRef.textContent);
  result += 1;
  valueRef.textContent = result;
}

function decrementValue() {
  let result = Number(valueRef.textContent);
  result -= 1;
  valueRef.textContent = result;
}
