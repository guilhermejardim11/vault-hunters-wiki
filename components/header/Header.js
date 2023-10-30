import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import Navigation from '../navigation/Navigation';

const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderLogo />
			<Navigation />
		</header>
	);
};

export default Header;
