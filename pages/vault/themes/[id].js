import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { themes } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import SpawnOddsGroup from '../../../components/theme/details/SpawnOddsGroup';
import MobSpawnGroup from '../../../components/theme/details/MobSpawnGroup';

const ThemeDetailsPage = () => {
	const router = useRouter();

	const [themeDetails, setThemeDetails] = useState({
		name: '',
		image: '',
		spawn: {},
		mobs: [],
	});

	useEffect(() => {
		if (!router.query.id) {
			return;
		}

		const data = themes[router.query.id];

		setThemeDetails((prevState) => ({
			name: data.name && data.name,
			image: data.image && data.image,
			spawn: data.spawn && data.spawn,
			mobs: data.mobs && data.mobs,
		}));
	}, [router.query.id]);

	return (
		<>
			<PageTitle>{themeDetails.name}</PageTitle>

			<div>
				<p>{themeDetails.desc}</p>

				<img
					src={themeDetails.image}
					alt={themeDetails.name}
				/>

				<PageContent>
					<SpawnOddsGroup odds={themeDetails.spawn} />
					<MobSpawnGroup mobs={themeDetails.mobs} />
				</PageContent>
			</div>
		</>
	);
};

export default ThemeDetailsPage;
