import styles from './SmeltingInput.module.scss';

import Slot from '../Slot';
import Fire from '../Fire';

const SmeltingInput = (props) => {
	const input = props.input.item;
	const fuel = props.input.item;

	return (
		<div className={styles.grid}>
			<Slot
				item={input}
				highlighted={props.current === input}
			/>

			<Fire />

			{fuel && (
				<Slot
					item={fuel}
					highlighted={props.current === fuel}
				/>
			)}
		</div>
	);
};

export default SmeltingInput;
