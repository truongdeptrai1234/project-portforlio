import icons from "url:../../img/icons.svg";
import View from "./view";

class ViewPagResult extends View {
  //protected field
  _parentEle = document.querySelector(".pagination");
  _errorMessage = "";
  //method
  render(data) {
    this._data = data;
    this._clear();
    this._parentEle.insertAdjacentHTML(
      "afterbegin",
      this.#generateHtml(this._data)
    );
  }
  #generateHtml(data = "") {
    return `<button class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page 1</span>
            </button>
            <button class="btn--inline pagination__btn--next">
              <span>Page 3</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button>`;
  }
}
export default new ViewPagResult();
