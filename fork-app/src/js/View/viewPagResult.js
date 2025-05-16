import icons from "url:../../img/icons.svg";
import View from "./view";

class ViewPagResult extends View {
  //protected field
  _data = "";
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

  #checkPagination(data) {
    if (data.totalPage === 1) return "";
    if (data.page === 1) return this._buttonNextMarkupHtml(data);
    if (data.page > 1 && data.page < data.totalPage)
      return (
        `${this._buttonPrevMarkupHtml(data)}` +
        `${this._buttonNextMarkupHtml(data)}`
      );
    if (data.page === data.totalPage)
      return `${this._buttonPrevMarkupHtml(data)}`;
  }

  _buttonPrevMarkupHtml(data = "") {
    return `<button class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>${
                data.page === data.totalPage
                  ? "Previous"
                  : `Page ${data.page - 1}`
              }</span>
            </button>`;
  }
  _buttonNextMarkupHtml(data = "") {
    return `<button class="btn--inline pagination__btn--next">
              <span>${data.page === 1 ? "Next" : `Page ${data.page + 1}`}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button>`;
  }
  #generateHtml(data = "") {
    if (!data || data.result.length === 0) return "";
    return this.#checkPagination(data);
  }
}
export default new ViewPagResult();
