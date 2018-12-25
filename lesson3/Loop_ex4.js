// #4 WRAP ALL STRINGS FROM ARRAY TO SPAN TAG
const testArr = ['Дано', 'массив', 'строк', 'Необходимо', 'обернуть', 'каждую', 'строку', 'в', 'тег', 'span'];

function wrapUp(arr) {
  let wrappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    wrappedArr.push('<span>' + arr[i] + '</span>');
  }
  return wrappedArr;
}

console.log(wrapUp(testArr));
