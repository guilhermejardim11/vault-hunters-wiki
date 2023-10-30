import { mobs } from '../../../database';

import Columns from '../../layout/Columns';
import MobCard from '../../mob/MobCard';

const MobSpawnGroup = (props) => {
	return (
		props.mobs?.length > 0 && (
			<div>
				<h2>Mobs</h2>

				<Columns>
					{props.mobs.map((mob) => (
						<MobCard
							key={mob}
							mob={{ ...mobs[mob], id: mob }}
						/>
					))}
				</Columns>
			</div>
		)
	);
};

export default MobSpawnGroup;
