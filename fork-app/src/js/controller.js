import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import viewRecipes from "./View/viewRecipes.js";
import viewSearch from "./View/viewSearch.js";
import viewSearchResult from "./View/viewSearchResult.js";

const loadRecipeController = async function () {
  try {
    const id = window.location.hash.slice(1);
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
    viewSearchResult.render(model.state.search.result);
  } catch (error) {
    console.log(error);
    viewSearchResult.renderError();
  }
};
const init = function () {
  viewRecipes.addLoadRecipeHandler(loadRecipeController);
  viewSearch.addLoadSearchHandler(searchController);
};
init();
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
