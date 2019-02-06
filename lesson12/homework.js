// const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const filterChecks = document.getElementById('filter-checks');
const orderElement = document.getElementById('order-list');
const totalOrderPrice = document.getElementById('total-order-price');

class Cocktail {
  constructor(name, ingredients, isAlcohol, type) {
    this.name = name; // instance property
    this.ingredients = ingredients;
    this.isAlcohol = isAlcohol;
    this.type = type;
  }
  getPrice() { // methods of prototype
    return this.ingredients.reduce(function(sum, ingredient) {
      return sum + ingredient.price;
    }, 0);
  }
}

class CocktailsList {
  constructor() {
    this.list = []; // model
    this.filteredList = []; // view model

    this.filters = { // view model
      isAlcohol: false,
      isNonAlcohol: false,
      isLong: false,
      isShot: false,
      cocktailValue: ''
    };
  }

  setFilterValue(value, type) {
    this.filters[type] = value;
  }

  add(cocktail) {
    this.list.push(cocktail);
  }

  getAll() {
    return this.list;
  }

  getByName(name) {
    return this.filteredList.filter(item => item.name === name);
  }

  applyFilters() {
    this.filteredList = this.list.filter(item => {
      return (item.isAlcohol === this.filters.isAlcohol || !this.filters.isAlcohol === false) &&
            (item.isAlcohol !== this.filters.isNonAlcohol || this.filters.isNonAlcohol === true);
      //  && (item.type === 'long' && this.filters.isLong || item.type === 'shot' && !this.filters.isLong  )
      //  && (this.filters.cocktailValue === '' || item.name.indexOf(this.filters.cocktailValue) === 0 )
    });
  }

  render() {
    this.applyFilters();
    let fragment = document.createDocumentFragment();

    this.filteredList.forEach(function(item) {
      let cocktailItem = document.createElement('div');
      cocktailItem.className = 'content-item';

      let cocktailName = document.createElement('h4');
      cocktailName.innerText = item.name;
      cocktailItem.appendChild(cocktailName);

      let cocktailPrice = document.createElement('p');
      cocktailPrice.innerText = `${item.getPrice()}$`;
      cocktailItem.appendChild(cocktailPrice);

      let cocktailBuy = document.createElement('button');
      cocktailBuy.setAttribute('type', 'button');
      cocktailBuy.dataset.name = item.name;
      cocktailBuy.innerText = 'buy';
      cocktailItem.appendChild(cocktailBuy);

      fragment.appendChild(cocktailItem);
    });
    return fragment;
  }
}

class OrderList {
  constructor() {
    this.orderList = [];
  }
  add(orderItem) {
    if (!this.orderList.includes(orderItem)) {
      orderItem.quantity = 1;
      this.orderList.unshift(orderItem);
    } else {
      let itemIndex = this.orderList.findIndex(item => item === orderItem);
      this.orderList[itemIndex].quantity++;
    }
  }
  getTotalOrderPrice() {
    return this.orderList.reduce(function(prev, curr) {
      return prev + (curr.getPrice() * curr.quantity);
    }, 0);
  }
  render() {
    let fragment = document.createDocumentFragment();

    this.orderList.forEach(function(item) {
      let orderItem = document.createElement('div');
      orderItem.className = 'order-content-item';

      let orderCocktailName = document.createElement('h4');
      orderCocktailName.innerText = item.name;
      orderItem.appendChild(orderCocktailName);

      let orderItemQuantity = document.createElement('span');
      orderItemQuantity.innerText = item.quantity;
      orderItem.appendChild(orderItemQuantity);

      let orderItemPrice = document.createElement('span');
      orderItemPrice.innerText = `${item.getPrice()}$`;
      orderItem.appendChild(orderItemPrice);

      let orderItemSumm = document.createElement('span');
      orderItemSumm.innerText = `${item.getPrice() * item.quantity}$`;
      orderItem.appendChild(orderItemSumm);

      fragment.appendChild(orderItem);
    });
    return fragment;
  }
}

let list = new CocktailsList();
list.add(new Cocktail('margarita', [{ name: 'tequila', price: 52 }, { name: 'lime', price: 12 }], true, 'long'));
list.add(new Cocktail('old fashioned', [{ name: 'wiskey', price: 74 }, { name: 'bitter', price: 31 }], true, 'shot'));
list.add(new Cocktail('negroni', [{ name: 'wiskey', price: 69 }, { name: 'bitter', price: 28 }], true, 'long'));
list.add(new Cocktail('mojito', [{ name: 'wiskey', price: 38 }, { name: 'bitter', price: 18 }], false, 'long'));

let order = new OrderList();

// const showList = function () {
//     listElement.innerHTML = '';
//     listElement.appendChild(list.render())
// }
// showButton.addEventListener('click', showList);

listElement.appendChild(list.render());
orderElement.appendChild(order.render());

/// ///////// EVENTS ////////////////////
function filterHandler(e) {
  let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  list.setFilterValue(value, e.target.name);
  listElement.innerHTML = '';
  listElement.appendChild(list.render());
}
filterInput.addEventListener('input', filterHandler);
filterChecks.addEventListener('change', filterHandler);

function buttonHandler(e) {
  if (e.target.tagName === 'BUTTON') {
    order.add(list.getByName(e.target.dataset.name)[0]);
    orderElement.innerHTML = '';
    orderElement.appendChild(order.render());
    totalOrderPrice.innerText = `${order.getTotalOrderPrice()}$`;
  }
}

listElement.addEventListener('click', buttonHandler);
