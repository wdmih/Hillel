// #1 NEGATIVE OR POSITIVE
function isPositive(num) {
	if (num > 0) {
		return true;
	} else if (num === 0) {
		return 'Your number is ZERO';
	} else {
		return false;
	}
}

console.log(isPositive(11));
console.log(isPositive(0));
console.log(isPositive(-11));
