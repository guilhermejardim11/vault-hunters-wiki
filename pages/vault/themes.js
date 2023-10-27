import { useEffect, useReducer, useState } from 'react';

import PageTitle from '../../components/page/PageTitle';
import ColumnGroup from '../../components/ui/card/ColumnGroup';
import Search from '../../components/ui/Search';
import PageContent from '../../components/page/PageContent';
import MobGroup from '../../components/mobs/MobGroup';
import Loading from '../../components/ui/Loading';
import ThemeGroup from '../../components/themes/ThemeGroup';

const themesFilter = (object, query) => {
	const results = { ...object };

	results = Object.keys(results)
		.filter((key) => results[key].name.toLowerCase().includes(query.toLowerCase()))
		.reduce((cur, key) => {
			return Object.assign(cur, { [key]: results[key] });
		}, {});

	return results;
};

const themesReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH':
			return {
				initial: action.data,
				queried: action.data,
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

	console.log(themes.queried);

	return (
		<>
			<PageTitle>Themes</PageTitle>

			<ColumnGroup>
				<Search
					name='themes'
					onChange={searchHandler}
				/>
			</ColumnGroup>

			<PageContent>
				{isLoading && <Loading message='Loading Themes...' />}
				{!isLoading && themes.queried && <ThemeGroup themes={themes.queried} />}
			</PageContent>
		</>
	);
};

export default ThemesPage;
