import Link from 'next/link';

import { jsonToArray } from '../../helper';

import styles from './ThemeGroup.module.scss';

import Columns from '../layout/Columns';
import Card from '../ui/card/Card';
import CardTitle from '../ui/card/CardTitle';

const ThemeGroup = (props) => {
	const themeList = jsonToArray(props.themes);

	return (
		themeList.length > 0 && (
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
		)
	);
};

export default ThemeGroup;
