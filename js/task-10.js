function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlDiv = document.querySelector("#controls");
const numberInput = document.querySelector("input");
const boxesDiv = document.querySelector("#boxes");

const createBtn = controlDiv.children[1];
const destroyBtn = controlDiv.children[2];

let value = 30;

function createBoxes(amount) {
  const allBoxes = [...new Array(Number(amount))].map(() => {
    value += 10;
    const content = document.createElement("div");
    content.class = "newBoxes";
    content.style.width = `${value}px`;
    content.style.height = `${value}px`;
    content.style.backgroundColor = `${getRandomHexColor()}`;
    return content;
  });
  console.log(...allBoxes);
  boxesDiv.append(...allBoxes);
}

function destroyBoxes() {
  value = 30;
  const result = (boxesDiv.innerHTML = "");
  return result;
}

createBtn.addEventListener("click", () => createBoxes(numberInput.value));
destroyBtn.addEventListener("click", () => destroyBoxes());
