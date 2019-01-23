/// Homework
/// #1 глубокую копию массива с учетом вложенных объектов
/// #2 Написать функ которая возвращает массив строк длина который больше равно N. Функция принимает исходный массив и миним. длину строки.
/// #3 Сотрировка массива строк по колличеству букв в слове.
/// #4 Объект Пицца с прошлыг занятий переписать через методы. и вывести в ХТМЛ

/// ///////////////////////////////////////////////
///   #1 DEEP COPY OF ARRAY WITH OBJ
/// ///////////////////////////////////////////////

const sampleArr = [1, 2, 3, [1, 2, [1, 2]], { a: 4, b: 5, c: [7, 8, { x: 7, y: 9 }] }, 8];

function arrDeepCopy(arr) {
  let copy;
  if (typeof arr === 'object') { // if not primitive
    let toString = Object.prototype.toString;

    if (toString.call(arr) === '[object Array]') {
      copy = arr.map(arrDeepCopy);
    } else {
      copy = Object.keys(arr).reduce(function(prev, curr) {
        prev[curr] = arrDeepCopy(arr[curr]);
        return prev;
      }, {});
    }
  } else {
    copy = arr; // if primitive that just asign
  }
  return copy;
}

let sampleArrCopy = arrDeepCopy(sampleArr);

sampleArrCopy[2] = '11';
sampleArrCopy[3][0] = '55';
sampleArrCopy[3][2][0] = '66';
sampleArrCopy[4].a = 'somthing';

console.log(sampleArr);
console.log(sampleArrCopy);

/// ///////////////////////////////////////////////
///   #2 FUNCTION THAT RETURNS ARRAY OF STR WITH WORDS LENGTH EQUAL OR HIGH
/// ///////////////////////////////////////////////

const someArrWithWords = ['Sed', 'ut', 'perspiciatis', 'unde', 'omnis', 'iste', 'natus', 'error', 'sit'];

function strEqOrHigh(arr, wordlength) {
  return arr.filter(word => word.length >= wordlength);
}

console.log(strEqOrHigh(someArrWithWords, 6));

/// ///////////////////////////////////////////////
///   #3 SORT ARRAY OF STR BY CHAR
/// ///////////////////////////////////////////////

const arrOfStr = ['ggss', 'gggs', 'gsssss'];

function sortStringByChar(arr, char) {
  return arr.sort(function(a, b) {
    let aChars = a.split(char).length - 1;
    let bChars = b.split(char).length - 1;
    if (aChars > bChars) {
      return -1;
    } else if (aChars < bChars) {
      return 1;
    } else {
      return 0;
    }
  });
}

document.getElementById('sourceArr').innerHTML = arrOfStr;

let input = document.getElementById('inputChar');

input.onchange = function() {
  if (input.value) {
    let result = sortStringByChar(arrOfStr, input.value);
    return document.getElementById('resultArr').innerHTML = result;
  } else {
    return document.getElementById('resultArr').innerHTML = 'please enter a value';
  }
};

/// ///////////////////////////////////////////////
///   #4 OBJECT PIZZA TO HTML
/// ///////////////////////////////////////////////

// не понял какой именно объект нужно переписать на методы и вывести
