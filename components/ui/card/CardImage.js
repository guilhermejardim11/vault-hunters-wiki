import styles from './CardImage.module.scss';

const CardImage = (props) => {
	return (
		<img
			className={styles.image}
			src={props.src}
			alt={props.alt}
		/>
	);
};

export default CardImage;
