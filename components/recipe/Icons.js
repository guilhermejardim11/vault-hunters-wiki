import styles from './Icons.module.scss';

import CraftingIcon from './crafting/CraftingIcon';

const Icons = (props) => {
	return (
		props.icons?.length > 0 && (
			<div className={styles.icons}>
				{props.icons.map((type) => (
					<CraftingIcon
						key={type}
						type={type}
					/>
				))}
			</div>
		)
	);
};

export default Icons;
