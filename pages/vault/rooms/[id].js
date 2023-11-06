import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { rooms } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageResume from '../../../components/page/PageResume';
import PageFootnote from '../../../components/page/PageFootnote';
import Columns from '../../../components/layout/Columns';
import SpawnCard from '../../../components/room/details/SpawnCard';
import VariantsCard from '../../../components/room/details/VariantsCard';
import SpawnersCard from '../../../components/room/details/SpawnersCard';
import FloorsCard from '../../../components/room/details/FloorsCard';
import LootCard from '../../../components/room/details/LootCard';
import PageContent from '../../../components/page/PageContent';
import PageError from '../../../components/page/PageError';

const RoomDetailsPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const [roomDetails, setRoomDetails] = useState({
		name: '',
		image: '',
		category: '',
		desc: '',
		odds: '',
		variants: '',
		spawners: '',
		floors: '',
		loot: [],
	});

	useEffect(() => {
		if (!rooms.hasOwnProperty(id)) {
			setRoomDetails(null);
			return;
		}

		const data = rooms[id];

		setRoomDetails((prevState) => ({
			name: data.name && data.name,
			image: data.image && data.image,
			category: data.category && data.category,
			desc: data.desc && data.desc,
			odds: data.odds && data.odds,
			variants: data.variants && data.variants,
			spawners: data.spawners && data.spawners,
			floors: data.floors && data.floors,
			loot: data.loot && data.loot,
		}));
	}, [rooms, id]);

	return roomDetails ? (
		<>
			<PageTitle>{roomDetails.name}</PageTitle>

			<PageResume>
				<img
					src={roomDetails.image}
					alt={roomDetails.name}
				/>

				<p>{roomDetails.desc}</p>
			</PageResume>

			<PageContent>
				<Columns>
					{roomDetails.odds && <SpawnCard odds={roomDetails.odds} />}
					{roomDetails.variants && <VariantsCard variants={roomDetails.variants} />}
					{roomDetails.spawners && <SpawnersCard spawners={roomDetails.spawners} />}
					{roomDetails.floors && <FloorsCard floors={roomDetails.floors} />}
					{roomDetails.loot.length > 0 && <LootCard loot={roomDetails.loot} />}
				</Columns>
			</PageContent>

			<PageFootnote>
				<li>
					<sup>[1]</sup> This value is based of the spawn chance of the room category (7% for Challenge rooms and 2% for Omega rooms).
				</li>
			</PageFootnote>
		</>
	) : (
		<PageError
			type='room'
			id={id}
		/>
	);
};

export default RoomDetailsPage;
