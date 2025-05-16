// store reuse function

// export const getJSON = async function (url) {
//   try {
//     const recipe = await fetch(url);

//     if (!recipe.ok) throw new Error(`error getjson:${recipe.status} `);
//     const { data } = await recipe.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
// export const sendJSON = async function (url, uploadRecipe) {
//   try {
//     const sendPro = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(uploadRecipe),
//     });
//     if (!sendPro.ok) throw new Error(`error sendjson:${sendPro.status} `);
//     const data = await sendPro.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
export const AJAX = async function (url, uploadRecipe = null) {
  try {
    const pro = uploadRecipe
      ? await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadRecipe),
        })
      : await fetch(url);
    if (!pro.ok) throw new Error(`error with ajax:${pro.status} `);
    const data = await pro.json();
    return uploadRecipe ? data : data.data;
  } catch (error) {
    throw error;
  }
};
export const inputFormValidate = function (input, type) {
  switch (type) {
    case "text":
      return input.trim() !== "";
    case "number":
      return !isNaN(input) && input > 0;
    case "url":
      return /^https?:\/\/.+\..+/.test(input);
    default:
      return false;
  }
};
