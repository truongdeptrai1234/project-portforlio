import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import viewRecipes from "./View/viewRecipes.js";
import viewSearch from "./View/viewSearch.js";
import viewSearchResult from "./View/viewSearchResult.js";
import viewPagResult from "./View/viewPagResult.js";
import viewBookmark from "./View/viewBookmark.js";

const loadRecipeController = async function () {
  try {
    const id = window.location.hash.slice(1);
    viewSearchResult.updateDOM(model.state.search.pagResult, id);
    model.state.bookmarks.length > 0 &&
      viewBookmark.updateDOM(model.state.bookmarks, id);
    viewRecipes.loadingSpinner();
    await model.loadRecipe(id);
    viewRecipes.render(model.state.recipe);
  } catch (error) {
    console.log(error.message);
    viewRecipes.renderError();
  }
};
const searchController = async function () {
  try {
    viewSearchResult.loadingSpinner();
    const query = viewSearch.getQuery();
    if (!query) return;
    await model.loadSearchResult(query);
  } catch (error) {
    console.log(error);
    viewSearchResult.renderError();
  }
};
const paginationController = async function () {
  try {
    const page = model.state.search.page;
    viewSearchResult.render(model.getPaginationPage(page));
    viewPagResult.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};
const pageUpdateController = async function (btnType) {
  btnType === "next" ? model.state.search.page++ : model.state.search.page--;
  paginationController();
};
const updateServingsController = function (newServings) {
  if (newServings < 1) return;
  model.updateServings(newServings);
  viewRecipes.updateDOM(model.state.recipe); //not re-render the whole DOM
};
const addBookmarkController = function () {
  console.log("recipe check bookmark");
  model.addBookmark();
  viewRecipes.updateDOM(model.state.recipe);
  viewBookmark.render(model.state.bookmarks);
};
const init = function () {
  viewRecipes.addLoadRecipeHandler(loadRecipeController);
  viewRecipes.addUpdateServingsHandler(updateServingsController);
  viewRecipes.addBookmarkHandler(addBookmarkController);
  viewSearch.addLoadSearchHandler(searchController, paginationController);
  viewPagResult.addButtonPagHandler(pageUpdateController);
};
init();

///////////////////////////////////////
