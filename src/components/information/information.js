import { InformationLayout } from './information-layout';
import { NAME, MOVE, STATUS } from '../../constants';

export const Information = ({ status, currentPlayer }) => {
	const playerMove = MOVE[status];
	const playerName = NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? playerMove : `${playerMove} ${playerName}`;
	return <InformationLayout information={information} status={status} />;
};
