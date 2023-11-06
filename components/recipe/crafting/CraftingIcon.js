import shapeless from '../../../assets/shapeless-arrows.svg';

import Popover from '../../ui/Popover';

const CraftingIcon = (props) => {
	let label;
	let icon;

	switch (props.type) {
		case 'shapeless':
			label = 'Shapeless Recipe';
			icon = shapeless.src;
			break;

		default:
			break;
	}

	return (
		<Popover
			label={label}
			type='info'
		>
			<img
				src={icon}
				alt={label}
			/>
		</Popover>
	);
};

export default CraftingIcon;
