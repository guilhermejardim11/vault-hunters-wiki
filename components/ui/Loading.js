import styles from './Loading.module.scss';
import pog from '../../assets/icons/items/pog.gif';

import PixelImg from './PixelImg';

const Loading = (props) => {
	return (
		<div className={styles.loading}>
			<PixelImg
				src={pog.src}
				alt='Pog Loading'
			/>
			<p>{props.message}</p>
		</div>
	);
};

export default Loading;
