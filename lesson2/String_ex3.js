// LONGEST WORD IN STRING
// Variant 1 -- using loop
function getLongestWord(str) {
	let arrFromStr = str.split(' ');
	let longest = arrFromStr[0];
	for (let i = 0; i < arrFromStr.length; i++) {
		if (arrFromStr[i].length > longest.length) {
			longest = arrFromStr[i];
		}
	}
	return longest;
}
console.log(getLongestWord('Чтобы раскрою никаких обстоятельства возникают примером пользы воспользоваться само некоей воспользов-тест'));


// Variant 2 -- using reduce method
function getLongestWordV2(str) {
	let arrFromStr = str.split(' ').reduce(function (prevItem, curItem) {
		if (curItem.length > prevItem.length) {
			return curItem;
		} else {
			return prevItem;
		}
	});
	return arrFromStr;
}
console.log(getLongestWordV2('Чтобы раскрою никаких обстоятельства возникают примером пользы воспользоваться само некоей воспользов-тест'));

