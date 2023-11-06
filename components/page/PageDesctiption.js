import styles from './PageDesctiption.module.scss';

const PageDesctiption = (props) => {
	return <div className={styles.description}>{props.children}</div>;
};

export default PageDesctiption;
