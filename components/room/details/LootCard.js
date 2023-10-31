import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';

const LootCard = (props) => {
	const lootString = '';

	props.loot.map((loot) => {
		lootString += lootString === '' ? loot : `, ${loot}`;
	});

	return (
		<Card>
			<CardTitle>Loot</CardTitle>
			<CardValue value={lootString} />
		</Card>
	);
};

export default LootCard;
