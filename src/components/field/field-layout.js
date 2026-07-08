import styles from './field.module.css';
import { IMAGE } from '../../constants';

export const FieldLayout = ({ field, handleCellClick }) => (
	<div className={styles.field}>
		<div className={`${styles.line} ${styles.vertical1}`}></div>
		<div className={`${styles.line} ${styles.vertical2}`}></div>
		<div className={`${styles.line} ${styles.horizontal1}`}></div>
		<div className={`${styles.line} ${styles.horizontal2}`}></div>

		{field.map((cellPlayer, index) => {
			const ImagePlayer = IMAGE[cellPlayer];

			return (
				<button
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index)}
				>
					{ImagePlayer && <ImagePlayer />}
				</button>
			);
		})}
	</div>
);
