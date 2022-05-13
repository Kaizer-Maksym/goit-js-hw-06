const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredientsElements = (elements) => {
  return elements.map((element) => {
    const navEl = document.createElement("li");
    navEl.classList = "item";
    navEl.textContent = element;
    return navEl;
  });
};

const ingredientsEl = createIngredientsElements(ingredients);

ingredientsList.append(...ingredientsEl);

// console.log(ingredientsEl);
