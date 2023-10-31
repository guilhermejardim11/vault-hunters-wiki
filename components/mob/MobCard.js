import styles from './MobCard.module.scss';

import ClickableCard from '../ui/card/ClickableCard';
import CardTitle from '../ui/card/CardTitle';
import PixelImg from '../ui/PixelImg';

const MobCard = (props) => {
	return (
		<ClickableCard
			href={`/vault/mobs/${props.mob.id}`}
			className={styles.mob}
		>
			<PixelImg
				src={props.mob.icon}
				alt={props.mob.name}
			/>

			<CardTitle>{props.mob.name}</CardTitle>
		</ClickableCard>
	);
};

export default MobCard;
