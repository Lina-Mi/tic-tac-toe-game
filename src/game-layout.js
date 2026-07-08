import PropTypes from 'prop-types';
import { Field, Information } from './components';
import { PLAYER, STATUS } from './constants';
import styles from './game.module.css';

export const GameLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	resetGame,
}) => (
	<div className={styles.game}>
		<Information status={status} currentPlayer={currentPlayer} />
		<Field field={field} handleCellClick={handleCellClick} />
		<button className={styles.resetGame} onClick={resetGame}>
			Начать заново
		</button>
	</div>
);

GameLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.TURN, STATUS.WIN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY]),
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.ZERO, PLAYER.NOBODY])),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
};
