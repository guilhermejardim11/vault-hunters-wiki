import { useEffect, useReducer, useState } from 'react';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Columns from '../../../components/layout/Columns';
import Search from '../../../components/search/Search';
import Loading from '../../../components/ui/Loading';
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
	const [isLoading, setIsLoading] = useState(true);

	const [themes, dispatch] = useReducer(themesReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		const fetchThemes = async () => {
			setIsLoading(true);

			try {
				const response = await fetch('https://vault-hunters-wiki-default-rtdb.firebaseio.com/themes.json');
				const data = await response.json();

				if (!response.ok) {
					throw new Error({ message: 'Error' });
				}

				dispatch({ type: 'FETCH', data: data });
			} catch (error) {}

			setIsLoading(false);
		};

		fetchThemes();
	}, []);

	const searchHandler = (event) => {
		dispatch({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Themes</PageTitle>

			<Columns>
				<Search
					name='themes'
					onChange={searchHandler}
				/>
			</Columns>

			<PageContent>
				{isLoading ? (
					<Loading message='Loading Themes...' />
				) : (
					<>
						{Object.keys(themes.queried.normal).length > 0 && (
							<ThemeGroup
								title='Normal'
								category='normal'
								themes={themes.queried.normal}
							/>
						)}

						{Object.keys(themes.queried.festive).length > 0 && (
							<ThemeGroup
								title='Festive'
								category='festive'
								themes={themes.queried.festive}
							/>
						)}

						{Object.keys(themes.queried.seal_architect).length > 0 && (
							<ThemeGroup
								title='Seal of the Architect'
								category='seal_architect'
								themes={themes.queried.seal_architect}
							/>
						)}

						{Object.keys(themes.queried.seal_challenger).length > 0 && (
							<ThemeGroup
								title='Seal of the Challenger'
								category='seal_challenger'
								themes={themes.queried.seal_challenger}
							/>
						)}
					</>
				)}
			</PageContent>
		</>
	);
};

export default ThemesPage;
