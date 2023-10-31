import { jsonToArray } from '../../helper';

import Columns from '../layout/Columns';
import ModifierCard from './ModifierCard';

const ModifierGroup = (props) => {
	const modifierList = jsonToArray(props.modifiers);

	return (
		modifierList.length > 0 && (
			<div>
				<h2>{props.title}</h2>

				<Columns>
					{modifierList.map((modifier) => (
						<ModifierCard
							key={modifier.id}
							modifier={modifier}
						/>
					))}
				</Columns>
			</div>
		)
	);
};

export default ModifierGroup;
