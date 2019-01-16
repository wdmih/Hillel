// создать функцию которая вернет объект,
// содержащий методы реализующие основные арифметические операции (+ - * /)
// добавить метод clear
// добавить метод showResult (=)

function createCalc() {
  let result = 5;
  return {
    add: function(a, b) {
      result = a + b;
    },
    subtract: function(a, b) {
      result = a - b;
    },
    multiply: function(a, b) {
      result = a * b;
    },
    divide: function(a, b) {
      result = a / b;
    },
    clear: function(a, b) {
      result = 0;
    },
    showResult: function() {
      return result;
    }
  };
}

let calculator = createCalc();
calculator.add(5, 1);
console.log(calculator.showResult());
calculator.subtract(5, 1);
console.log(calculator.showResult());
calculator.multiply(5, 5);
console.log(calculator.showResult());
calculator.divide(10, 3);
console.log(calculator.showResult());
calculator.clear();
console.log(calculator.showResult());

// Два типа пицц - из меню
// Пицца наборная - цена которой вычисляется из суммы ингридиентов

/*
    Pizza
    {
        name: ''                  // ''
        ingridients: [ingridient] // [{name: 'cheese', price: 2}, {name: 'tomato', price: 3}]
        price: number
        type: custom || menu
        getPrice:
    }
    Ingridient {
        name: '',
        price: number
    }
*/
// createPizza('margarita', 25, [{ name: 'cheese', price: 3 }, { name: 'basil', price: 4 }, { name: 'tomato', price: 4 }]);
// createPizza('Pizza order number 25', 20, [{ name: 'cheese', price: 3 }, { name: 'basil', price: 4 }, { name: 'tomato', price: 4 }]);

// Функция которая создает пиццы по типу create human (название, ингридиенты, цена)
// Функция которая создает пиццы - просто по ингридиентам (ингридиенты)
// Функция которая Pizza Manager - которая создает пиццы, на основе массива который передаем
// **********************************************************************************************************//

// Функция которая создает пиццы по типу create human (название, ингридиенты, цена)

function createPizza(name, price, ingridients) {
  return {
    name: name,
    price: price,
    ingridients: ingridients,
    getPrice: function() {
      return this.price;
    }
  };
}

let pizza1 = createPizza('bbq', 150, [{ name: 'cheese', price: 3 }, { name: 'basil', price: 4 }, { name: 'tomato', price: 4 }]);
console.log(pizza1);
console.log(pizza1.getPrice());

let pizza2 = createPizza('hot', 80, [{ name: 'cheese', price: 3 }, { name: 'basil', price: 4 }, { name: 'tomato', price: 4 }]);
console.log(pizza2);
console.log(pizza2.getPrice());

// Функция которая создает пиццы - просто по ингридиентам (ингридиенты)
//
// Пицца имеет базовую цену и цены на добавочные ингридиенты итоговая цена формируется
// из базовой стоимости и стоимости всех ингредиентов (я так понял условие задачи)

function createCustomPizza(name, price, type, ingridients) {
  return {
    name: name,
    price: price,
    type: type,
    ingridients: ingridients,
    getPrice: function() {
      if (this.type === 'custom' && this.ingridients !== undefined) {
        let ingredPrice = ingridients.reduce(function(prev, curr) {
          return prev + curr.price;
        }, 0);
        return ingredPrice + this.price;
      } else {
        return this.price;
      }
    }
  };
}

let pizza4 = createCustomPizza('margarita', 80, 'custom', [{ name: 'cheese', price: 3 }, { name: 'basil', price: 4 }, { name: 'tomato', price: 4 }]);

console.log(pizza4);
console.log(pizza4.getPrice());

// Функция которая Pizza Manager - которая создает пиццы, на основе массива который передаем
const pizzasArr = [
  {
    name: 'pizzaUno',
    price: 75,
    type: 'custom',
    ingridients: [
      { name: 'cheese', price: 3 },
      { name: 'basil', price: 4 }
    ]
  },
  {
    name: 'pizzaDue',
    price: 150,
    type: 'menu',
    ingridients: [
      { name: 'cheese', price: 3 },
      { name: 'basil', price: 4 }
    ]
  },
  {
    name: 'pizzaTre',
    price: 111,
    type: 'custom',
    ingridients: [
      { name: 'cheese', price: 3 },
      { name: 'basil', price: 4 }
    ]
  }
];

function pizzaManager(pizzas) {
  let listOfPizzas = pizzas;
  return {
    getPizzasList: function() {
      return listOfPizzas.map(function(item) {
        return item.name;
      });
    },
    getPizzaPrice: function(pizzaName) {
      let pizza = listOfPizzas.find(function(item) {
        return item.name === pizzaName;
      });
      if (pizza.type === 'custom' && pizza.ingridients !== undefined) {
        let ingredPrice = pizza.ingridients.reduce(function(prev, curr) {
          return prev + curr.price;
        }, 0);
        return ingredPrice + pizza.price;
      } else {
        return pizza.price;
      }
    }

  };
}

let menu = pizzaManager(pizzasArr);

console.log(menu.getPizzasList());
console.log(menu.getPizzaPrice('pizzaDue'));
