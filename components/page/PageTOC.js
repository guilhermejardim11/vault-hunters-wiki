import Link from 'next/link';
import styles from './PageTOC.module.scss';

const PageTOC = (props) => {
	return (
		<div className={styles.toc}>
			<h2>Table of Contents</h2>

			<ul>
				{props.links?.map((link) => {
					return (
						<li key={link.label}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PageTOC;
