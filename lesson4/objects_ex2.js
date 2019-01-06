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

/// ES6
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
