import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Loading from '../../../components/ui/Loading';
import PageTitle from '../../../components/page/PageTitle';
import PageContent from '../../../components/page/PageContent';
import Columns from '../../../components/layout/Columns';
import Card from '../../../components/ui/card/Card';
import CardTitle from '../../../components/ui/card/CardTitle';
import CardValue from '../../../components/ui/card/CardValue';

const ThemeDetailsPage = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

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

		const fetchTheme = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(`https://vault-hunters-wiki-default-rtdb.firebaseio.com/themes/${router.query.id}.json`);
				const data = await response.json();

				if (!response.ok) {
					throw new Error({ message: 'Error' });
				}

				setThemeDetails((prevState) => ({
					name: data.name && data.name,
					image: data.image && data.image,
					spawn: data.spawn && data.spawn,
					mobs: data.mobs && data.mobs,
				}));
			} catch (error) {}

			setIsLoading(false);
		};

		fetchTheme();
	}, [router.query.id]);

	return isLoading ? (
		<Loading message='Loading Themes...' />
	) : (
		<>
			<PageTitle>{themeDetails.name}</PageTitle>

			<div>
				<p>{themeDetails.desc}</p>

				<img
					src={themeDetails.image}
					alt={themeDetails.name}
				/>

				<PageContent>
					<div>
						<h2>Spawn Odds</h2>

						<Columns>
							{Object.keys(themeDetails.spawn).map((theme) => (
								<Card key={theme}>
									<CardTitle>{`Level ${theme}`}</CardTitle>

									<CardValue
										label='Odds'
										value={`${themeDetails.spawn[theme]}%`}
									/>
								</Card>
							))}
						</Columns>
					</div>

					<div>
						<h2>Mobs</h2>

						<Columns></Columns>
					</div>
				</PageContent>
			</div>
		</>
	);
};

export default ThemeDetailsPage;
