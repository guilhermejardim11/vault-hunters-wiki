import styles from './CardValue.module.scss';

const CardValue = (props) => {
	return (
		<div className={styles.card_value}>
			<span className={styles.card_value__label}>{props.label}</span>
			<span className={styles.card_value__value}>{props.value}</span>
		</div>
	);
};

export default CardValue;
