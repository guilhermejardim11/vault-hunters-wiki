import { useEffect, useReducer } from 'react';

import { mobs } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Search from '../../../components/search/Search';
import Columns from '../../../components/layout/Columns';
import MobGroup from '../../../components/mob/MobGroup';

const mobsFilter = (object, query) => {
	const results = { ...object };

	results = Object.keys(results)
		.filter((key) => results[key].name.toLowerCase().includes(query.toLowerCase()))
		.reduce((cur, key) => {
			return Object.assign(cur, { [key]: results[key] });
		}, {});

	return results;
};

const mobsReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH':
			return {
				initial: action.data,
				queried: action.data,
			};

		case 'FILTER':
			return {
				...state,
				queried: mobsFilter(state.initial, action.query),
			};

		default:
			return state;
	}
};

const MobsPage = () => {
	const [mobList, dispatch] = useReducer(mobsReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		dispatch({ type: 'FETCH', data: mobs });
	}, []);

	const searchHandler = (event) => {
		dispatch({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Mobs</PageTitle>

			<Columns>
				<Search
					name='modifiers'
					onChange={searchHandler}
				/>
			</Columns>

			<PageContent>
				<MobGroup mobs={mobList.queried} />
			</PageContent>
		</>
	);
};

export default MobsPage;
