// #1 STRING REVERSE
// Variant #1 - fully on builtin methods
function reverseString(str) {
	return str.split('').reverse().join('');
}
console.log(reverseString('multi words string'));

// Variant 2  -- with using loop instead reverse method
function reverseStringV2(str) {
	let revArr = [];
	for (let i = str.length; i >= 0; i--) {
		revArr.push(str[i]);
	}
	return revArr.join('');
}
console.log(reverseStringV2('multi words string'));
