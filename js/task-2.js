const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const itemsList = ingredients.reduce((acc, item) => {
  const itemList = document.createElement("li");
  itemList.textContent = item;
  acc.push(itemList);
  return acc;
}, []);

listRef.append(...itemsList);
