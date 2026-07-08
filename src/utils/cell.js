import { STATUS, PLAYER } from '../constants';
import { winCase } from './win';

export const handleCellClick = (
	{ status, field, currentPlayer, setField, setStatus, setCurrentPlayer },
	cellIndex,
) => {
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		return;
	}

	const newField = [...field];

	if (currentPlayer === PLAYER.CROSS) {
		newField[cellIndex] = PLAYER.CROSS;
	} else {
		newField[cellIndex] = PLAYER.ZERO;
	}
	setField(newField);

	if (winCase(newField, currentPlayer)) {
		setStatus(STATUS.WIN);
	} else if (!newField.some((cell) => cell === PLAYER.NOBODY)) {
		setStatus(STATUS.DRAW);
	} else {
		if (currentPlayer === PLAYER.CROSS) {
			setCurrentPlayer(PLAYER.ZERO);
		} else {
			setCurrentPlayer(PLAYER.CROSS);
		}
	}
};
