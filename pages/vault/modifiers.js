import { useEffect, useReducer, useState } from 'react';

import PageTitle from '../../components/page/PageTitle';
import ModifierGroup from '../../components/modifiers/ModifierGroup';
import Search from '../../components/ui/Search';
import PageContent from '../../components/layout/PageContent';
import ColumnGroup from '../../components/ui/card/ColumnGroup';

const filterResults = (object, query) => {
	const results = { ...object };

	for (const group in results) {
		results[group] = results[group].filter(({ title }) => {
			return title.toLowerCase().includes(query.toLowerCase());
		});
	}

	return results;
};

function modifiersReducer(state, action) {
	switch (action.type) {
		case 'FETCH':
			return {
				modifiers: action.modifiers,
				queriedModifiers: action.modifiers,
			};

		case 'FILTER':
			return {
				...state,
				queriedModifiers: filterResults(state.modifiers, action.query),
			};

		default:
			return state;
	}
}

const ModifiersPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const [modifiers, dispatchModifiers] = useReducer(modifiersReducer, {
		initialModifiers: {},
		queriedModifiers: {},
	});
	const { queriedModifiers, query } = modifiers;

	const fetchModifiers = async () => {
		setIsLoading(true);

		try {
			const response = await fetch('https://vault-hunters-wiki-default-rtdb.firebaseio.com/modifiers.json');
			const data = await response.json();

			if (!response.ok) {
				throw new Error({ message: 'Error' });
			}

			dispatchModifiers({ type: 'FETCH', modifiers: data });
		} catch (error) {
			setError(error.message);
		}

		setIsLoading(false);
	};

	useEffect(() => {
		fetchModifiers();
	}, []);

	const searchHandler = (event) => {
		dispatchModifiers({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Modifiers</PageTitle>

			<ColumnGroup>
				<Search
					name='modifiers'
					value={query}
					onChange={searchHandler}
				/>
			</ColumnGroup>

			<PageContent>
				{isLoading && <p>Loading...</p>}

				{!isLoading && error && (
					<>
						<h3>Error</h3>
						<p>{error}</p>
					</>
				)}

				{!isLoading && queriedModifiers && (
					<>
						<ModifierGroup
							title='Positive'
							modifiers={queriedModifiers?.positive}
						/>

						<ModifierGroup
							title='Negative'
							modifiers={queriedModifiers?.negative}
						/>
					</>
				)}
			</PageContent>
		</>
	);
};

export default ModifiersPage;
