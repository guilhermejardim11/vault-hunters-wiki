import { useEffect, useReducer } from 'react';

import { items } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Search from '../../../components/search/Search';
import Columns from '../../../components/layout/Columns';
import ItemGroup from '../../../components/item/ItemGroup';

const itemsFormat = (object) => {
	const results = {};

	for (const id in object) {
		const item = object[id];

		var item_category = item.category;
		if (!item_category) {
			item_category = 'other';
		}

		if (!results.hasOwnProperty(item_category)) {
			results[item_category] = {};
		}

		results[item_category][id] = item;
	}

	return results;
};

const itemsFilter = (object, query) => {
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

const itemsReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH':
			return {
				initial: itemsFormat(action.data),
				queried: itemsFormat(action.data),
			};

		case 'FILTER':
			return {
				...state,
				queried: itemsFilter(state.initial, action.query),
			};

		default:
			return state;
	}
};

const ItemsPage = () => {
	const [itemList, dispatch] = useReducer(itemsReducer, {
		initial: {},
		queried: {},
	});

	useEffect(() => {
		dispatch({ type: 'FETCH', data: items.the_vault });
	}, [items.the_vault]);

	const searchHandler = (event) => {
		dispatch({ type: 'FILTER', query: event.target.value });
	};

	return (
		<>
			<PageTitle>Items</PageTitle>

			<PageContent>
				<Columns>
					<Search
						name='items'
						onChange={searchHandler}
					/>
				</Columns>

				<ItemGroup items={itemList.queried.other} />
				<ItemGroup
					title='Scavenger'
					items={itemList.queried.scavenger}
				/>
			</PageContent>
		</>
	);
};

export default ItemsPage;
