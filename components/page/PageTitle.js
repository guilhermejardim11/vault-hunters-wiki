import styles from './PageTitle.module.scss';

import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

const PageTitle = (props) => {
	return (
		<div className={styles.title}>
			<Breadcrumbs />
			<h1>{props.children}</h1>
		</div>
	);
};

export default PageTitle;
