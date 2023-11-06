import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { mobs, experience } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageResume from '../../../components/page/PageResume';
import PageContent from '../../../components/page/PageContent';
import PageError from '../../../components/page/PageError';
import Columns from '../../../components/layout/Columns';
import ScavDropCard from '../../../components/mob/details/ScavDropCard';
import SpawnCard from '../../../components/mob/details/SpawnCard';
import XPCard from '../../../components/mob/details/XPCard';
import SoulChardCard from '../../../components/mob/details/SoulChardCard';
import MobVariants from '../../../components/mob/details/MobVariants';

const MobDetailsPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const [mobDetails, setMobDetails] = useState({
		name: '',
		desc: '',
		icon: '',
		spawn: '',
		scav_drop: '',
		soul_shards: {
			amount: '',
			odds: '',
		},
		variants: {},
		tiers: {},
		special: {},
	});

	useEffect(() => {
		if (!mobs.hasOwnProperty(id)) {
			setMobDetails(null);
			return;
		}

		const data = mobs[id];

		setMobDetails((prevState) => ({
			name: data.name && data.name,
			desc: data.desc && data.desc,
			icon: data.icon && data.icon,
			spawn: data.spawn && data.spawn,
			scav_drop: data.scav_drop && data.scav_drop,
			soul_shards: {
				amount: data.soul_shards?.amount,
				odds: data.soul_shards?.odds,
			},
			variants: data.variants && data.variants,
			tiers: data.tiers && data.tiers,
			special: data.special && data.special,
		}));
	}, [mobs, id]);

	return mobDetails ? (
		<>
			<PageTitle>{mobDetails.name}</PageTitle>

			<PageResume>
				<p>{mobDetails.desc}</p>

				{/* <MobDetailsGrid
					damage='1-3'
					critical_chance='20%'
					max_health='2-20'
					critical_mult='2-20'
					speed='2-20'
					knockback_resistance='2-20'
				/> */}
			</PageResume>

			<PageContent>
				<Columns>
					{mobDetails.scav_drop && <ScavDropCard essence={mobDetails.scav_drop} />}
					{mobDetails.spawn && <SpawnCard spawn={mobDetails.spawn} />}
					{experience.mobs.hasOwnProperty(id) && (typeof experience.mobs[id] !== 'object' || experience.mobs[id].hasOwnProperty('all')) && <XPCard xp={experience.mobs[id].hasOwnProperty('all') ? experience.mobs[id].all : experience.mobs[id]} />}
					{mobDetails.soul_shards.amount && <SoulChardCard soul_shards={mobDetails.soul_shards} />}
				</Columns>

				<MobVariants
					title='Variants'
					mob={id}
					list={mobDetails.variants}
				/>

				<MobVariants
					title='Tiers'
					mob={id}
					list={mobDetails.tiers}
				/>

				<MobVariants
					title='Special'
					mob={id}
					list={mobDetails.special}
				/>
			</PageContent>
		</>
	) : (
		<PageError
			type='mob'
			id={id}
		/>
	);
};

export default MobDetailsPage;
