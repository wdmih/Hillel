/// /////////////////////////
/// TO CLASS
/// /////////////////////////

class IngredientsList {
  constructor() {
    this.items = [];
  }
  add(ingredient) {
    this.items.push(ingredient);
  }
  getAll() {
    return this.items;
  }
  getByName(name) {
    return this.items.find(function(item) {
      return item.name === name;
    });
  }
}

let myIngredients = new IngredientsList();
myIngredients.add({ name: 'tequila', price: 5 });
myIngredients.add({ name: 'vodka', price: 3 });
console.log(myIngredients.getByName('vodka'));
