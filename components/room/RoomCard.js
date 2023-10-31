import CardImage from '../ui/card/CardImage';
import CardTitle from '../ui/card/CardTitle';
import ClickableCard from '../ui/card/ClickableCard';

const RoomCard = (props) => {
	return (
		<ClickableCard href={`/vault/rooms/${props.room.id}`}>
			<CardImage
				src={props.room.image}
				alt={props.room.name}
			/>

			<CardTitle>{props.room.name}</CardTitle>
		</ClickableCard>
	);
};

export default RoomCard;
