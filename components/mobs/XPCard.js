import experience_bottle from '../../assets/icons/items/experience_bottle.png';

import PixelImg from '../ui/PixelImg';
import Card from '../ui/card/Card';
import CardValue from '../ui/card/CardValue';

const XPCard = (props) => {
	return (
		<Card>
			<p>Experience</p>

			<PixelImg
				src={experience_bottle.src}
				alt='Experience Bottle'
			/>

			<CardValue
				label='Amount'
				value={`${props.xp}xp`}
			/>
		</Card>
	);
};

export default XPCard;
