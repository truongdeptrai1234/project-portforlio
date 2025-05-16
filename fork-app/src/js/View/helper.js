// store reuse function

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
