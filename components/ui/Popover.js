import styles from './Popover.module.scss';

const Popover = (props) => {
	const typeClass = '';
	switch (props.type) {
		case 'info':
			typeClass = styles.info;
			break;

		default:
			break;
	}

	return (
		<div className={`${styles.popover_wrapper} ${typeClass} ${props.className}`}>
			<div className={styles.popover}>
				<span>{props.label}</span>
			</div>
			{props.children}
		</div>
	);
};

export default Popover;
