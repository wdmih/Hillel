// #2 STRING OPERATIONS
const testString = 'this is my test string';

let findStr1 = 'string';
let findStr2 = 'this';
let findStr3 = 'this is';
let findStr4 = 'is';
let findStr5 = 'is my test';

function getSubString(str, subStr) {
  if (str.indexOf(subStr) !== -1) {
    let index = str.indexOf(subStr)
    let subStrLengts = subStr.length
    console.log(index);

    return str.slice(index, index + subStrLengts)
  }
}
console.log(getSubString(testString, findStr1))
console.log(getSubString(testString, findStr2))
console.log(getSubString(testString, findStr3))
console.log(getSubString(testString, findStr4))
console.log(getSubString(testString, findStr5))
