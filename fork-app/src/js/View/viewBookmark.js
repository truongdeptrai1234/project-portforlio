import icons from "url:../../img/icons.svg";
import View from "./view";
class viewBookmark extends View {
  //private field
  _data;
  _parentEle = document.querySelector(".bookmarks__list");
  _errorMessage = "recipe list not found, please try again 🍟🍟";
  _successMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
  //method
  updateDOM(data, hashId) {
    const curDOM = Array.from(this._parentEle.querySelectorAll("*"));
    //create a virtual DOM

    const newDOM = Array.from(
      document
        .createRange()
        .createContextualFragment(this.#renderListRecipe(data, hashId))
        .querySelectorAll("*")
    );
    //compare two DOM
    curDOM.forEach((cur, i) => {
      if (
        Array.from(cur.classList).at(-1) !==
        Array.from(newDOM[i].classList).at(-1)
      ) {
        cur.classList.toggle("preview__link--active");
      }
    });
  }
  render(data, hashId = "") {
    this._parentEle.innerHTML = this.renderMessage(this._successMessage);
    if (!data || data.length === 0)
      return this.renderMessage(this._successMessage);
    this._data = data;
    this._clear();
    const mark = this.#renderListRecipe(this._data, hashId);
    this._parentEle.insertAdjacentHTML("afterbegin", mark);
  }

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
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
    </li>`;
  }

  #renderListRecipe(data = "", hashId) {
    return data.map((rc) => this.#generateHtml(rc, hashId)).join("");
  }
}
export default new viewBookmark();
