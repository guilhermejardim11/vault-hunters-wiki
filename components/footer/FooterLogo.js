import styles from './FooterLogo.module.scss';
import logo from '../../assets/logo_alt.png';

const FooterLogo = () => {
	return (
		<img
			src={logo.src}
			alt='Vault Hunters Alt'
			className={styles.logo}
		/>
	);
};

export default FooterLogo;
