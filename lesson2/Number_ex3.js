// #3 DISCOUNT PERCENTAGE
function discount(price, constant) {
	if (typeof price === 'number' && typeof constant === 'number') {
		if (price >= constant) {
			return price * .9;
		} else {
			return price * .75;
		}
	} else {
		return 'Not a number';
	}
}
var constant = 4;

console.log(discount(2, constant));
console.log(discount(4, constant));
console.log(discount(13, constant));
