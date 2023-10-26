import styles from './Button.module.scss';

const Button = (props) => {
	const Tag = `${props.href ? 'a' : 'button'}`;

	return (
		<Tag
			href={props.href}
			className={`${styles.btn} ${props.alt ? styles.btn__alt : ''}`}
		>
			{props.children}
		</Tag>
	);
};

export default Button;
