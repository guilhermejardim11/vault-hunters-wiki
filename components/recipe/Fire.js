import styles from './Fire.module.scss';
import fire from '../../assets/fire.svg';

const Fire = () => {
	return (
		<img
			className={styles.fire}
			src={fire.src}
			alt='fire'
		/>
	);
};

export default Fire;
