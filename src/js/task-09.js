function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector("body");
const colorName = document.querySelector(".color");
const onColor = document.querySelector(".change-color");

onColor.addEventListener("click", () => {
  background.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = `${getRandomHexColor()}`;
});
