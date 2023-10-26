import styles from './PageTitle.module.scss';

import Breadcrumbs from '../ui/Breadcrumbs';

const PageTitle = (props) => {
	return (
		<div className={styles.page_title}>
			<Breadcrumbs />
			<h1 className={styles.title}>{props.children}</h1>
		</div>
	);
};

export default PageTitle;
