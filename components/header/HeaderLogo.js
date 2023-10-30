import Link from 'next/link';

import styles from './HeaderLogo.module.scss';
import logo from '../../assets/logo.png';

const HeaderLogo = () => {
	return (
		<Link href='/'>
			<img
				src={logo.src}
				alt='Vault Hunters'
				className={styles.logo}
			/>
		</Link>
	);
};

export default HeaderLogo;
