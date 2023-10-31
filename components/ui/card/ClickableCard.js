import Link from 'next/link';

import styles from './ClickableCard.module.scss';

import Card from './Card';

const ClickableCard = (props) => {
	return (
		<Link href={props.href}>
			<div className={`${styles.clickable} ${props.className}`}>
				<Card>{props.children}</Card>
			</div>
		</Link>
	);
};

export default ClickableCard;
