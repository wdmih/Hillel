// 1.
// написать функцию, которая принимает число и возвращает массив случайных чисел,
// длина массива равна числу которое мы передали

// Добавить параметр функции который отвечает за максимальное случайное значение
// В итоге должно быть 2 параметра: первый - длина массива, второй - максимальное случайное значение

function getRandomNumbersArr(lenght, limit) {
  let randomNumbersArr = new Array();
  while (randomNumbersArr.length < lenght) {
    randomNumbersArr.push(Math.round(Math.random() * limit));
  }
  return randomNumbersArr;
}

console.log(getRandomNumbersArr(5, 300));

// 2.
// написать функцию которая принимает массив чисел, проходит по нему, и выводит в консоль слово в зависимости от значения
// если число делится на 3 без остатка - то мы выводим "Fizz"
// ecли делится на 5 без остатка - то мы выводим "Buzz"
// если делится и на 3 и на 5 - то мы выводим "FizzBuzz"
// если ни одно из этих условий не выполняется то выводим само число

let testArr = [...Array(100).keys()].map(i => i + 1); // create new Array with custom lenght and values from 1 to length

function fizzBuzz(arr) {
  return arr.map(i => {
    if (i % 3 === 0 && i % 5 === 0) {
      return 'FizzBuzz';
    } else if (i % 3 === 0) {
      return 'Fizz';
    } else if (i % 5 === 0) {
      return 'Buzz';
    } else {
      return i;
    }
  });
}

console.log(fizzBuzz(testArr));
