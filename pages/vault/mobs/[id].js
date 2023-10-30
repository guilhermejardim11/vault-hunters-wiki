import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Columns from '../../../components/layout/Columns';
import ScavDropCard from '../../../components/mob/details/ScavDropCard';
import SpawnCard from '../../../components/mob/details/SpawnCard';
import XPCard from '../../../components/mob/details/XPCard';
import SoulChardCard from '../../../components/mob/details/SoulChardCard';
import MobVariants from '../../../components/mob/details/MobVariants';

const MobDetailsPage = () => {
	const router = useRouter();

	const [mobDetails, setMobDetails] = useState({
		name: '',
		xp: '',
		spawn: '',
		desc: '',
		icon: '',
		scav_drop: '',
		soul_shards: {
			amount: '',
			odds: '',
		},
		variants: [],
		tiers: [],
		special: [],
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!router.query.id) {
			return;
		}

		const fetchMob = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(`https://vault-hunters-wiki-default-rtdb.firebaseio.com/mobs/${router.query.id}.json`);
				const data = await response.json();

				if (!response.ok) {
					throw new Error({ message: 'Error' });
				}

				setMobDetails((prevState) => ({
					name: data.name && data.name,
					xp: data.xp && data.xp,
					spawn: data.spawn && data.spawn,
					desc: data.desc && data.desc,
					icon: data.icon && data.icon,
					scav_drop: data.scav_drop && data.scav_drop,
					soul_shards: {
						amount: data.soul_shards?.amount,
						odds: data.soul_shards?.odds,
					},
					variants: data.variants && data.variants,
					tiers: data.tiers && data.tiers,
					special: data.special && data.special,
				}));
			} catch (error) {
				// setError(error.message);
			}

			setIsLoading(false);
		};

		fetchMob();
	}, [router.query.id]);

	return (
		!isLoading && (
			<>
				<PageTitle>{mobDetails.name}</PageTitle>

				<div>
					<p>{mobDetails.desc}</p>

					{/* <MobDetailsGrid
						damage='1-3'
						critical_chance='20%'
						max_health='2-20'
						critical_mult='2-20'
						speed='2-20'
						knockback_resistance='2-20'
					/> */}

					<Columns>
						{mobDetails.scav_drop && <ScavDropCard essence={mobDetails.scav_drop} />}
						{mobDetails.spawn && <SpawnCard spawn={mobDetails.spawn} />}
						{mobDetails.xp && <XPCard xp={mobDetails.xp} />}
						{mobDetails.soul_shards.amount && <SoulChardCard soul_shards={mobDetails.soul_shards} />}
					</Columns>
				</div>

				<PageContent>
					{mobDetails.variants?.length && (
						<MobVariants
							title='Variants'
							list={mobDetails.variants}
						/>
					)}

					{mobDetails.tiers?.length && (
						<MobVariants
							title='Tiers'
							list={mobDetails.tiers}
						/>
					)}

					{mobDetails.special?.length && (
						<MobVariants
							title='Special'
							list={mobDetails.special}
						/>
					)}
				</PageContent>
			</>
		)
	);
};

export default MobDetailsPage;
