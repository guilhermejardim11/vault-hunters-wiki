import styles from './PixelImg.module.scss';

const PixelImg = (props) => {
	return (
		<img
			className={styles.pixelimg}
			src={props.src}
			alt={props.alt}
			height={props.size ? props.size : '50'}
			width={props.size ? props.size : '50'}
		/>
	);
};

export default PixelImg;
