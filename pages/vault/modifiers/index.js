import { useEffect, useReducer } from 'react';

import { modifiers } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Columns from '../../../components/layout/Columns';
import Search from '../../../components/search/Search';
import ModifierGroup from '../../../components/modifier/ModifierGroup';

const modifiersFormat = (object) => {
	const results = {};

	for (const id in object) {
		const modifier = object[id];

		if (!results.hasOwnProperty(modifier.category)) {
			results[modifier.category] = {};
		}

		results[modifier.category][id] = modifier;
	}

	return results;
};

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
				initial: modifiersFormat(action.data),
				queried: modifiersFormat(action.data),
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
	}, [modifiers]);

	const searchHandler = (event) => {
		dispatch({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Modifiers</PageTitle>

			<PageContent>
				<Columns>
					<Search
						name='modifiers'
						onChange={searchHandler}
					/>
				</Columns>

				<ModifierGroup
					title='Positive'
					list={modifierList.queried?.positive}
				/>

				<ModifierGroup
					title='Negative'
					list={modifierList.queried.negative}
				/>

				<ModifierGroup
					title='Curses'
					list={modifierList.queried.curses}
				/>

				<ModifierGroup
					title='Uber/Special'
					list={modifierList.queried.uber}
				/>
			</PageContent>
		</>
	);
};

export default ModifiersPage;
