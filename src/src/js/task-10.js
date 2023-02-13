function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls").firstElementChild;

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {

  for (let i = 0; i < controls.value; i += 1) {
  boxes.innerHTML += `<div style="width:${30 + i * 10}px; height:${30 + i * 10}px; margin-bottom:10px; background-color:${getRandomHexColor()};"></div>`
  }

} function destroyBoxes() {
  boxes.innerHTML = ""
}