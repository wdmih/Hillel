const instructions = ['Back', 'Back', 'Back', 'Back', 'Forward', 'Left', 'Right', 'Right'];

function move(arr) {
	let coords = [0, 0];
	console.log('Начало' + '[' + coords + ']');

	for (let i = 0; i < arr.length; i++) {
		const instruction = arr[i];
		if (instruction === 'Forward') {
			coords[0]++;
		} else if (instruction === 'Back') {
			coords[0]--;
		} else if (instruction === 'Right') {
			coords[1]++;
		} else {
			coords[1]--;
		}
		console.log(coords);
	}
	console.log('Конец' + '[' + coords + ']');
}

move(instructions);