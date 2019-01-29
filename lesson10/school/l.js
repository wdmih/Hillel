// const coctailProto = {
//   getPrice: function() {
//     return this.ingredients.reduce(function(sum, ingredients) {
//       return sum + ingredients.price;
//     }, 0);
//   }
// };
// function createCocktail(name, ingredients, isAlcohol, type) {
//   let obj = Object.create(coctailProto);
//   obj.name = name;
//   obj.ingredients = ingredients;
//   obj.isAlcohol = isAlcohol;
//   obj.type = type;
//   return obj;
// }

// const cocktailsListProto = {
//   add: function(cocktail) {
//     this.list.push(cocktail);
//   },
//   getAll: function() {
//     return this.list;
//   }
// };

// function createCocktailsList() {
//   return Object.create(cocktailsListProto, {
//     list: {
//       value: [],
//       enumerable: true,
//       writable: true,
//       configurable: true
//     }
//   });
// }

// const myCocktailList = createCocktailsList();

/// /////////////////////////////////
/// CLASES SYNTAX EXAMPLE
/// /////////////////////////////////

const showButton = document.getElementById('show-button');
const hideButton = document.getElementById('hide-button');
console.log(showButton);

class Cocktail {
  constructor(name, ingredients, isAlcohol, type) {
    this.name = name;
    this.ingredients = ingredients;
    this.isAlcohol = isAlcohol;
    this.type = type;
  }
  getPrice() {
    return this.ingredients.reduce(function(sum, ingredients) {
      return sum + ingredients.price;
    }, 0);
  }
}

class CocktailList {
  constructor() {
    this.list = [];
  }
  add(cocktail) {
    this.list.push(cocktail);
  }
  getAll() {
    return this.list;
  }
  render() {
    return this.list.map((item) => `<div>${item.name}</div>`).join('');
  }
}

// const margarita = new Cocktail('margarita', [{ name: 'tequila', price: 5 }, { name: 'lime', price: 3 }], true, 'long');
// const oldFashioned = new Cocktail('old fashioned', [{ name: 'tequila', price: 5 }, { name: 'lime', price: 3 }], true, 'long');

let list = new CocktailList();
list.add(new Cocktail('margarita', [{ name: 'tequila', price: 5 }, { name: 'lime', price: 3 }], true, 'long'));
list.add(new Cocktail('old fashioned', [{ name: 'tequila', price: 5 }, { name: 'lime', price: 3 }], true, 'long'));

const showList = function() {
  const listElement = document.getElementById('cocktail-list');
  listElement.innerHTML = list.render();
  // listElement.style.display = 'block';
  listElement.classList.remove('hidden');
};

showButton.addEventListener('click', showList);

hideButton.addEventListener('click', function() {
  const listElement = document.getElementById('cocktail-list');
  // listElement.style.display = 'none';
  setTimeout(() => {
    console.log('start');

    listElement.classList.add('hidden');
  }, 2000);
  console.log('End');
});

// классы туды сюды
// дописать прошлую домашку
// вынести ингредиенты в отдельный массив const ingrid = [{}] лучше класс
// ingrid.get('tequila');
