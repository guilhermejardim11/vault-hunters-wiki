import { jsonToArray } from '../../helper';

import Columns from '../layout/Columns';
import ItemCard from './ItemCard';

const ItemGroup = (props) => {
	const itemList = jsonToArray(props.list);

	return (
		itemList.length > 0 && (
			<div>
				{props.title && <h2>{props.title}</h2>}

				<Columns>
					{itemList.map((item) => (
						<ItemCard
							key={item.id}
							item={item}
						/>
					))}
				</Columns>
			</div>
		)
	);
};

export default ItemGroup;
