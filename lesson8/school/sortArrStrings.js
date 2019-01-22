// отсортировать строки  в масссиве строк по колличеству букв указанной в условии
const arrOfStr = ['ggss', 'gggssss', 'gs'];
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

document.getElementById('source1').innerHTML = arrOfStr;
let input = document.getElementById('input');

input.onchange = function() {
  if (input.value) {
    let result = sortStringByChar(arrOfStr, input.value);
    return document.getElementById('result1').innerHTML = result;
  } else {
    return document.getElementById('result1').innerHTML = 'please enter a value';
  }
};
