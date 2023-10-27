import soul_shard from '../../assets/icons/items/soul_shard.gif';

import Card from '../ui/card/Card';
import CardValue from '../ui/card/CardValue';
import PixelImg from '../ui/PixelImg';

const SoulChardCard = (props) => {
	return (
		<Card>
			<p>Soul Shards</p>

			<PixelImg
				src={soul_shard.src}
				alt='Soul Shard'
			/>

			<CardValue
				label='Amount'
				value={props.soul_shards.amount}
			/>
			<CardValue
				label='Odds'
				value={`${props.soul_shards.odds}%`}
			/>
		</Card>
	);
};

export default SoulChardCard;
