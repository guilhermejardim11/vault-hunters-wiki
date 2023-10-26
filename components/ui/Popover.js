import styles from './Popover.module.scss';

const Popover = (props) => {
	return (
		<div className={styles.popover_wrapper}>
			<div className={styles.popover}>{props.label}</div>
			{props.children}
		</div>
	);
};

export default Popover;
