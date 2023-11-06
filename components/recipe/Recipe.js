import styles from './Recipe.module.scss';

import Arrow from './Arrow';
import Output from './Output';
import Icons from './Icons';

const Recipe = (props) => {
	return (
		<div className={styles.recipe}>
			{props.children}

			<Arrow />

			<Output
				output={props.output}
				current={props.current}
			/>

			<Icons icons={props.info} />
		</div>
	);
};

export default Recipe;
