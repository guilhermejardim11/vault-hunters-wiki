import { useEffect, useReducer, useState } from 'react';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Columns from '../../../components/layout/Columns';
import Search from '../../../components/search/Search';
import Loading from '../../../components/ui/Loading';
import ModifierGroup from '../../../components/modifier/ModifierGroup';

const modifiersFilter = (object, query) => {
	const results = { ...object };

	for (const group in results) {
		results[group] = Object.keys(results[group])
			.filter((key) => results[group][key].title.toLowerCase().includes(query.toLowerCase()))
			.reduce((cur, key) => {
				return Object.assign(cur, { [key]: results[group][key] });
			}, {});
	}

	return results;
};

const modifiersReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH':
			return {
				initial: action.data,
				queried: action.data,
			};

		case 'FILTER':
			return {
				...state,
				queried: modifiersFilter(state.initial, action.query),
			};

		default:
			return state;
	}
};

const ModifiersPage = () => {
	const [isLoading, setIsLoading] = useState(true);

	const [modifiers, dispatch] = useReducer(modifiersReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		const fetchModifiers = async () => {
			setIsLoading(true);

			try {
				const response = await fetch('https://vault-hunters-wiki-default-rtdb.firebaseio.com/modifiers.json');
				const data = await response.json();

				if (!response.ok) {
					throw new Error({ message: 'Error' });
				}

				dispatch({ type: 'FETCH', data: data });
			} catch (error) {}

			setIsLoading(false);
		};

		fetchModifiers();
	}, []);

	const searchHandler = (event) => {
		dispatch({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Modifiers</PageTitle>

			<Columns>
				<Search
					name='modifiers'
					onChange={searchHandler}
				/>
			</Columns>

			<PageContent>
				{isLoading ? (
					<Loading message='Loading Mobs...' />
				) : (
					<>
						{Object.keys(modifiers.queried.positive).length > 0 && (
							<ModifierGroup
								title='Positive'
								modifiers={modifiers.queried?.positive}
							/>
						)}

						{Object.keys(modifiers.queried.negative).length > 0 && (
							<ModifierGroup
								title='Negative'
								modifiers={modifiers.queried.negative}
							/>
						)}

						{Object.keys(modifiers.queried.curses).length > 0 && (
							<ModifierGroup
								title='Curses'
								modifiers={modifiers.queried.curses}
							/>
						)}

						{Object.keys(modifiers.queried.uber).length > 0 && (
							<ModifierGroup
								title='Uber/Special'
								modifiers={modifiers.queried.uber}
							/>
						)}
					</>
				)}
			</PageContent>
		</>
	);
};

export default ModifiersPage;
