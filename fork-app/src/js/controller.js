import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import view from "./View/view.js";

const loadRecipeController = async function () {
  try {
    const id = window.location.hash.slice(1);
    view.loadSpinner();
    await model.loadRecipe(id);

    view.render(model.state.recipe);
  } catch (error) {
    console.log(error.message);
  }
};

const init = function () {
  view.addLoadRecipeHandler(loadRecipeController);
};
init();
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
