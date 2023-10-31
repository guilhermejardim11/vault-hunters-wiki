import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';

const VariantsCard = (props) => {
	return (
		<Card>
			<CardTitle>Variants</CardTitle>
			<CardValue value={props.variants} />
		</Card>
	);
};

export default VariantsCard;
