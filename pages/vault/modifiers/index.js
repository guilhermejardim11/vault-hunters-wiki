import { useEffect, useReducer } from 'react';

import { modifiers } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Columns from '../../../components/layout/Columns';
import Search from '../../../components/search/Search';
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
	const [modifierList, dispatch] = useReducer(modifiersReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		dispatch({ type: 'FETCH', data: modifiers });
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
				<ModifierGroup
					title='Positive'
					modifiers={modifierList.queried?.positive}
				/>

				<ModifierGroup
					title='Negative'
					modifiers={modifierList.queried.negative}
				/>

				<ModifierGroup
					title='Curses'
					modifiers={modifierList.queried.curses}
				/>

				<ModifierGroup
					title='Uber/Special'
					modifiers={modifierList.queried.uber}
				/>
			</PageContent>
		</>
	);
};

export default ModifiersPage;
