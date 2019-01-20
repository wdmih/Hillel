/// Homework
// 1* Написать функ которая возвращает глубокую копию масива или хотя бы на один уровень глубже чем slice
// 2 Написать функ которая будет копировать элементы одного масива в другой
// 3 Написать функ которя удаляет самый минимальный элемент масива (все элементы числа)
// 4 Написать функ которая сортируем массив строк по длине (по возрастанию и по убыванию)
// 5 Обернуть все выше приведенные функц в один объек через который будем все вызывать (по типу лодаш)
//
//
// #################################################
// #1 DEEP COPY - Stupid way
// #################################################

const sampleArr = [1, 2, 3, [1, 2, [1, 2]], 5];

function arrDeepCopyS(arr) {
  return JSON.parse(JSON.stringify(arr));
}

let copyofarr = arrDeepCopyS(sampleArr);

copyofarr[2] = '11';
copyofarr[3][0] = '55';
copyofarr[3][2][0] = '66';
console.log(sampleArr);
console.log(copyofarr);

// #################################################
// #1 DEEP COPY - Recursion way
// #################################################

function arrDeepCopy(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object') {
      copy[i] = arr[i];
    } else {
      copy[i] = arrDeepCopy(arr[i]);
    }
  }
  return copy;
}

let sampleArrCopy = arrDeepCopy(sampleArr);

sampleArrCopy[2] = '11';
sampleArrCopy[3][0] = '55';
sampleArrCopy[3][2][0] = '66';

console.log(sampleArr);
console.log(sampleArrCopy);

// #################################################
// #2 - COPY ARRAY
// #################################################

const sampleArr2 = [1, 2, 3, [4, 5, [6, 7, 8]], 7, 8, { a: 9, b: 10 }];

function copyArr(arr) {
  let copiedArr = [];
  for (let i = 0; i < arr.length; i++) {
    copiedArr[i] = arr[i];
  }
  return copiedArr;
}
let clonedSampleArr = copyArr(sampleArr2);
console.log(clonedSampleArr === sampleArr2);

// #################################################
// #3 - DELETE MINIMAL - filter method way
// #################################################

const sampleArr3 = [1, 2, 5, 78, 65, 1, 7];
function deleteMin(arr) {
  let min = Math.min.apply(null, arr);
  return arr.filter(elem => elem !== min);
}

let filteredArr = deleteMin(sampleArr3);
console.log(filteredArr);

// #################################################
// #3 - DELETE MINIMAL - splice method way
// #################################################

const sampleArr3s = [1, 2, 5, 78, 65, 1, 7];
function deleteMinS(arr) {
  let min = Math.min(...arr);
  arr.forEach((v, k, arr) => v !== min || arr.splice(k, 1));
  return arr;
}

let filteredArrS = deleteMinS(sampleArr3s);
console.log(filteredArrS);

// #################################################
// #4 SORTING ARRAY OF STRINS WITH DIRECTION
// #################################################

const sampleArr4 = ['333', '22', '1', '4444'];

function sortArr(arr, dir) { // dir = true - low to high, false - high to low
  function lowToHigh(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      return 0;
    }
  }
  function highToLow(a, b) {
    if (a.length < b.length) {
      return 1;
    } else if (a.length > b.length) {
      return -1;
    } else {
      return 0;
    }
  }
  if (dir) {
    return arr.sort(lowToHigh);
  } else {
    return arr.sort(highToLow);
  }
}

console.log(sortArr(sampleArr4, false));

// #################################################
// #5 LIBRARY OF OUR FUNCTIONS
// #################################################

const lib = {
  clone: arrDeepCopy,
  copy: copyArr,
  deleteMin: deleteMin,
  sortArr: sortArr
};

console.log(lib.sortArr(sampleArr4, true));
