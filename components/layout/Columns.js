import styles from './Columns.module.scss';

const Columns = (props) => {
	return <div className={styles.columns}>{props.children}</div>;
};

export default Columns;
