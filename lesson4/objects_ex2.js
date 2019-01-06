/*
  Не уверен что следующие два способра польностью правильные
  т.к. не нашел информации как создавать через конструкторы
  свойтсва со вложенными в них объектами (массивами)
*/
function getPrice(pizzaSizeName) {
  if (arguments.length === 0) {
    return 'please enter your desired pizza size';
  }
  let sizes = this.size;
  return sizes.find(elem => elem.name === pizzaSizeName).price;
};

function Pizza(obj) {
  this.name = obj.name;
  this.ingredients = obj.ingredients;
  this.size = obj.size;
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
console.log(getPrice.call(pizza1, 'KingSize'));

let anotherPizza = new Pizza(pizzaTwo);
console.log(anotherPizza);
console.log(getPrice.call(anotherPizza, 'Medium'));

// ES6 class syntax
class PizzaClass {
  constructor(obj) {
    this.name = obj.name;
    this.ingredients = obj.ingredients;
    this.size = obj.size;
  }
}

let pizza4 = new PizzaClass(pizzaOne);
console.log(pizza4);
console.log(getPrice.call(pizza4, 'KingSize'));

let anotherPizza2 = new PizzaClass(pizzaTwo);
console.log(anotherPizza2);
console.log(getPrice.call(anotherPizza2, 'Medium'));
