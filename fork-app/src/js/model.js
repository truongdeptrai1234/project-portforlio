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
  bookmarks: [],
};

const loadRecipe = async function (id) {
  try {
    if (!id) return;
    const data = await Promise.race([
      getJSON(`${API_URL}/${id}`),
      timeout(TIME_OUT),
    ]);
    state.recipe = data;
    state.recipe.bookmark = state.bookmarks.some(
      (bookmark) => bookmark.recipe.id === id
    );
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
    state.search.page = 1; //reset page to 1
    state.search.result = data.recipes;
    state.search.totalPage = Math.ceil(
      state.search.result.length / RES_PER_PAGE
    );
  } catch (error) {
    throw error;
  }
};
const getPaginationPage = function (page) {
  return (state.search.pagResult = state.search.result.slice(
    (page - 1) * RES_PER_PAGE,
    page * RES_PER_PAGE
  ));
};
const updateServings = function (newServings) {
  state.recipe.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.recipe.servings;
  });
  state.recipe.recipe.servings = newServings;
};
const addBookmark = function () {
  state.recipe.bookmark = state.recipe.bookmark ? false : true;
  state.bookmarks = state.recipe.bookmark
    ? [...state.bookmarks, state.recipe]
    : state.bookmarks.filter(
        (bookmark) => bookmark.recipe.id !== state.recipe.recipe.id
      );
};
const storageBookmarks = function () {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  if (!bookmarks || bookmarks.length === 0) return;

  state.bookmarks = bookmarks;
};
const setBookmarkStorage = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const clearBookmarkStorage = function () {
  localStorage.removeItem("bookmarks");
};
const init = function () {
  storageBookmarks();
};
init();
export {
  state,
  loadRecipe,
  loadSearchResult,
  getPaginationPage,
  updateServings,
  addBookmark,
  storageBookmarks,
  setBookmarkStorage,
};
