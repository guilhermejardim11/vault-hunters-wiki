import Link from 'next/link';

import styles from './Slot.module.scss';
import unknown from '../../assets/unknown.png';

import { blocks, items } from '../../database';

import PixelImg from '../ui/PixelImg';
import Popover from '../ui/Popover';

const getItem = (item) => {
	const mod = item.split(':')[0];
	const id = item.split(':')[1];

	if (blocks.hasOwnProperty(mod) && blocks[mod][id]) {
		return {
			id: id,
			path: 'blocks',
			item: blocks[mod][id],
		};
	}

	if (items.hasOwnProperty(mod) && items[mod][id]) {
		return {
			id: id,
			path: 'items',
			item: items[mod][id],
		};
	}

	return null;
};

const Slot = (props) => {
	const itemObject = getItem(props.item);
	const quantity = props.quantity > 1 ? `${props.quantity}` : '';

	return (
		<div className={`${styles.slot} ${props.highlighted && styles.highlighted}`}>
			{itemObject ? (
				<>
					<Link href={`/loot/${itemObject.path}/${itemObject.id}`}>
						<div>
							<Popover
								className={styles.popover}
								label={itemObject.item.name}
							>
								<PixelImg
									src={itemObject.item.icon}
									alt={itemObject.id}
									size={40}
								/>
							</Popover>
						</div>
					</Link>
					<span className={styles.quantity}>{quantity}</span>
				</>
			) : (
				<PixelImg
					src={unknown.src}
					alt='Unknown'
					size={40}
				/>
			)}
		</div>
	);
};

export default Slot;
