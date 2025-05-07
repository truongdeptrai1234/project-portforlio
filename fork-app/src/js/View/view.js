import icons from "url:../../img/icons.svg"; // Parcel 2

export default class View {
  //private field
  //public field

  //method

  loadingSpinner() {
    const mark = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
        `;
    this._clear();
    this._parentEle.insertAdjacentHTML("afterbegin", mark);
  }
  renderError() {
    const mark = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${this._errorMessage}</p>
      </div>`;
    this._clear();
    this._parentEle.insertAdjacentHTML("afterbegin", mark);
  }
  renderMessage(message = this._successMessage) {
    const mark = `
          <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
      `;
    this._clear();
    this._parentEle.insertAdjacentHTML("afterbegin", mark);
  }
  _clear() {
    this._parentEle.innerHTML = "";
  }
  _clearInput() {
    this._parentEle.querySelector(".search__field").value = "";
  }
  addLoadRecipeHandler(handler) {
    window.addEventListener("hashchange", handler);
  }
  addLoadSearchHandler(...handlers) {
    this._parentEle.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        for (const handler of handlers) {
          await handler();
        }
      } catch (err) {
        console.log(err);
      }
    });
  }

  addButtonPagHandler(handler) {
    this._parentEle.addEventListener("click", function (e) {
      if (e.target.closest(".pagination__btn--prev")) {
        handler("prev");
      }
      if (e.target.closest(".pagination__btn--next")) {
        handler("next");
      }
    });
  }
  addUpdateServingsHandler(handler) {
    const thisRecipe = this;
    this._parentEle.addEventListener("click", function (e) {
      let serving = +thisRecipe._parentEle.querySelector(
        ".recipe__info-data--people"
      ).textContent;
      if (e.target.closest(".btn--increase-servings")) handler(++serving);
      if (e.target.closest(".btn--decrease-servings")) handler(--serving);
    });
  }
}
