import "core-js/stable";
import "regenerator-runtime/runtime";

const state = {
  recipe: {},
  data: {},
};

const loadRecipe = async function (id) {
  if (!id) return;

  const recipe = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes/${id}`
  );
  if (!recipe.ok) throw new Error(`error :${recipe.status}`);
  const { data } = await recipe.json();
  console.log(data);
  state.recipe = data;
};
export { state, loadRecipe };
