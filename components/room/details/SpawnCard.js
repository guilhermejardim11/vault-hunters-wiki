import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';

const SpawnCard = (props) => {
	return (
		<Card>
			<CardTitle>Spawn Odds</CardTitle>
			<CardValue>
				{props.odds}% <sup>1</sup>
			</CardValue>
		</Card>
	);
};

export default SpawnCard;
