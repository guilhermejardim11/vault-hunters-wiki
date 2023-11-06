import { useEffect, useReducer } from 'react';

import { themes } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Columns from '../../../components/layout/Columns';
import Search from '../../../components/search/Search';
import ThemeGroup from '../../../components/theme/ThemeGroup';

const themesFormat = (object) => {
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

const themesFilter = (object, query) => {
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

const themesReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH':
			return {
				initial: themesFormat(action.data),
				queried: themesFormat(action.data),
			};

		case 'FILTER':
			return {
				...state,
				queried: themesFilter(state.initial, action.query),
			};

		default:
			return state;
	}
};

const ThemesPage = () => {
	const [themeList, dispatch] = useReducer(themesReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		dispatch({ type: 'FETCH', data: themes });
	}, [themes]);

	const searchHandler = (event) => {
		dispatch({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Themes</PageTitle>

			<PageContent>
				<Columns>
					<Search
						name='themes'
						onChange={searchHandler}
					/>
				</Columns>

				<ThemeGroup
					title='Normal'
					themes={themeList.queried.normal}
				/>

				<ThemeGroup
					title='Festive'
					themes={themeList.queried.festive}
				/>

				<ThemeGroup
					title='Seal of the Architect'
					themes={themeList.queried.seal_architect}
				/>

				<ThemeGroup
					title='Seal of the Challenger'
					themes={themeList.queried.seal_challenger}
				/>
			</PageContent>
		</>
	);
};

export default ThemesPage;
