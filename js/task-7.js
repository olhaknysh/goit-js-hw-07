const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = "30px";
let valueRangeMiddle = inputRef.value;

inputRef.addEventListener("input", handleRangeChange);

function handleRangeChange(event) {
  if (event.target.value > valueRangeMiddle) {
    increaseText();
  } else if (event.target.value < valueRangeMiddle) {
    decreaseText();
  }
  valueRangeMiddle = event.target.value;
}

let number = parseInt(textRef.style.fontSize);

function increaseText() {
  number += 0.5;
  textRef.style.fontSize = `${number}px`;
}

function decreaseText() {
  number -= 0.5;
  textRef.style.fontSize = `${number}px`;
}
