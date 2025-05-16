import "core-js/stable";
import "regenerator-runtime/runtime";
import { API_URL, TIME_OUT, RES_PER_PAGE, KEY } from "./config";
import { AJAX, inputFormValidate, timeout } from "./View/helper";
import Fraction from "fraction.js";

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
      AJAX(`${API_URL}/${id}?key=${KEY}`),
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
      AJAX(`${API_URL}?search=${query}&key=${KEY}`),
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
    if (!ing) return;
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
const uploadRecipeData = async function (newRecipe) {
  try {
    console.log(state.recipe);
    console.log(newRecipe);
    const regexpIng = new RegExp(/(^\d+$)|\d[\W]\d,[a-z]/i);
    const ingredients = newRecipe
      .filter(([field]) => field.startsWith("ingredient"))
      .map(([, value]) => (value.match(regexpIng) ? value.split(",") : []))
      .map((value) => {
        const [quantity, unit, description] = value;
        if (!description) return null;
        console.log(quantity);
        return {
          quantity: quantity ? new Fraction(quantity).valueOf() : null,
          unit: unit ? unit.trim() : "",
          description: description.trim(),
        };
      });
    console.log(ingredients);
    const recipe = Object.fromEntries(newRecipe);
    const uploadRecipe = {
      title: inputFormValidate(recipe.title, "text") ? recipe.title : null,
      publisher: inputFormValidate(recipe.publisher, "text")
        ? recipe.publisher
        : null,
      source_url: inputFormValidate(recipe.sourceUrl, "url")
        ? recipe.sourceUrl
        : null,
      image_url: inputFormValidate(recipe.image, "url") ? recipe.image : null,
      servings: inputFormValidate(recipe.servings, "number")
        ? +recipe.servings
        : 1,
      cooking_time: inputFormValidate(recipe.cookingTime, "number")
        ? +recipe.cookingTime
        : 1,
      ingredients,
    };
    Object.values(uploadRecipe).forEach((value) => {
      console.log(value);
      if (!value || value.length === 0)
        throw new Error(
          "Please fill all the recipe data 's fields or check the format"
        );
    });
    const { data } = await AJAX(`${API_URL}?key=${KEY}`, uploadRecipe);
    state.recipe = data;
    addBookmark();
    //console.log(data);
  } catch (error) {
    throw error;
  }
};
//developer only
// const clearBookmarkStorage = function () {
//   localStorage.removeItem("bookmarks");
// };
// clearBookmarkStorage();
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
  uploadRecipeData,
};
