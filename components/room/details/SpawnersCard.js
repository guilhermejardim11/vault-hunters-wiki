import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';

const SpawnersCard = (props) => {
	return (
		<Card>
			<CardTitle>Spawners</CardTitle>
			<CardValue value={props.spawners} />
		</Card>
	);
};

export default SpawnersCard;
