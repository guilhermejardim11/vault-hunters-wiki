import styles from './CraftingInput.module.scss';

import Slot from '../Slot';

const CraftingInput = (props) => {
	return (
		<div className={styles.grid}>
			{props.input.map((row, r) => (
				<div
					key={r}
					className={styles.row}
				>
					{row.map((id, i) => {
						return (
							<Slot
								key={i}
								item={id}
								highlighted={props.current === id}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default CraftingInput;
