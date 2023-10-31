import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';

const FloorsCard = (props) => {
	return (
		<Card>
			<CardTitle>Floors</CardTitle>
			<CardValue value={props.floors} />
		</Card>
	);
};

export default FloorsCard;
