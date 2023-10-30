import styles from './MobDetailsRow.module.scss';

import Popover from '../../ui/Popover';

const MobDetailsRow = (props) => {
	return (
		<Popover label={props.label}>
			<div className={styles.mob_details}>
				<img
					src={props.image}
					alt={props.label}
				/>
				{props.value}
			</div>
		</Popover>
	);
};

export default MobDetailsRow;
