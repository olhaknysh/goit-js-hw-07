const valueRef = document.querySelector("#value");
const decrementBtnRef = document.querySelector("[data-action = decrement]");
const incrementBtnRef = document.querySelector("[data-action =increment");
let numberValue = Number(valueRef.textContent);

incrementBtnRef.addEventListener("click", incrementValue);
decrementBtnRef.addEventListener("click", decrementValue);

function incrementValue() {
  numberValue += 1;
  valueRef.innerHTML = numberValue;
}

function decrementValue() {
  numberValue -= 1;
  valueRef.innerHTML = numberValue;
}
