import RecipeGroup from '../RecipeGroup';
import Crafting from './Crafting';

const CraftingGroup = (props) => {
	const recipeList = props.recipes;

	return (
		recipeList?.length > 0 && (
			<div>
				<h3>Crafting</h3>

				<RecipeGroup>
					{recipeList.map((recipe, r) => (
						<Crafting
							key={r}
							recipe={recipe}
							current={props.current}
						/>
					))}
				</RecipeGroup>
			</div>
		)
	);
};

export default CraftingGroup;
