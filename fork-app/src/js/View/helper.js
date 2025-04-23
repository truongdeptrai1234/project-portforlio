// store reuse function

export const getJSON = async function (url) {
  try {
    const recipe = await fetch(url);

    if (!recipe.ok) throw new Error(`error getjson:${recipe.status} `);
    const { data } = await recipe.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
