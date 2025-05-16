import icons from "url:../../img/icons.svg";
import View from "./view";
class viewAddRecipe extends View {
  //public field
  //private field
  _parentEle = document.querySelector(".upload");
  _errorMessage = "Wrong input format, please try again 🍕🍕";
  _successMessage = "Recipe successfully loaded";
  _modal = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _openModalButton = document.querySelector(".nav__btn--add-recipe");
  _closeModalButton = document.querySelector(".btn--close-modal");
  constructor() {
    super();
    this._modalOpenHandler();
    this._modalCloseHandler();
  }
  render() {
    const html = this.#generateHtml();
    this._clear();
    this._parentEle.insertAdjacentHTML("afterbegin", html);
    return this;
  }
  _toggleModal() {
    this._modal.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
  }
  //method
  _modalOpenHandler() {
    this._openModalButton.addEventListener("click", () => {
      this.render();
      this._modal.classList.toggle("hidden");
      this._overlay.classList.toggle("hidden");
    });
  }
  _modalCloseHandler() {
    this._closeModalButton.addEventListener("click", () => {
      this._modal.classList.toggle("hidden");
      this._overlay.classList.toggle("hidden");
    });
    this._overlay.addEventListener("click", () => {
      this._modal.classList.toggle("hidden");
      this._overlay.classList.toggle("hidden");
    });
  }
  #generateHtml() {
    return `
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `;
  }
}

export default new viewAddRecipe();
