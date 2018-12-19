// #1 STRING REVERSE
// Variant #1 - fully on builtin methods
function reverseString(str) {
	if (typeof str === 'string') {
		return str.split('').reverse().join('');
	} else {
		return 'ERROR: Not a string';
	}
}
console.log(reverseString('multi words string'));

// Variant 2  -- with using loop instead reverse method
function reverseStringV2(str) {
	if (typeof str === 'string') {
		let arrFromStr = str.split('');
		let revArr = [];
		for (let i = arrFromStr.length; i >= 0; i--) {
			revArr.push(arrFromStr[i]);
		}
		return revArr.join('');
	} else {
		return 'ERROR: Not a string';
	}
}
console.log(reverseStringV2('multi words string'));
