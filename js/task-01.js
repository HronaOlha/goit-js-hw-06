// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item:

const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);

// 2. Для кожного eлемента li.item у списку ul#categories, знайде і виведе в консоль текст
// заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

numberOfCategories.forEach((itemOfList) => {
  const title = itemOfList.firstElementChild.textContent;
  const numberOfElements = itemOfList.lastElementChild.children.length;
  console.log(`Category:${title}
  Elements: ${numberOfElements}`);
});
