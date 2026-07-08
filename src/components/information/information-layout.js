import styles from './information.module.css';
import { STATUS } from '../../constants';

export const InformationLayout = ({ information, status }) => (
	<div
		className={`${styles.information} ${
			status === STATUS.WIN ? styles.win : status === STATUS.DRAW ? styles.draw : ''
		}`}
	>
		{information}
	</div>
);
