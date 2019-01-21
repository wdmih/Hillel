const lib = (function() {
  return {
    clone: function arrDeepCopy(arr) {
      let copy = [];
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object') {
          copy[i] = arr[i];
        } else {
          copy[i] = arrDeepCopy(arr[i]);
        }
      }
      return copy;
    },
    copy: function copyArr(arr) {
      let copiedArr = [];
      for (let i = 0; i < arr.length; i++) {
        copiedArr[i] = arr[i];
      }
      return copiedArr;
    },
    deleteMin: function deleteMinS(arr) {
      let min = Math.min(...arr);
      arr.forEach((v, k, arr) => v !== min || arr.splice(k, 1));
      return arr;
    },
    sortArr: function sortArr(arr, dir) {
      let newArr = arr.splice(0); // dir = true - low to high, false - high to low
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
        return newArr.sort(lowToHigh);
      } else {
        return newArr.sort(highToLow);
      }
    }
  };
})();

const source = ['333', '22', '1', '4444'];
document.getElementById('source').innerHTML = source;
let result = lib.sortArr(source, true);
document.getElementById('result').innerHTML = result;
