import { useEffect, useReducer, useState } from 'react';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Loading from '../../../components/ui/Loading';
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
	const [isLoading, setIsLoading] = useState(true);

	const [mobs, dispatch] = useReducer(mobsReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		const fetchMobs = async () => {
			setIsLoading(true);

			try {
				const response = await fetch('https://vault-hunters-wiki-default-rtdb.firebaseio.com/mobs.json');
				const data = await response.json();

				if (!response.ok) {
					throw new Error({ message: 'Error' });
				}

				dispatch({ type: 'FETCH', data: data });
			} catch (error) {}

			setIsLoading(false);
		};

		fetchMobs();
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

			<PageContent>{isLoading ? <Loading message='Loading Mobs...' /> : mobs.queried && <MobGroup mobs={mobs.queried} />}</PageContent>
		</>
	);
};

export default MobsPage;
