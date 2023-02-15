const inputFsText = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${inputFsText.value}px`

inputFsText.addEventListener('input', (event) => {

text.style.fontSize = `${event.currentTarget.value}px`;

})