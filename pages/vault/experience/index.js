import { useEffect, useReducer } from 'react';

import { experience } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Search from '../../../components/search/Search';
import Columns from '../../../components/layout/Columns';

const experienceFilter = (object, query) => {
	const results = { ...object };

	results = Object.keys(results)
		.filter((key) => results[key].name.toLowerCase().includes(query.toLowerCase()))
		.reduce((cur, key) => {
			return Object.assign(cur, { [key]: results[key] });
		}, {});

	return results;
};

const experienceReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH':
			return {
				initial: action.data,
				queried: action.data,
			};

		case 'FILTER':
			return {
				...state,
				queried: experienceFilter(state.initial, action.query),
			};

		default:
			return state;
	}
};

const ExperiencePage = () => {
	const [experienceList, dispatch] = useReducer(experienceReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		dispatch({ type: 'FETCH', data: experience });
	}, [experience]);

	const searchHandler = (event) => {
		dispatch({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Experience</PageTitle>

			<PageContent>
				<Columns>
					<Search
						name='experience'
						onChange={searchHandler}
					/>
				</Columns>
			</PageContent>
		</>
	);
};

export default ExperiencePage;
