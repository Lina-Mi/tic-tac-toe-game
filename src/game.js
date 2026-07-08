import { useState } from 'react';
import { GameLayout } from './game-layout';
import { STATUS, PLAYER } from './constants';
import { resetGame, handleCellClick } from './utils';

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(new Array(9).fill(PLAYER.NOBODY));

	const state = { status, setStatus, currentPlayer, setCurrentPlayer, field, setField };
	const handleResetGame = () => {
		resetGame(setStatus, setCurrentPlayer, setField);
	};

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={(cellIndex) => handleCellClick(state, cellIndex)}
			resetGame={handleResetGame}
		/>
	);
};
