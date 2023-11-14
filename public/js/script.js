let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientsList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0];


addIngredientsBtn.addEventListener('click', () => {
    let newIngredient = ingredientDiv.cloneNode(true);
    let input = newIngredient.getElementByTagname('input')[0];
    input.value = '';
    ingredientsList.appendChild(newIngredient);
})