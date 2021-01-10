const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleCorrectLength);

function handleCorrectLength(event) {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
}
