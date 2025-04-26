import View from "./view";

class viewSearch extends View {
  //private field

  _parentEle = document.querySelector(".search");
  _errorMessage = "invalid input";
  _successMessage = "";
  //public field

  //method
  getQuery() {
    const query = this._parentEle.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }
}
export default new viewSearch();
