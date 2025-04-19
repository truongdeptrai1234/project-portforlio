import "core-js/stable";
import "regenerator-runtime/runtime";
import icons from "url:../img/icons.svg";
const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
const loadSpinner = function (parentEle) {
  const mark = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>
  `;
  parentEle.innerHTML = "";
  parentEle.insertAdjacentHTML("afterbegin", mark);
};
const loadRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    loadSpinner(recipeContainer);
    const recipe = await fetch(
      `https://forkify-api.jonas.io/api/v2/recipes/${id}`
    );
    if (!recipe.ok) throw new Error(`error :${recipe.status}`);
    const { data } = await recipe.json();

    const html = `

    <figure class="recipe__fig">
        <img src="${data.recipe.image_url}" alt="${
      data.recipe.title
    }" class="recipe__img" />
            <h1 class="recipe__title">
              <span>${data.recipe.title}</span>
            </h1>
          </figure>
  
          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="/icons.21bad73c.svg#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${
                data.recipe.cooking_time
              }</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="/icons.21bad73c.svg#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${
                data.recipe.servings
              }</span>
              <span class="recipe__info-text">servings</span>
  
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="/icons.21bad73c.svg#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="/icons.21bad73c.svg#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>
  
            <div class="recipe__user-generated">
              <svg>
                <use href="/icons.21bad73c.svg#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round">
              <svg class="">
                <use href="/icons.21bad73c.svg#icon-bookmark-fill"></use>
              </svg>
            </button>
          </div>
  
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">

              ${data.recipe.ingredients
                .map(
                  (ing) => `
                  <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                      <use href="/icons.21bad73c.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${ing.quantity ?? ""}</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${ing.unit ?? ""}</span>
                      ${ing.description ?? ""}
                    </div>
                  </li>`
                )
                .join("")}
            
            </ul>
          </div>
  
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="/icons.21bad73c.svg#icon-arrow-right"></use>
              </svg>
            </a>
          </div>`;
    // 664c8f193e7aa067e94e8297
    // 664c8f193e7aa067e94e897b
    recipeContainer.innerHTML = "";
    recipeContainer.insertAdjacentHTML("afterbegin", html);
  } catch (error) {
    console.log(error.message);
  }
};

window.addEventListener("hashchange", loadRecipe);
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
