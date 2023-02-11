/* 1/ Порахує і виведе в консоль кількість категорій в ul#categories, 
тобто елементів li.item. */

const allCategories = () => {
  const categoriesEl = document.querySelector('ul#categories');
  /* console.log(categoriesEl); */

  const liItemEl = categoriesEl.querySelectorAll('li.item');
  /* console.log(liItemEl); */
  liItemEl.forEach(function (number, index) {
  console.log(`Індекс ${fist}, значення ${number}`);
});


console.log(`Number of categories: ${liItemEl.lenght}`);

}
/* const listCategories = document.querySelector('#categories');

for (let i = 0; i < listCategories.length; i += 1) {
  console.log(`Number of categories: ${numbers[i]}`);
} */