import ColumnGroup from '../ui/card/ColumnGroup';
import LabeledCard from '../../components/ui/card/LabeledCard';
import PixelImg from '../../components/ui/PixelImg';

const jsonToArray = (object) => {
	const mobArray = [];

	for (const id in object) {
		mobArray.push({
			...object[id],
			id: id,
		});
	}

	return mobArray;
};

const ModifierGroup = (props) => {
	const modifierList = jsonToArray(props.modifiers);

	return (
		<div>
			<h2>{props.title}</h2>

			<ColumnGroup>
				{modifierList.map((modifier) => {
					return (
						<LabeledCard
							key={modifier.id}
							label={modifier.title}
						>
							<PixelImg
								src={modifier.icon}
								alt={modifier.title}
							/>

							<p>{modifier.desc}</p>
						</LabeledCard>
					);
				})}
			</ColumnGroup>
		</div>
	);
};

export default ModifierGroup;
