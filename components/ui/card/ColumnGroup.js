import styles from './ColumnGroup.module.scss';

const ColumnGroup = (props) => {
	return <div className={styles.column_group}>{props.children}</div>;
};

export default ColumnGroup;
