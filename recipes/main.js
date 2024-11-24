import { recipes } from './recipes.mjs';

function getRandomListEntry(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <div class="recipe-content">
                <div class="image-container">
                    <img src="${recipe.image}" alt="image of ${recipe.name}">
                </div>
                <div class="recipe-details">
                    <h2><a href="#">${recipe.name}</a></h2>
                    <ul class="recipe__tags">
                        ${tagsTemplate(recipe.tags)}
                    </ul>
                    <p class="recipe__ratings">
                        ${ratingTemplate(recipe.rating)}
                    </p>
                    <p class="recipe__description">
                        ${recipe.description}
                    </p>
                </div>
            </div>
        </div>
    `;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById('recipe-container');

    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');

    recipeContainer.innerHTML = recipesHTML;
}

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const descriptionMatch = recipe.description.toLowerCase().includes(query);
        const tagsMatch = recipe.tags.some(tag => tag.toLowerCase().includes(query));
        const ingredientsMatch = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query));
        
        return nameMatch || descriptionMatch || tagsMatch || ingredientsMatch;
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
    e.preventDefault();

    const query = document.getElementById('search').value.toLowerCase();

    const filteredRecipes = filterRecipes(query);

    renderRecipes(filteredRecipes);
}


function init() {
    const recipe = getRandomListEntry(recipes);  

    renderRecipes([recipe]); 
}

document.querySelector('.search form').addEventListener('submit', searchHandler);

init();


