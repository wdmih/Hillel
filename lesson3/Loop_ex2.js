// #2 AMOUNT AND SUMM

function getAmount(val) {
  return val.toString().length;
}

function getSum(val) {
  let strFromNum = val.toString();
  let sum = 0;
  for (let i = 0; i < strFromNum.length; i++) {
    sum += +strFromNum[i];
  }
  return sum;
}
function showAmountAndSum(num) {
  return `Amount: ${getAmount(num)}, Sum: ${getSum(num)}`;
}

console.log(showAmountAndSum(845732));
