import Link from 'next/link';

import styles from './MobCard.module.scss';

import Card from '../ui/card/Card';
import CardTitle from '../ui/card/CardTitle';
import PixelImg from '../ui/PixelImg';

const MobCard = (props) => {
	return (
		<Link href={`/vault/mobs/${props.mob.id}`}>
			<div className={styles.mob}>
				<Card>
					<PixelImg
						src={props.mob.icon}
						alt={props.mob.name}
					/>

					<CardTitle>{props.mob.name}</CardTitle>
				</Card>
			</div>
		</Link>
	);
};

export default MobCard;
