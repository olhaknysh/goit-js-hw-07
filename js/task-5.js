const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", handleInput);

function handleInput(event) {
  outputRef.textContent = event.target.value;
  if (outputRef.textContent === "") {
    outputRef.textContent = "незнакомец";
  }
}
