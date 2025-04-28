import "core-js/stable";
import "regenerator-runtime/runtime";
import { API_URL, TIME_OUT, RES_PER_PAGE } from "./config";
import { getJSON, timeout } from "./View/helper";

const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
    page: 1,
    totalPage: 0,
    pagResult: [],
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
    state.search.totalPage = Math.ceil(
      state.search.result.length / RES_PER_PAGE
    );
  } catch (error) {
    throw error;
  }
};
const getPaginationPage = function (page) {
  try {
    return (state.search.pagResult = state.search.result.slice(
      (page - 1) * RES_PER_PAGE,
      page * RES_PER_PAGE
    ));
  } catch (error) {
    console.log(error);
  }
};

export { state, loadRecipe, loadSearchResult, getPaginationPage };
