import styles from './ItemCard.module.scss';

import ClickableCard from '../ui/card/ClickableCard';
import CardTitle from '../ui/card/CardTitle';
import PixelImg from '../ui/PixelImg';

const ItemCard = (props) => {
	return (
		<ClickableCard
			href={`/loot/items/${props.item.id}`}
			className={styles.item}
		>
			<PixelImg
				src={props.item.icon}
				alt={props.item.name}
			/>

			<CardTitle>{props.item.name}</CardTitle>
		</ClickableCard>
	);
};

export default ItemCard;
