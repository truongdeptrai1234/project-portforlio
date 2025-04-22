import "core-js/stable";
import "regenerator-runtime/runtime";

const state = {
  data: {},
};

const loadRecipe = async function (id) {
  if (!id) return;

  const recipe = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes/${id}`
  );
  if (!recipe.ok) throw new Error(`error :${recipe.status}`);
  const { data } = await recipe.json();
  return data;
};
export { loadRecipe };
