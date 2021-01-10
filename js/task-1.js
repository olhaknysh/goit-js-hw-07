const listItemsRef = document.querySelectorAll("li.item");

const amountListItems = listItemsRef.length;
console.log(`В списке ${amountListItems} категории.`);

const arraylistItemsRef = [...listItemsRef];

arraylistItemsRef.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.innerHTML}`);
  console.log(
    `Количество элементов: ${item.lastElementChild.childElementCount}`
  );
});
