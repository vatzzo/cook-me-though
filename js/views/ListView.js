import { elements } from "./base.js";

function showList() {
  elements.bookmark.classList.add(`${elements.bookmark.classList[0]}--active`);
  elements.shopList.classList.add(`${elements.shopList.classList[0]}--active`);
  elements.removeShopListBtn.addEventListener("click", () => {
    elements.shopList.classList.remove(
      `${elements.shopList.classList[0]}--active`
    );
    elements.bookmark.classList.remove(
      `${elements.bookmark.classList[0]}--active`
    );
  });
}

function clearList() {
  elements.shopListIng.innerHTML = "";
}

function addIngredients(ingredients) {
  clearList();
  ingredients.forEach((ing) => {
    let li = `<li>${ing}</li>`;
    elements.shopListIng.insertAdjacentHTML("beforeend", li);
  });
}
export { showList, addIngredients };
