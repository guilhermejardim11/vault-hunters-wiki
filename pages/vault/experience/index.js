import { useEffect, useReducer } from 'react';

import { experience } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Search from '../../../components/search/Search';
import Columns from '../../../components/layout/Columns';
import ExperienceGroup from '../../../components/experience/groups/ExperienceGroup';
import ExperienceMobGroup from '../../../components/experience/groups/ExperienceMobGroup';

const experienceFilter = (object, query) => {
	const results = { ...object };

	for (const group in results) {
		results[group] = Object.keys(results[group])
			.filter((key) => key.replace('-', ' ').toLowerCase().includes(query.toLowerCase()))
			.reduce((cur, key) => {
				return Object.assign(cur, { [key]: results[group][key] });
			}, {});
	}

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

				{/* <ExperienceGroup
					title='Objectives'
					list={experienceList.queried.objectives}
				/> */}

				<ExperienceMobGroup
					title='Mobs'
					list={experienceList.queried.mobs}
				/>
			</PageContent>
		</>
	);
};

export default ExperiencePage;
