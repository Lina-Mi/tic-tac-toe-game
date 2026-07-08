import { InformationLayout } from './information-layout';
import { NAME, MOVE, STATUS, PLAYER } from '../../constants';
import PropTypes from 'prop-types';

export const Information = ({ status, currentPlayer }) => {
	const playerMove = MOVE[status];
	const playerName = NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? playerMove : `${playerMove} ${playerName}`;
	return <InformationLayout information={information} status={status} />;
};

Information.propTypes = {
	status: PropTypes.oneOf([STATUS.TURN, STATUS.WIN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY]),
};
