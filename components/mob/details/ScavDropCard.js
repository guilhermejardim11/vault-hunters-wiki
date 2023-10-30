import black_essence from '../../../assets/icons/items/scavenger/scavenger_mob_black.png';
import green_essence from '../../../assets/icons/items/scavenger/scavenger_mob_green.png';
import purple_essence from '../../../assets/icons/items/scavenger/scavenger_mob_purple.png';

import PixelImg from '../../ui/PixelImg';
import Popover from '../../ui/Popover';
import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';

const ScavDropCard = (props) => {
	const essence = {
		name: '',
		icon: '',
	};

	switch (props.essence) {
		case 'black':
			essence = {
				name: 'Black Mob Essence',
				icon: black_essence.src,
			};
			break;

		case 'green':
			essence = {
				name: 'Green Mob Essence',
				icon: green_essence.src,
			};
			break;

		case 'purple':
			essence = {
				name: 'Purple Mob Essence',
				icon: purple_essence.src,
			};
			break;

		default:
			break;
	}

	return (
		<Card>
			<CardTitle>Scavenger Drop</CardTitle>

			<Popover label={essence.name}>
				<PixelImg
					src={essence.icon}
					alt={essence.name}
				/>
			</Popover>
		</Card>
	);
};

export default ScavDropCard;
