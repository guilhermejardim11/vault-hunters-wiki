import styles from './PageFootnote.module.scss';

const PageFootnote = (props) => {
	return <ul className={styles.footnote}>{props.children}</ul>;
};

export default PageFootnote;
