import Recipe from '../Recipe';
import CraftingInput from './CraftingInput';

const Crafting = (props) => {
	const { input, output, info } = props.recipe;

	return (
		<Recipe
			output={output}
			info={info}
			current={props.current}
		>
			<CraftingInput
				input={input}
				current={props.current}
			/>
		</Recipe>
	);
};

export default Crafting;
