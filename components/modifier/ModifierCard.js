import PixelImg from '../ui/PixelImg';
import Card from '../ui/card/Card';
import CardTitle from '../ui/card/CardTitle';

const ModifierCard = (props) => {
	return (
		<Card key={props.modifier.id}>
			<PixelImg
				src={props.modifier.icon}
				alt={props.modifier.title}
			/>

			<CardTitle>{props.modifier.title}</CardTitle>

			<p>{props.modifier.desc}</p>
		</Card>
	);
};

export default ModifierCard;
