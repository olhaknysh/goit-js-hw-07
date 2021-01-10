const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", handleRangeChange);

function handleRangeChange(event) {
  let fontSize = event.target.value;
  textRef.style.fontSize = `${fontSize}px`;
}
