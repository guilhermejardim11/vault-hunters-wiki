import Link from 'next/link';

import styles from './ThemeGroup.module.scss';

import Columns from '../layout/Columns';
import Card from '../ui/card/Card';
import CardTitle from '../ui/card/CardTitle';

const jsonToArray = (object) => {
	const mobArray = [];

	for (const id in object) {
		mobArray.push({
			...object[id],
			id: id,
		});
	}

	return mobArray;
};

const ThemeGroup = (props) => {
	const themeList = jsonToArray(props.themes);

	return (
		<div>
			<h2>{props.title}</h2>

			<Columns>
				{themeList.map((theme) => (
					<Link
						key={theme.id}
						href={`/vault/themes/${theme.id}`}
					>
						<div className={styles.theme}>
							<Card label={theme.name}>
								<img
									src={theme.image}
									alt={theme.name}
								/>

								<CardTitle>{theme.name}</CardTitle>
							</Card>
						</div>
					</Link>
				))}
			</Columns>
		</div>
	);
};

export default ThemeGroup;
