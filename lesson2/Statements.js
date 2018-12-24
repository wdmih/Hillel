const instr = ['Forward','Back', 'Back', 'Back', 'Back', 'Left', 'Right', 'Right', 'Right', 'Right', 'Right', 'Right', 'Right' ];

function returnPath(instructions) {
	let x = 0;
	let y = 0;
	let path = [];
	path.push('Начало ' + [x, y]);

	for (let i = 0; i < instructions.length; i++) {
		if (instructions[i] === 'Forward') {
			if (x >= 3) {
				break;
			}
			x++;
			path.push([x, y]);
		} else if (instructions[i] === 'Back') {
			if (x <= -3) {
				break;
			}
			x--;
			path.push([x, y]);
		} else if (instructions[i] === 'Right') {
			if (y >= 3) {
				break;
			}
			y++;
			path.push([x, y]);
		} else if (instructions[i] === 'Left') {
			if (y <= -3) {
				break;
			}
			y--;
			path.push([x, y]);
		}
	}

	path.push('Конец ' + [x, y]);
	return path;
}
console.log(returnPath(instr));
