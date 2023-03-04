const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector('#ingredients');

function addIngredientsLi (array) {
  const allLi = array.map(elem => {
    const ingredientLi = document.createElement("li");
    ingredientLi.textContent = elem;
    ingredientLi.classList.add("item");
    return ingredientLi;
    })
  ulIngredients.append(...allLi);
}

addIngredientsLi(ingredients);

// function addIngredientsLi (array) {
//   const allLi = [];
//   array.forEach(elem => {
//     const ingredientLi = document.createElement("li");
//     ingredientLi.textContent = elem;
//     ingredientLi.classList.add("item");
//     allLi.push(ingredientLi);
//     })
//   ulIngredients.append(...allLi);
// }

