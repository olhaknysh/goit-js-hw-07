const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleCorrectLength);

const lengthCheck = function (item) {
  const result = item.value;
  return result.length;
};

function handleCorrectLength(event) {
  if (lengthCheck(event.target) === Number(event.target.dataset.length)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
}
