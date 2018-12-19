// #1 NEGATIVE OR POSITIVE
function isNegOrPos(num) {
	if (typeof num === 'number') {
		if (num > 0) {
			return 'Your number is positive';
		} else if (num === 0) {
			return 'Your number is ZERO';
		} else {
			return 'Your number is negative';
		}
	} else {
		return 'Not a number';
	}
}

console.log(isNegOrPos(11));
console.log(isNegOrPos(0));
console.log(isNegOrPos(-11));
