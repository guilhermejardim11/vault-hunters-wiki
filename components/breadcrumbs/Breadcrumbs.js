import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Breadcrumbs.module.scss';

const CapitalizeWords = (text) => {
	const words = text.replace('-', ' ').split(' ');

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}

	return words.join(' ');
};

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
						<Link href={href}>{CapitalizeWords(value)}</Link>
					</Fragment>
				);
			});
		}
	};

	return (
		<div className={styles.breadcrumbs}>
			<span>{'<'}</span>
			<Link href='/'>Home</Link>
			{createBreadcrumbs()}
		</div>
	);
};

export default Breadcrumbs;
