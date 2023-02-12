function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector(".widget");

widget.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget(getRandomHexColor());


	const value = document.querySelector(".color");
  value.textContent = getRandomHexColor();

/*   event.currentTarget.reset(); */
}
