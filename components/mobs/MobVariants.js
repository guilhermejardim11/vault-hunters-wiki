import PixelImg from '../ui/PixelImg';
import CardValue from '../ui/card/CardValue';
import ColumnGroup from '../ui/card/ColumnGroup';
import LabeledCard from '../ui/card/LabeledCard';

const MobVariants = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>

			<ColumnGroup>
				{props.list.map((item) => {
					return (
						<LabeledCard
							key={item.name}
							label={item.name}
						>
							{item.icon && (
								<PixelImg
									src={item.icon}
									alt={item.name}
								/>
							)}
							{item.spawn && (
								<CardValue
									label='Spawn'
									value={`lvl ${item.spawn}`}
								/>
							)}
							{item.xp && (
								<CardValue
									label='Experience'
									value={`${item.xp}xp`}
								/>
							)}
							{item.soul_shards && (
								<>
									<CardValue
										label='Soul Shards Amount'
										value={item.soul_shards.amount}
									/>
									<CardValue
										label='Soul Shards Odds'
										value={`${item.soul_shards.odds}%`}
									/>
								</>
							)}
						</LabeledCard>
					);
				})}
			</ColumnGroup>
		</div>
	);
};

export default MobVariants;
