import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { capitalizeWords } from '../../helper';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
	const router = useRouter();

	const createBreadcrumbs = () => {
		let path = router.asPath;

		path = path.split('?')[0];
		path = path.split('/');
		path = path.filter((value) => value.length > 0);
		path.pop();

		if (path.length > 0) {
			return path.map((value, index) => {
				const href = '/' + path.slice(0, index + 1).join('/');

				return (
					<Fragment key={value}>
						<span>●</span>
						<Link href={href}>{capitalizeWords(value)}</Link>
					</Fragment>
				);
			});
		}
	};

	return (
		<div className={styles.breadcrumbs}>
			<Link href='/'>Home</Link>
			{createBreadcrumbs()}
		</div>
	);
};

export default Breadcrumbs;
