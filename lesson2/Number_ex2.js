// #2 IS EVEN OR ODD
function isEvenOrOdd(num) {
	if (typeof num === 'number') {
		if (num%2 === 0) {
			return 'Number is Even';
		} else {
			return 'Number is Odd';
		}
	}
}

console.log(isEvenOrOdd(144));
console.log(isEvenOrOdd(0));
console.log(isEvenOrOdd(63));