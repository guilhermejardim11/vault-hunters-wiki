import { experience } from '../../../database';

import Columns from '../../layout/Columns';
import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';
import PixelImg from '../../ui/PixelImg';

const MobVariants = (props) => {
	return (
		props.list &&
		Object.keys(props.list).length > 0 && (
			<div>
				<h2>{props.title}</h2>

				<Columns>
					{Object.keys(props.list).map((id) => {
						const mob = props.list[id];

						return (
							<Card key={mob.name}>
								{mob.icon && (
									<PixelImg
										src={mob.icon}
										alt={mob.name}
									/>
								)}

								<CardTitle>{mob.name}</CardTitle>

								{mob.spawn && (
									<CardValue
										label='Spawn'
										value={`lvl ${mob.spawn}`}
									/>
								)}

								{experience.mobs.hasOwnProperty(props.mob) && experience.mobs[props.mob].hasOwnProperty(id) && (
									<CardValue
										label='Experience'
										value={`${experience.mobs[props.mob][id]}xp`}
									/>
								)}

								{mob.soul_shards && (
									<>
										<CardValue
											label='Soul Shards Amount'
											value={mob.soul_shards.amount}
										/>
										<CardValue
											label='Soul Shards Odds'
											value={`${mob.soul_shards.odds}%`}
										/>
									</>
								)}
							</Card>
						);
					})}
				</Columns>
			</div>
		)
	);
};

export default MobVariants;
