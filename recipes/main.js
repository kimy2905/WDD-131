import { recipes } from './recipes.mjs';

const container = document.getElementById('recipe-container');

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}">
    <h2>${recipe.name}</h2>
    <p><strong>Author:</strong> ${recipe.author}</p>
    <p><strong>Description:</strong> ${recipe.description}</p>
    <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>
    <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
    <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <h3>Instructions:</h3>
    <ol>
      ${recipe.recipeInstructions.map(step => `<li>${step}</li>`).join('')}
    </ol>
    <p><strong>Rating:</strong> ${recipe.rating}/5</p>
  `;

  container.appendChild(card);
}

recipes.forEach(createRecipeCard);

