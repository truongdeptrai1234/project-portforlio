import "core-js/stable";
import "regenerator-runtime/runtime";
import { API_URL, TIME_OUT } from "./config";
import { getJSON, timeout } from "./View/helper";

const state = {
  recipe: {},
  data: {},
};

const loadRecipe = async function (id) {
  try {
    if (!id) return;
    const data = await Promise.race([
      getJSON(`${API_URL}/${id}`),
      timeout(TIME_OUT),
    ]);
    state.recipe = data;
  } catch (error) {
    throw error;
  }
};
export { state, loadRecipe };
