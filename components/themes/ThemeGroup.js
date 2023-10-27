import ColumnGroup from '../ui/card/ColumnGroup';
import LabeledCard from '../ui/card/LabeledCard';
import CardValue from '../ui/card/CardValue';

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
		<ColumnGroup>
			{themeList.map((theme) => {
				const spawnOdds = [];
				for (const level in theme.spawn) {
					spawnOdds.push({
						level: level,
						odds: theme.spawn[level],
					});
				}

				return (
					<LabeledCard label={theme.name}>
						<p>Spawn Odds</p>

						{spawnOdds.map((spawn) => (
							<CardValue
								label={`lvl ${spawn.level}`}
								value={`${spawn.odds}%`}
							/>
						))}
					</LabeledCard>
				);
			})}
		</ColumnGroup>
	);
};

export default ThemeGroup;
