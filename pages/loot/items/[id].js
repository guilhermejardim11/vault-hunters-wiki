import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { items } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import PageResume from '../../../components/page/PageResume';
import ItemRecipes from '../../../components/item/details/ItemRecipes';
import ItemUses from '../../../components/item/details/ItemUses';
import PageError from '../../../components/page/PageError';

const ItemDetailsPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const [itemDetails, setItemDetails] = useState({
		name: '',
		desc: '',
		recipes: {},
	});

	useEffect(() => {
		if (!items.hasOwnProperty(id)) {
			setMobDetails(null);
			return;
		}

		const data = items.the_vault[id];

		if (!data) {
			setItemDetails(null);
			return;
		}

		setItemDetails((prevState) => ({
			name: data.name && data.name,
			desc: data.desc && data.desc,
			recipes: data.recipes && data.recipes,
		}));
	}, [items, id]);

	return itemDetails ? (
		<>
			<PageTitle>{itemDetails.name}</PageTitle>

			<PageResume>
				<p>{itemDetails.desc}</p>
			</PageResume>

			<PageContent>
				<ItemRecipes id={`the_vault:${id}`} />
				<ItemUses id={`the_vault:${id}`} />
			</PageContent>
		</>
	) : (
		<PageError
			type='item'
			id={id}
		/>
	);
};

export default ItemDetailsPage;
