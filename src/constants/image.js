import { ReactComponent as Cross } from '../assets/cross.svg';
import { ReactComponent as Zero } from '../assets/zero.svg';
import { PLAYER } from './player';

export { Cross, Zero };
export const IMAGE = {
	[PLAYER.CROSS]: Cross,
	[PLAYER.ZERO]: Zero,
	[PLAYER.NOBODY]: null,
};
