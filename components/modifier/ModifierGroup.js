import Columns from '../layout/Columns';
import Card from '../ui/card/Card';
import CardTitle from '../ui/card/CardTitle';
import PixelImg from '../ui/PixelImg';

import { jsonToArray } from '../../helper';

const ModifierGroup = (props) => {
	const modifierList = jsonToArray(props.modifiers);

	return (
		modifierList.length > 0 && (
			<div>
				<h2>{props.title}</h2>

				<Columns>
					{modifierList.map((modifier) => {
						return (
							<Card key={modifier.id}>
								<PixelImg
									src={modifier.icon}
									alt={modifier.title}
								/>

								<CardTitle>{modifier.title}</CardTitle>

								<p>{modifier.desc}</p>
							</Card>
						);
					})}
				</Columns>
			</div>
		)
	);
};

export default ModifierGroup;
