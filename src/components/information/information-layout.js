import styles from './information.module.css';
import { STATUS } from '../../constants';
import PropTypes from 'prop-types';

export const InformationLayout = ({ information, status }) => (
	<div
		className={`${styles.information} ${
			status === STATUS.WIN ? styles.win : status === STATUS.DRAW ? styles.draw : ''
		}`}
	>
		{information}
	</div>
);

InformationLayout.propTypes = {
	information: PropTypes.string,
};
