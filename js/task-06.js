/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

- Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
- Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання. 
*/

const input = document.getElementById("validation-input");
const requiredLength = Number(input.dataset.length);

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === requiredLength) {
    input.classList.add("valid") || input.classList.replace("invalid", "valid");
  }
  if (event.currentTarget.value.length !== requiredLength) {
    input.classList.replace("valid", "invalid") ||
      input.classList.add("invalid");
  }
});
