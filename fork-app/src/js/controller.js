import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import view from "./View/view.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const loadRecipeController = async function () {
  try {
    const id = window.location.hash.slice(1);
    view.loadSpinner();
    await model.loadRecipe(id);

    view.render(model.state.recipe);
    // 664c8f193e7aa067e94e8297
    // 664c8f193e7aa067e94e897b
  } catch (error) {
    console.log(error.message);
  }
};

window.addEventListener("hashchange", loadRecipeController);
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
