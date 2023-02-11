let counterValue = document.querySelector("#value");
counterValue = 0;

/* console.log( counterValue) */

const upBtn = document.querySelector('button[data-action="increment"]');
const downBtn = document.querySelector('button[data-action="decrement"]');

const handleClick = () => {
    console.log("click event listener callback");
};

/* upBtn.addEventListener("click", handleClick);
downBtn.addEventListener("click", handleClick); */

const result = counterValue - upBtn.addEventListener("click", handleClick)
    + downBtn.addEventListener("click", handleClick);
console.log( result)

/* counterValue.insertAdjacentHTML("beforebegin", result); */