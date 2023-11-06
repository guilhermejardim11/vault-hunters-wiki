import { jsonToArray } from '../../helper';

import Columns from '../layout/Columns';
import RoomCard from './RoomCard';

const RoomGroup = (props) => {
	const roomList = jsonToArray(props.list);

	return (
		roomList.length > 0 && (
			<div>
				<h2>{props.title}</h2>

				<Columns>
					{roomList.map((room) => (
						<RoomCard
							key={room.id}
							room={room}
						/>
					))}
				</Columns>
			</div>
		)
	);
};

export default RoomGroup;
