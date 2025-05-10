import icons from "url:../../img/icons.svg";
import View from "./view";
class viewSearchResult extends View {
  //private field
  _parentEle = document.querySelector(".results");
  _errorMessage = "recipe list not found, please try again 🍟🍟";
  _successMessage = "";
  //method
  #generateHtml(data = "", hashId) {
    return `<li class="preview">
            <a class="preview__link ${
              data.id === hashId ? "preview__link--active" : ""
            }" href="#${data.id}">
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
  _renderListRecipe(data = "", hashId) {
    return data.map((rc) => this.#generateHtml(rc, hashId)).join("");
  }
}
export default new viewSearchResult();
