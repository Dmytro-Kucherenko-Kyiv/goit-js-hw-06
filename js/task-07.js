const inputFsText = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputFsText.addEventListener('input', (event) => {

text.style.fontSize = `${event.currentTarget.value}px`;

})