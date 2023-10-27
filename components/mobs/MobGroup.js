import Link from 'next/link';

import styles from './MobGroup.module.scss';

import ColumnGroup from '../ui/card/ColumnGroup';
import LabeledCard from '../ui/card/LabeledCard';
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
		<ColumnGroup>
			{mobList.map((mob) => (
				<Link
					href={`/vault/mobs/${mob.id}`}
					key={mob.id}
				>
					<div className={styles.mob}>
						<LabeledCard label={mob.name}>
							<PixelImg
								src={mob.icon}
								alt={mob.name}
							/>
						</LabeledCard>
					</div>
				</Link>
			))}
		</ColumnGroup>
	);
};

export default MobGroup;
