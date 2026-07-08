import { Field, Information } from './components';
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
