import styles from './Arrow.module.scss';
import arrow from '../../assets/arrow.svg';

const Arrow = () => {
	return (
		<img
			className={styles.arrow}
			src={arrow.src}
			alt='arrow'
		/>
	);
};

export default Arrow;
