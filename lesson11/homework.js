const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-cocktails');
const listElement = document.getElementById('cocktail-list');
const filterAlcohol = document.getElementById('filter-alcohol');
const filterType = document.getElementById('filter-type');

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
  renderFiltered(name) {
    let list = this.list.filter(function(item) {
      return item.name.indexOf(name) === 0;
    });
    return this.render(list);
  }
  /// ////////////////// HOMEWORK ///////////////////////////
  renderWithParams(params) {
    let list = this.list.filter(function(obj) {
      return Object.keys(params).every(function(key) {
        return obj[key] === params[key];
      });
    });
    return this.render(list);
  }
  /// ////////////////// HOMEWORK end ///////////////////////////
  render(list) {
    let cocktails = list || this.list;
    let fragment = document.createDocumentFragment();

    cocktails.forEach(function(item) {
      let cocktailItem = document.createElement('div');
      cocktailItem.innerText = item.name;
      cocktailItem.className = 'cocktail';
      fragment.appendChild(cocktailItem);
    });
    return fragment;
  }
}

let list = new CocktailList();
list.add(new Cocktail('margarita', [{ name: 'tequila', price: 5 }, { name: 'lime', price: 3 }], true, 'long'));
list.add(new Cocktail('margarita2', [{ name: 'tequila', price: 5 }, { name: 'lime', price: 3 }], true, 'shot'));
list.add(new Cocktail('old fashioned', [{ name: 'wiskey', price: 6 }, { name: 'bitter', price: 3 }], false, 'shot'));
list.add(new Cocktail('old fashioned2', [{ name: 'wiskey', price: 6 }, { name: 'bitter', price: 3 }], false, 'long'));

showButton.addEventListener('click', function(e) {
  listElement.innerHTML = '';
  listElement.appendChild(list.render());
});

filterInput.addEventListener('input', function(event) {
  listElement.innerHTML = '';
  listElement.appendChild(list.renderFiltered(this.value));
});

/// ////////////////// HOMEWORK ///////////////////////////

function filterHandler() {
  let params = {
    isAlcohol: filterAlcohol.checked,
    type: filterType.checked ? 'long' : 'shot'
  };
  listElement.innerHTML = '';
  listElement.appendChild(list.renderWithParams(params));
}
filterAlcohol.addEventListener('change', filterHandler);
filterType.addEventListener('change', filterHandler);
/// ////////////////// HOMEWORK end ///////////////////////////
