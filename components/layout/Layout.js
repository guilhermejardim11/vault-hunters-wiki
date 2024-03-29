import styles from './Layout.module.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Cookies from '../cookies/Cookies';

const Layout = (props) => {
	return (
		<>
			<div className={styles.background}>
				<Header />
				<main>{props.children}</main>
			</div>
			<Footer />
			<Cookies />
		</>
	);
};

export default Layout;
