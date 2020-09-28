export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
    );
    this.result = await response.json();
  }
}
