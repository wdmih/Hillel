// const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const filterChecks = document.getElementById('filter-checks');
const orderElement = document.getElementById('order-list');
const totalOrderPrice = document.getElementById('total-order-price');
const buttonLoad = document.querySelector('.button--load');

class Cocktail {
  constructor(obj) {
    this.name = obj.name; // instance property
    this.ingredients = obj.ingredients;
    this.isAlcohol = obj.isAlcohol;
    this.type = obj.type;
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
      isAlcohol: true,
      isLong: true,
      cocktailValue: ''
    };
    this.loaded = false;
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
      return item.isAlcohol === this.filters.isAlcohol &&
        (item.type === 'long' && this.filters.isLong || item.type === 'shot' && !this.filters.isLong) &&
        (this.filters.cocktailValue === '' || item.name.indexOf(this.filters.cocktailValue) === 0);
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
      cocktailBuy.className = 'button';
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

let order = new OrderList();

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

/// ///////////////////////////////////////////////////
/// /////////////////// HOMEWORK //////////////////////
/// ///////////////////////////////////////////////////

/// V1 PROMISE.RESOLVE
function loadCocktails() { // Promise.resolve
  let delay = (time) => (result) => new Promise(resolve => setTimeout(() => resolve(result), time));
  let cocktails = Promise.resolve([{
    name: 'margarita',
    ingredients: [{
      name: 'tequila',
      price: 52
    },
    {
      name: 'lime',
      price: 12
    }
    ],
    isAlcohol: true,
    type: 'long'
  },
  {
    name: 'old fashioned',
    ingredients: [{
      name: 'wiskey',
      price: 74
    },
    {
      name: 'bitter',
      price: 31
    }
    ],
    isAlcohol: true,
    type: 'shot'
  },
  {
    name: 'negroni',
    ingredients: [{
      name: 'wiskey',
      price: 69
    },
    {
      name: 'bitter',
      price: 28
    }
    ],
    isAlcohol: true,
    type: 'long'
  },
  {
    name: 'mojito',
    ingredients: [{
      name: 'wiskey',
      price: 38
    },
    {
      name: 'bitter',
      price: 18
    }
    ],
    isAlcohol: false,
    type: 'long'
  }
  ]);
  return cocktails.then(delay(1000)).then(function(resolve) {
    let now = Date.now();

    if (list.loaded === false || (now - list.loaded) > 10000) {
      resolve.forEach(function(item) {
        return list.add(new Cocktail(item));
      });
      list.loaded = Date.now();
    } else {
      alert('Data is already loaded');
    }
  });
}

/// V2 PROMISE WITH XHR
function loadCocktailsXHR(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(xhr.response);
      } else {
        reject(console.log(this.status, xhr.statusText)
        );
      }
    };
    xhr.send();
  }).then(function(cocktails) {
    let now = Date.now();
    if (list.loaded === false || (now - list.loaded) > 10000) {
      JSON.parse(cocktails).forEach(function(item) {
        return list.add(new Cocktail(item));
      });
      list.loaded = Date.now();
    } else {
      alert('Data is already loaded');
    }
  });
}

function loadHandler() {
  buttonLoad.innerHTML = 'Loading';
  buttonLoad.classList.add('spinning');

  loadCocktails().then(() => {
    buttonLoad.classList.remove('spinning');
    buttonLoad.innerHTML = 'Load All';
  });
}

function loadHandlerXHR() {
  buttonLoad.innerHTML = 'Loading';
  buttonLoad.classList.add('spinning');
  loadCocktailsXHR('https://my-json-server.typicode.com/wdmih/Hillel/cocktails')
    .then(() => {
      buttonLoad.classList.remove('spinning');
      buttonLoad.innerHTML = 'Load All';
    });
}

buttonLoad.addEventListener('click', loadHandlerXHR); // OR buttonLoad.addEventListener('click', loadHandler);
