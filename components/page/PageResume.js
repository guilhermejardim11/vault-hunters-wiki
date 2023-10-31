import styles from './PageResume.module.scss';

const PageResume = (props) => {
	return <div className={styles.resume}>{props.children}</div>;
};

export default PageResume;
