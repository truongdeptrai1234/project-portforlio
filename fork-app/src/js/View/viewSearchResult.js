import icons from "url:../../img/icons.svg";
import View from "./view";
class viewSearchResult extends View {
  //private field

  _parentEle = document.querySelector(".results");
  _errorMessage = "recipe list not found, please try again 🍟🍟";
  _successMessage = "";
  //method

  render(data) {
    if (!data || data.length === 0) return this.renderError();
    this._data = data;
    this._clear();
    const mark = this.#renderListRecipe(this._data);
    this._parentEle.insertAdjacentHTML("afterbegin", mark);
  }

  #generateHtml(data = "") {
    return `<li class="preview">
            <a class="preview__link preview__link--active" href="#${data.id}">
              <figure class="preview__fig">
                <img src="${data.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${data.title}</h4>
                <p class="preview__publisher">${data.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
    </li>`;
  }

  #renderListRecipe(data = "") {
    return data.map((rc) => this.#generateHtml(rc)).join("");
  }
}
export default new viewSearchResult();
