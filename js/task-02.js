const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientItems = elements => { 
  return elements.map(ingredient => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.classList.add('item');
    ingredientItemEl.textContent = ingredient;
    
    return ingredientItemEl;
  });
};

const ingredientsListEl = document.querySelector('#ingredients');
const ingredientsItems = makeIngredientItems(ingredients);
ingredientsListEl.append(...ingredientsItems);
