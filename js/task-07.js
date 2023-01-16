/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const range = document.getElementById("font-size-control");
const textToChange = document.getElementById("text");

range.addEventListener("input", () => {
  textToChange.style.fontSize = `${Number(range.value)}px`;
});
