// Создать Объект cocktail следующей структуры:
// {name: String, ingredients: [{name: String, price: Number}], isAlcohol: Boolean, type: String}
// Поместить следующие методы в прототип: - getPrice (с помощью reduce)
// Создать Объект cocktails Поместить следующие методы в прототип:
// - добавить коктейль
// - удалить коктейль по имени
// - вернуть все
// - вернуть все безалкогольные
// - вернуть все алкогольные
/// ///////////////////////////////////////////////////////
/// / SOLUTION
/// ///////////////////////////////////////////////////////

function Cocktail(obj) {
  this.name = obj.name;
  this.ingredients = obj.ingredients;
  this.isAlcohol = obj.isAlcohol;
  this.type = obj.type;
}

Cocktail.prototype.getPrice = function() {
  return this.ingredients.reduce((prev, curr) => prev + curr.price, 0);
};

const cocktailsMethods = {
  addCocktail: function(newCocktailObj) {
    return this.list.push(new Cocktail(newCocktailObj));
  },
  removeCocktail: function(cocktailName) {
    let removed;
    this.list.forEach((elem, key, arr) => {
      if (elem.name === cocktailName) {
        removed = arr.splice(key, 1);
      }
    });
    return removed;
  },
  showAll: function() {
    return this.list.map(item => item.name);
  },
  showAlcohol: function() {
    return this.list.filter(item => item.isAlcohol === true).map(item => item.name);
  },
  showNonAlcohol: function() {
    return this.list.filter(item => item.isAlcohol === false).map(item => item.name);
  },
  showPrice: function(cocktailName) {
    return this.list.find(item => item.name === cocktailName).getPrice();
  }
};

let cocktails = Object.create(cocktailsMethods, {
  list: { value: new Array() }
});

/// ///////////////////////////////////////////////////////
/// / TESTS
/// ///////////////////////////////////////////////////////

cocktails.addCocktail({
  name: 'B52',
  ingredients: [
    {
      name: 'Kahlua',
      price: 14
    },
    {
      name: 'Irish Cream',
      price: 18
    }
  ],
  isAlcohol: true,
  type: 'shot'
});

console.log(cocktails.showAll());

cocktails.addCocktail({
  name: 'Black Rose',
  ingredients: [
    {
      name: 'Tequila Rose',
      price: 36
    },
    {
      name: 'Black Vodka',
      price: 21
    }
  ],
  isAlcohol: false,
  type: 'shot'
});

console.log(cocktails.showAll());

cocktails.addCocktail({
  name: 'Candy Corn',
  ingredients: [
    {
      name: 'Galliano Liqueur',
      price: 47
    },
    {
      name: 'Orange Curacao',
      price: 85
    },
    {
      name: 'Cream',
      price: 23
    }
  ],
  isAlcohol: true,
  type: 'shot'
});

console.log(cocktails.showAll());

cocktails.removeCocktail('Black Rose');
console.log(cocktails.removeCocktail('Candy Corn'));

console.log(cocktails.showAll());
console.log(cocktails.showAlcohol());
console.log(cocktails.showNonAlcohol());
console.log(cocktails.showPrice('B52'));
