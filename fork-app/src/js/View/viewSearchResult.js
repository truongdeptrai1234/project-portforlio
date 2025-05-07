import icons from "url:../../img/icons.svg";
import View from "./view";
class viewSearchResult extends View {
  //private field

  _parentEle = document.querySelector(".results");
  _errorMessage = "recipe list not found, please try again 🍟🍟";
  _successMessage = "";
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
        cur.firstChild?.nodeValue.trim() !==
        newDOM[i].firstChild?.nodeValue.trim()
      ) {
        cur.textContent = newDOM[i].textContent;
        cur.classList = newDOM[i].classList;
        console.log(cur, newDOM[i]);
      }
      if (
        Array.from(cur.classList).at(-1) !==
        Array.from(newDOM[i].classList).at(-1)
      ) {
        cur.classList.toggle("preview__link--active");
      }
    });
  }
  render(data, hashId = "") {
    if (!data || data.length === 0) return this.renderError();
    this._data = data;
    this._clear();
    const mark = this.#renderListRecipe(this._data, hashId);
    this._parentEle.insertAdjacentHTML("afterbegin", mark);
  }

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

  #renderListRecipe(data = "", hashId) {
    return data.map((rc) => this.#generateHtml(rc, hashId)).join("");
  }
}
export default new viewSearchResult();
