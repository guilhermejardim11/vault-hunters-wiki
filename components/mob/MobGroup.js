import Link from 'next/link';

import styles from './MobGroup.module.scss';

import Columns from '../layout/Columns';
import Card from '../ui/card/Card';
import CardTitle from '../ui/card/CardTitle';
import PixelImg from '../ui/PixelImg';

const jsonToArray = (object) => {
	const mobArray = [];

	for (const id in object) {
		mobArray.push({
			...object[id],
			id: id,
		});
	}

	return mobArray;
};

const MobGroup = (props) => {
	const mobList = jsonToArray(props.mobs);

	return (
		<Columns>
			{mobList.map((mob) => (
				<Link
					key={mob.id}
					href={`/vault/mobs/${mob.id}`}
				>
					<div className={styles.mob}>
						<Card>
							<PixelImg
								src={mob.icon}
								alt={mob.name}
							/>

							<CardTitle>{mob.name}</CardTitle>
						</Card>
					</div>
				</Link>
			))}
		</Columns>
	);
};

export default MobGroup;
