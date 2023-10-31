import CardImage from '../ui/card/CardImage';
import CardTitle from '../ui/card/CardTitle';
import ClickableCard from '../ui/card/ClickableCard';

const ThemeCard = (props) => {
	return (
		<ClickableCard href={`/vault/themes/${props.theme.id}`}>
			<CardImage
				src={props.theme.image}
				alt={props.theme.name}
			/>

			<CardTitle>{props.theme.name}</CardTitle>
		</ClickableCard>
	);
};

export default ThemeCard;
