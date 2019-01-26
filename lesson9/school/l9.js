// // prototypes
// let food = {
//   init: function(type) {
//     this.type = type;
//   },
//   eat: function() {
//     console.log(`eat ${this.type}`);
//   }
// };

// var obj = {};
// console.log(obj);

// let pizza = Object.create(food); // using obj food as prototype for obj pizza
// let apple = Object.create(food);

// pizza.init('pizza');

// console.log(food.isPrototypeOf(pizza));

// pizza.eat = function() {
//   console.log(this.type.toUpperCase());
// };
// pizza.eat();

// function a() {
//   console.log(Array.prototype.map.call(arguments, (item, i) => { return { key: i, value: item }; }));
// }

// a(1, 2, 3);

// // написать прототип  - food с методом eat()
// // написать прототип  - candys  с методом sweetEat()
// // созать объект который будет иметь цепочку из прототипов
// // food -candies - cookie

// let candies = Object.create(food, {
//   sweetEat: { value: function() {
//     console.log(`eat ${this.type} sweety`);
//   } }
// });

// let cookie = Object.create(candies);
// cookie.init('someCookie');
// cookie.eat();
// cookie.sweetEat();

// reduse method
let pizza = {
  name: 'margarita',
  ingridients: [{
    name: 'tomato',
    price: 2
  },
  {
    name: 'cheese',
    price: 3
  },
  {
    name: 'basil',
    price: 4
  }]
};

let res = pizza.ingridients.reduce(function(accumulator, currentVal) {
  console.log(currentVal);
  // проход 1 - аккум равен 5
  return accumulator + currentVal.price;
}, pizza.ingridients[0].price);

res;

let str = pizza.ingridients.reduce(function(prev, curr, i, arr) {
  if (i !== arr.length - 1) {
    return prev + `${curr.name}:${curr.price},`;
  } else {
    return prev + `${curr.name}:${curr.price}`;
  }
}, '');

str;

/// HOMEWORK
// #1 Объект Коктейль, структура {name: String, ingridients: [{name: String, price: Number}], isAlcohol: Boolean, type: String (shot, long ...)}
// поместить в прототипЖ гетПрайс (с помощью редусе)
// создать объект Коктейли
// к єтому объекту пометсить след методы прототипа:
// добавить коктейль
// удалить по имени
// показать все
// показать все алкогольные,
// показать все без алкогольные
