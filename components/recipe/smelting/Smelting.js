import Recipe from '../Recipe';
import SmeltingInput from './SmeltingInput';

const Smelting = (props) => {
	const { input, output, info } = props.recipe;

	return (
		<Recipe
			output={output}
			info={info}
			current={props.current}
		>
			<SmeltingInput
				input={input}
				current={props.current}
			/>
		</Recipe>
	);
};

export default Smelting;
