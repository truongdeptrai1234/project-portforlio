import icons from "url:../../img/icons.svg";
import View from "./view";
class viewBookmark extends View {
  //private field
  _data;
  _parentEle = document.querySelector(".bookmarks__list");
  _errorMessage = "";
  _successMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
  //method

  #generateHtml(data = "", hashId) {
    return `<li class="preview">
            <a class="preview__link ${
              data.recipe.id === hashId ? "preview__link--active" : ""
            }" href="#${data.recipe.id}">
              <figure class="preview__fig">
                <img src="${data.recipe.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${data.recipe.title}</h4>
                <p class="preview__publisher">${data.recipe.publisher}</p>
                <div class="preview__user-generated ${
                  data.recipe.key ? "" : "hidden"
                }">
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
export default new viewBookmark();
