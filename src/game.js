import { useState } from 'react';
import { GameLayout } from './game-layout';
import { STATUS, PLAYER } from './constants';
import { winCase, resetGame } from './utils';

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(new Array(9).fill(PLAYER.NOBODY));

	const handleCellClick = (cellIndex) => {
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

	const handleResetGame = () => {
		resetGame(setStatus, setCurrentPlayer, setField);
	};

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={handleCellClick}
			resetGame={handleResetGame}
		/>
	);
};
