// #1 CREATING OBJECTS IN VARIOUS WAYS
/// /////-------------------------------------------/////////
// 1.1 using Object Constructor

let pizza = new Object();
pizza.name = 'Pizza';
pizza.ingredients = [];
pizza.size = [
  {
    name: 'KingSize',
    price: 500
  },
  {
    name: 'Medium',
    price: 300
  }
];
pizza.getPrice = function(pizzaSizeName) {
  if (arguments.length === 0) {
    return 'please enter your desired pizza size';
  }
  let sizes = this.size;
  return sizes.find(elem => elem.name === pizzaSizeName).price;
};

console.log(pizza);
console.log(pizza.getPrice('Medium'));

/// /////-------------------------------------------/////////
// 1.2 literal notation

let pizza2 = {
  name: 'Pizza',
  ingredients: [],
  size: [
    {
      name: 'KingSize',
      price: 500
    },
    {
      name: 'Medium',
      price: 300
    }
  ],
  getPrice: function(pizzaSizeName) {
    if (arguments.length === 0) {
      return 'please enter your desired pizza size';
    }
    let sizes = this.size;
    return sizes.find(elem => elem.name === pizzaSizeName).price;
  }
};

console.log(pizza2);
console.log(pizza2.getPrice('KingSize'));

/// /////-------------------------------------------/////////
// 1.3 Creating object using Object.create() method

let pizza3 = Object.create(Object.prototype, {
  name: {
    value: 'Pizza',
    writable: true,
    enumerable: true
  },
  ingredients: {
    value: [],
    writable: true,
    enumerable: true
  },
  size: {
    value: [
      {
        name: 'KingSize',
        price: 500
      },
      {
        name: 'Medium',
        price: 300
      }
    ],
    writable: true,
    enumerable: true
  },
  getPrice: {
    value: function(pizzaSizeName) {
      if (arguments.length === 0) {
        return 'please enter your desired pizza size';
      }
      let sizes = this.size;
      return sizes.find(elem => elem.name === pizzaSizeName).price;
    }
  }
});

console.log(pizza3);
console.log(pizza3.getPrice('KingSize'));

/// /////-------------------------------------------/////////
// 1.4 using function

/*
  Не уверен что следующие два способра польностью правильные
  т.к. не нашел информации как создавать через конструкторы
  свойтсва со вложенными в них объектами (массивами)
*/
function Pizza(obj) {
  this.name = obj.name;
  this.ingredients = obj.ingredients;
  this.size = obj.size;
  this.getPrice = function(pizzaSizeName) {
    if (arguments.length === 0) {
      return 'please enter your desired pizza size';
    }
    let sizes = this.size;
    return sizes.find(elem => elem.name === pizzaSizeName).price;
  };
}

let pizzaOne = {
  name: 'Pizza',
  ingredients: [],
  size: [
    {
      name: 'KingSize',
      price: 500
    },
    {
      name: 'Medium',
      price: 300
    }
  ]
};

let pizzaTwo = {
  name: 'Pizza2',
  ingredients: [],
  size: [
    {
      name: 'KingSize',
      price: 600
    },
    {
      name: 'Medium',
      price: 200
    }
  ]
};

let pizza1 = new Pizza(pizzaOne);
console.log(pizza1);
console.log(pizza1.getPrice('KingSize'));

let anotherPizza = new Pizza(pizzaTwo);
console.log(anotherPizza);
console.log(anotherPizza.getPrice('Medium'));

/// /////-------------------------------------------/////////
// 1.5 using using ES6 class syntax
class PizzaClass {
  constructor(obj) {
    this.name = obj.name;
    this.ingredients = obj.ingredients;
    this.size = obj.size;
    this.getPrice = function(pizzaSizeName) {
      if (arguments.length === 0) {
        return 'please enter your desired pizza size';
      }
      let sizes = this.size;
      return sizes.find(elem => elem.name === pizzaSizeName).price;
    };
  }
}

let pizza4 = new PizzaClass(pizzaOne);
console.log(pizza4);
console.log(pizza4.getPrice('KingSize'));

let anotherPizza2 = new PizzaClass(pizzaTwo);
console.log(anotherPizza2);
console.log(anotherPizza2.getPrice('Medium'));
