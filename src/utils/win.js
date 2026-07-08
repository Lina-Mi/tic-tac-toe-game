import { PLAYER } from '../constants/player';

export const winCase = (newField, currentPlayer) => {
	const value = currentPlayer === PLAYER.CROSS ? 1 : 2;

	const rows = [0, 0, 0];
	const columns = [0, 0, 0];
	let firstDiagonal = 0;
	let secondDiagonal = 0;

	for (let i = 0; i < 9; i++) {
		const row = Math.floor(i / 3);
		const column = i % 3;

		if (newField[i] === currentPlayer) {
			rows[row] += value;
			columns[column] += value;

			if (row === column) firstDiagonal += value;
			if (row + column === 2) secondDiagonal += value;
		}
	}
	if (
		rows[0] === 3 ||
		rows[1] === 3 ||
		rows[2] === 3 ||
		columns[0] === 3 ||
		columns[1] === 3 ||
		columns[2] === 3 ||
		firstDiagonal === 3 ||
		secondDiagonal === 3 ||
		rows[0] === 6 ||
		rows[1] === 6 ||
		rows[2] === 6 ||
		columns[0] === 6 ||
		columns[1] === 6 ||
		columns[2] === 6 ||
		firstDiagonal === 6 ||
		secondDiagonal === 6
	) {
		return true;
	}
	return false;
};
