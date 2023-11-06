import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { themes } from '../../../database';

import PageTitle from '../../../components/page/PageTitle';
import PageResume from '../../../components/page/PageResume';
import PageContent from '../../../components/page/PageContent';
import SpawnOddsGroup from '../../../components/theme/details/SpawnOddsGroup';
import MobSpawnGroup from '../../../components/theme/details/MobSpawnGroup';

const ThemeDetailsPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const [themeDetails, setThemeDetails] = useState({
		name: '',
		image: '',
		spawn: {},
		mobs: [],
	});

	useEffect(() => {
		if (!themes.hasOwnProperty(id)) {
			setMobDetails(null);
			return;
		}

		const data = themes[id];

		setThemeDetails((prevState) => ({
			name: data.name && data.name,
			image: data.image && data.image,
			spawn: data.spawn && data.spawn,
			mobs: data.mobs && data.mobs,
		}));
	}, [themes, id]);

	return themeDetails ? (
		<>
			<PageTitle>{themeDetails.name}</PageTitle>

			<PageResume>
				<img
					src={themeDetails.image}
					alt={themeDetails.name}
				/>

				<p>{themeDetails.desc}</p>
			</PageResume>

			<PageContent>
				<SpawnOddsGroup odds={themeDetails.spawn} />
				<MobSpawnGroup mobs={themeDetails.mobs} />
			</PageContent>
		</>
	) : (
		<PageError
			type='theme'
			id={id}
		/>
	);
};

export default ThemeDetailsPage;
