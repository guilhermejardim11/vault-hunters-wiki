import { jsonToArray } from '../../helper';

import Columns from '../layout/Columns';
import MobCard from './MobCard';

const MobGroup = (props) => {
	const mobList = jsonToArray(props.mobs);

	return (
		<Columns>
			{mobList.map((mob) => (
				<MobCard
					key={mob.id}
					mob={mob}
				/>
			))}
		</Columns>
	);
};

export default MobGroup;
