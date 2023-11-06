import { recipes } from '../../../database';

import CraftingGroup from '../../recipe/crafting/CraftingGroup';
import SmeltingGroup from '../../recipe/smelting/SmeltingGroup';

const ItemRecipes = (props) => {
	const itemRecipes = {};

	for (const category in recipes) {
		const filteredItems = recipes[category].filter((recipe) => recipe.output === props.id);

		if (filteredItems.length > 0) {
			if (!itemRecipes.hasOwnProperty(category)) {
				itemRecipes[category] = [];
			}

			itemRecipes[category].push(...filteredItems);
		}
	}

	return (
		Object.keys(itemRecipes).length > 0 && (
			<div>
				<h2>Recipes</h2>

				<CraftingGroup
					recipes={itemRecipes.crafting}
					current={props.id}
				/>
				<SmeltingGroup
					recipes={itemRecipes.smelting}
					current={props.id}
				/>
			</div>
		)
	);
};

export default ItemRecipes;
