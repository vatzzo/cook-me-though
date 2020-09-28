export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
    );
    this.result = await response.json();
  }
}
