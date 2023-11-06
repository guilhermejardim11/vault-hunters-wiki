import { useEffect, useReducer } from 'react';

import { rooms } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Columns from '../../../components/layout/Columns';
import Search from '../../../components/search/Search';
import RoomGroup from '../../../components/room/RoomGroup';

const roomsFormat = (object) => {
	const results = {};

	for (const id in object) {
		const theme = object[id];

		if (!results.hasOwnProperty(theme.category)) {
			results[theme.category] = {};
		}

		results[theme.category][id] = theme;
	}

	return results;
};

const roomsFilter = (object, query) => {
	const results = { ...object };

	for (const group in results) {
		results[group] = Object.keys(results[group])
			.filter((key) => results[group][key].name.toLowerCase().includes(query.toLowerCase()))
			.reduce((cur, key) => {
				return Object.assign(cur, { [key]: results[group][key] });
			}, {});
	}

	return results;
};

const roomsReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH':
			return {
				initial: roomsFormat(action.data),
				queried: roomsFormat(action.data),
			};

		case 'FILTER':
			return {
				...state,
				queried: roomsFilter(state.initial, action.query),
			};

		default:
			return state;
	}
};

const RoomsPage = () => {
	const [roomList, dispatch] = useReducer(roomsReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		dispatch({ type: 'FETCH', data: rooms });
	}, [rooms]);

	const searchHandler = (event) => {
		dispatch({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Special Rooms</PageTitle>

			<PageContent>
				<Columns>
					<Search
						name='rooms'
						onChange={searchHandler}
					/>
				</Columns>

				<RoomGroup
					title='Challenge Rooms (7%)'
					list={roomList.queried.challenge}
				/>

				<RoomGroup
					title='Omega Rooms (2%)'
					list={roomList.queried.omega}
				/>
			</PageContent>
		</>
	);
};

export default RoomsPage;
