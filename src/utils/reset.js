import { STATUS, PLAYER } from '../constants';

export const resetGame = (setStatus, setCurrentPlayer, setField) => {
	setStatus(STATUS.TURN);
	setCurrentPlayer(PLAYER.CROSS);
	setField(new Array(9).fill(PLAYER.NOBODY));
};
