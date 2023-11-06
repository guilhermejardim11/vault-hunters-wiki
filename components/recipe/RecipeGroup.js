import styles from './RecipeGroup.module.scss';

const RecipeGroup = (props) => {
	return <div className={styles.group}>{props.children}</div>;
};

export default RecipeGroup;
