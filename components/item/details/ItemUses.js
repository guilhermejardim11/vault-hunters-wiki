import { recipes } from '../../../database';

import Crafting from '../../recipe/crafting/Crafting';
import RecipeGroup from '../../recipe/RecipeGroup';

const ItemUses = (props) => {
	const itemUses = {};

	for (const category in recipes) {
		const filteredItems = recipes[category].filter((recipe) => {
			if (!Array.isArray(recipe.input)) {
				return recipe.input === props.id;
			}

			return recipe.input.some((row) => row.some((item) => item === props.id));
		});

		if (filteredItems.length > 0) {
			if (!itemUses.hasOwnProperty(category)) {
				itemUses[category] = [];
			}

			itemUses[category].push(...filteredItems);
		}
	}

	return (
		Object.keys(itemUses).length > 0 && (
			<div>
				<h2>Uses</h2>

				{itemUses.crafting?.length > 0 && (
					<div>
						<h3>Crafting</h3>

						<RecipeGroup>
							{itemUses.crafting.map((recipe, r) => (
								<Crafting
									key={r}
									recipe={recipe}
									current={props.id}
								/>
							))}
						</RecipeGroup>
					</div>
				)}
			</div>
		)
	);
};

export default ItemUses;
