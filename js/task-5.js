const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", handleInput);

function handleInput(event) {
  if (outputRef.innerHTML === "незнакомец") {
    outputRef.textContent = "";
    outputRef.textContent += event.data;
  } else if (event.data === null) {
    return;
  } else if (inputRef.textContent !== null) {
    outputRef.textContent += event.data;
    console.log(event.data);
  }
}
