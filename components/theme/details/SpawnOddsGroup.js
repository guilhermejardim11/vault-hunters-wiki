import Columns from '../../layout/Columns';
import Card from '../../ui/card/Card';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';

const SpawnOddsGroup = (props) => {
	return (
		Object.keys(props.odds)?.length > 0 && (
			<div>
				<h2>Spawn Odds</h2>

				<Columns>
					{Object.keys(props.odds).map((level) => (
						<Card key={level}>
							<CardTitle>{`Level ${level}`}</CardTitle>

							<CardValue
								label='Odds'
								value={`${props.odds[level]}%`}
							/>
						</Card>
					))}
				</Columns>
			</div>
		)
	);
};

export default SpawnOddsGroup;
