// #3 COMPARE ARRAYS
const fstArr = [1, 3, 4, 9];
const secArr = [2, 3, 6, 0];

// 3 direct compare
function compareArrs(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  let scores = [0, 0];
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] > arrB[i]) {
      scores[0]++;
    } else if (arrA[i] < arrB[i]) {
      scores[1]++;
    }
  }

  return scores;
}

console.log(compareArrs(fstArr, secArr));

// 3a* feversed compare
function compareArrsRev(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  let scores = [0, 0];
  let reversedArr = arrB.reverse();

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] > reversedArr[i]) {
      scores[0]++;
    } else if (arrA[i] < reversedArr[i]) {
      scores[1]++;
    }
  }
  return scores;
}

console.log(compareArrsRev(fstArr, secArr));
