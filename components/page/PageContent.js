import styles from './PageContent.module.scss';

const PageContent = (props) => {
	return <div className={styles.content}>{props.children}</div>;
};

export default PageContent;
