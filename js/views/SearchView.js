import { elements } from "./base.js";

function onSubmit(str) {
  const reg = /^[A-Za-z ]+$/;
  return reg.test(str);
}

function addRecipes(recipes) {
  recipes.forEach((recipe) => {
    let card = `
    <dic class="card">
    <a href=${recipe.source_url}"  class="card__image">
      <img src=${recipe.image_url}></img>
    </a>
    <h2 class="card__title">${makeTitleShorter(recipe.title)}</h2>
    <button class="card__button" data-id="${
      recipe.recipe_id
    }">add ingredients</button>
    </div>
    `;
    elements.showcase.insertAdjacentHTML("beforeend", card);
  });
}

function clearShowcase(el) {
  el.innerHTML = "";
}

function makeTitleShorter(str) {
  let strArr = str.split(" ");
  let result = "";

  if (strArr.length > 3) {
    strArr.forEach((word) => {
      if (result.trim().length <= 16) {
        result += ` ${word}`;
      }
    });
    result += " ...";
  } else {
    result = str;
  }
  return result;
}

export { onSubmit, addRecipes, clearShowcase };
