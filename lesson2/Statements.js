const instr = ['Forward','Back', 'Back', 'Back', 'Back', 'Forward', 'Left', 'Right', 'Right', 'Right', 'Right', 'Right', 'Right', 'Right' ];

function retutnPath(instructions) {
	let x = 0;
	let y = 0;
	let path = [];
	path.push('Начало ' + [x, y]);
	let limit = true;
	if (limit) {
		instructions.forEach(function (item) {
			if (x <= 2 && x >= -2 && y <= 2 && y >= -2) {
				/* я не понял почему но если пишу условие "x <= 3 && x >= -3 && y <= 3 && y >= -3" то на
        выходе захватывает и координаты с "Четверкой",
        а если пишу "x <= 2 && x >= -2 && y <= 2 && y >= -2" то условие выполняется. */
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
	}
	path.push('Конец ' + [x, y]);
	return path;
}

console.log(retutnPath(instr));
