import styles from './PageError.module.scss';

const PageError = (props) => {
	return (
		<div className={styles.error}>
			<h2>Oooops...</h2>
			<p>
				No {props.type} found for the id <em>{props.id}</em>.
			</p>
		</div>
	);
};

export default PageError;
