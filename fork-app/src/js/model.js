import "core-js/stable";
import "regenerator-runtime/runtime";
import { API_URL, TIME_OUT } from "./config";
import { getJSON, timeout } from "./View/helper";

const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
  },
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
const loadSearchResult = async function (query) {
  try {
    if (!query) return;
    const data = await Promise.race([
      getJSON(`${API_URL}?search=${query}`),
      timeout(TIME_OUT),
    ]);
    state.search.query = query;
    state.search.result = data.recipes;
  } catch (error) {
    throw error;
  }
};
export { state, loadRecipe, loadSearchResult };
