const amountValueRef = document.querySelector("input[type = number]");
const renderBtnRef = document.querySelector("button[data-action = render]");
const destroyBtnRef = document.querySelector("button[data-action = destroy]");
const boxesContainerRef = document.querySelector("#boxes");

renderBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = amountValueRef.value;
  let boxes = [];
  for (let i = 0; i < amount; i += 1) {
    let box = boxes[i];
    box = document.createElement("div");
    box.classList.add("box");

    box.style.backgroundColor = getRandomColor();

    let sizeValue = 30 + 10 * i;
    box.style.height = `${sizeValue}px`;
    box.style.width = `${sizeValue}px`;

    boxes.push(box);
  }

  boxesContainerRef.append(...boxes);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function destroyBoxes() {
  const boxes = document.querySelectorAll(".box");
  const result = [...boxes].map((box) => box.remove());
  return result;
}
