import styles from './LabeledCard.module.scss';

import Card from './Card';

const LabeledCard = (props) => {
	return (
		<Card className={styles.labeled_card}>
			<div className={styles.labeled_card__label}>{props.label}</div>
			{props.children}
		</Card>
	);
};

export default LabeledCard;
