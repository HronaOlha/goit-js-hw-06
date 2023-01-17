function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("#controls input");
const boxCotainer = document.getElementById("boxes");

create.addEventListener("click", handleCreateEl);

function handleCreateEl() {
  for (i = 0; (i = Number(input.ariaValueMax)); i += 1) {
    const newEl = document.createElement("div");

    newEl.style.width = "30px";
    newEl.style.height = "30px";
    newEl.style.backgroundColor = getRandomHexColor();

    boxCotainer.append(newEl);
  }
}
