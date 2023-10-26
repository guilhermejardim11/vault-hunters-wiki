import Link from 'next/link';

import styles from './DropdownLink.module.scss';

const DropdownLink = (props) => {
	const printDropdown = props.links.map((link) => {
		return (
			<li key={link.label}>
				<Link
					href={`${props.href}${link.href}`}
					className={styles.dropdown__btn}
				>
					{link.label}
				</Link>
			</li>
		);
	});

	return (
		<div className={styles.dropdown}>
			<Link
				href={props.href}
				className={styles.dropdown__btn}
			>
				{props.label}
			</Link>

			<ul className={styles.dropdown__content}>{printDropdown}</ul>
		</div>
	);
};

export default DropdownLink;
