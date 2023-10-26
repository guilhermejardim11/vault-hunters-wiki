import ColumnGroup from '../ui/card/ColumnGroup';
import LabeledCard from '../../components/ui/card/LabeledCard';
import PixelImg from '../../components/ui/PixelImg';

const ModifierGroup = (props) => {
	return (
		props.modifiers?.length > 0 && (
			<div>
				<h2>{props.title}</h2>

				<ColumnGroup>
					{props.modifiers?.map((modifier) => {
						return (
							<LabeledCard
								key={modifier.id}
								label={modifier.title}
							>
								<PixelImg
									src={modifier.icon}
									alt={modifier.title}
								/>

								<p>{modifier.desc}</p>
							</LabeledCard>
						);
					})}
				</ColumnGroup>
			</div>
		)
	);
};

export default ModifierGroup;
