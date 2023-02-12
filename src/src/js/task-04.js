const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
	const value = document.querySelector("#value");
	value.textContent = parseInt(value.textContent) - 1;
});

incrementBtn.addEventListener("click", () => {
	const value = document.querySelector("#value");
	value.textContent = parseInt(value.textContent) + 1;
});