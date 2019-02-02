const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-cocktails');
const listElement = document.getElementById('cocktail-list');

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

/// MDN
/// what is Node?  https://developer.mozilla.org/ru/docs/Web/API/Node
/// What is Element? https://developer.mozilla.org/ru/docs/Web/API/Element
/// What is input Events

/// Coctails builder homework
