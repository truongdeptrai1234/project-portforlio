import icons from "url:../../img/icons.svg";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Fraction from "fraction.js";
import View from "./view";
class viewRecipes extends View {
  //public field
  //private field
  _data;
  _parentEle = document.querySelector(".recipe");
  _errorMessage = "Could not find the recipe 🍕🍕";
  _successMessage = "";
  //method
  updateDOM(data) {
    const curDOM = Array.from(this._parentEle.querySelectorAll("*"));
    //create a virtual DOM
    const newDOM = Array.from(
      document
        .createRange()
        .createContextualFragment(this._recipeRender(data))
        .querySelectorAll("*")
    );
    //compare two DOM
    curDOM.forEach((cur, i) => {
      if (
        cur.firstChild?.nodeValue.trim() !==
          newDOM[i].firstChild?.nodeValue.trim() ||
        cur.firstElementChild?.outerHTML !==
          newDOM[i].firstElementChild?.outerHTML
      ) {
        cur.innerHTML = newDOM[i].innerHTML;
      }
    });
  }
  render(data = "") {
    if (!data) return;
    this._data = data;

    const html = this._recipeRender(this._data);
    this._clear();
    this._parentEle.insertAdjacentHTML("afterbegin", html);
    return this;
  }

  #generateHtmlIng(data) {
    return data.recipe.ingredients
      .map((ing) =>
        ing
          ? `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${
            ing.quantity ? new Fraction(ing.quantity).toFraction() : ""
          }</div>
          <div class="recipe__description">
            <span class="recipe__unit">${ing.unit ?? ""}</span>
            ${ing.description ?? ""}
          </div>
        </li>`
          : ""
      )
      .join("");
  }
  _recipeRender(data = "") {
    if (!data) return;
    return `<figure class="recipe__fig">
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
                <use href="${icons}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${
                data.recipe.cooking_time
              }</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${icons}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${
                data.recipe.servings
              }</span>
              <span class="recipe__info-text">servings</span>
              
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--decrease-servings">
                  <svg>
                    <use href="${icons}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="${icons}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
              
            </div>
  
            <div class="recipe__user-generated ${
              data.recipe.key ? "" : "hidden"
            }">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round">
              <svg class="">
                <use href="${icons}#icon-bookmark${
      data.bookmark ? "-fill" : ""
    }"></use>
              </svg>
            </button>
          </div>
  
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this.#generateHtmlIng(data)}
            
            </ul>
          </div>
  
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${
                data.recipe.publisher
              }</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${data.recipe.source_url}"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>`;
  }
}

export default new viewRecipes();
