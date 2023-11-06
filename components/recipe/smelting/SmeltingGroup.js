import RecipeGroup from '../RecipeGroup';
import Smelting from './Smelting';

const SmeltingGroup = (props) => {
	const recipeList = props.recipes;

	return (
		recipeList?.length > 0 && (
			<div>
				<h3>Smelting</h3>

				<RecipeGroup>
					{recipeList.map((recipe, r) => (
						<Smelting
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

export default SmeltingGroup;
