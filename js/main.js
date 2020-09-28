import Search from "./models/Search.js";
import { elements } from "./views/base.js";
import { onSubmit, addRecipes, clearShowcase } from "./views/SearchView.js";
import { showList, addIngredients } from "./views/ListView.js";
import Recipe from "./models/List.js";

const state = {
  currentRecipeId: "",
  inputValue: "",
};

elements.form.addEventListener("submit", async () => {
  state.inputValue = document.querySelector(".form__input").value;
  let isOk = onSubmit(state.inputValue);
  if (!isOk) {
    elements.alertbox.classList.add("alertbox--active");
    setTimeout(function () {
      elements.alertbox.classList.remove("alertbox--active");
    }, 1500);
  } else {
    let query = new Search(state.inputValue);
    await query.getResults();
    clearShowcase(elements.showcase);
    addRecipes(query.result.recipes);
    elements.cardButtons = document.querySelectorAll(".card button");
    elements.cardButtons.forEach((el) => {
      el.addEventListener("click", async () => {
        state.currentRecipeId = el.getAttribute("data-id");
        let rec = new Recipe(state.currentRecipeId);
        await rec.getRecipe();
        addIngredients(rec.result.recipe.ingredients);
      });
    });
  }
});

elements.bookmark.addEventListener("click", showList);
