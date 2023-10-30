import Columns from '../../layout/Columns';
import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';
import PixelImg from '../../ui/PixelImg';

const MobVariants = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>

			<Columns>
				{props.list.map((item) => {
					return (
						<Card key={item.name}>
							{item.icon && (
								<PixelImg
									src={item.icon}
									alt={item.name}
								/>
							)}

							<CardTitle>{item.name}</CardTitle>

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
						</Card>
					);
				})}
			</Columns>
		</div>
	);
};

export default MobVariants;
