import spawn_egg from '../../../assets/icons/items/spawn_egg.png';

import PixelImg from '../../ui/PixelImg';
import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';

const SpawnCard = (props) => {
	return (
		<Card>
			<CardTitle>Spawning</CardTitle>

			<PixelImg
				src={spawn_egg.src}
				alt='Spawn Egg'
			/>

			<CardValue
				label='Level'
				value={props.spawn}
			/>
		</Card>
	);
};

export default SpawnCard;
