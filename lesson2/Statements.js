const instr = ['Forward','Back', 'Back', 'Back', 'Forward', 'Left', 'Right', 'Right', 'Right', 'Right', 'Right', 'Right', 'Right' ];

// Variant #1
function returnPath(instructions) {
	let x = 0;
	let y = 0;
	let path = [];
	path.push('Начало ' + [x, y]);
	instructions.forEach(function (item) {
		if (x < 3 && x > -3 && y < 3 && y > -3) {
			if (item === 'Forward') {
				x++;
				path.push([x, y]);
			} else if (item === 'Back') {
				x--;
				path.push([x, y]);
			} else if (item === 'Right') {
				y++;
				path.push([x, y]);
			} else if (item === 'Left') {
				y--;
				path.push([x, y]);
			}
		}
	});
	path.push('Конец ' + [x, y]);
	return path;
}
console.log(returnPath(instr));



// Variant #2
function returnPath2(instructions) {
	let x = 0;
	let y = 0;
	let path = [];
	path.push('Начало ' + [x, y]);

	function logPath(arr, item) {
		if (arr[item] === 'Forward') {
			x++;
			path.push([x, y]);
		} else if (arr[item] === 'Back') {
			x--;
			path.push([x, y]);
		} else if (arr[item] === 'Right') {
			y++;
			path.push([x, y]);
		} else if (arr[item] === 'Left') {
			y--;
			path.push([x, y]);
		}
	}

	for (let i = 0; i < instructions.length; i++) {
		if (x < 3 && x > -3 && y < 3 && y > -3) {
			logPath(instructions, i);
		}
	}

	path.push('Конец ' + [x, y]);
	return path;
}
console.log(returnPath2(instr));