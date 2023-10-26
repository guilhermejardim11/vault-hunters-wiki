import styles from './Search.module.scss';
import search_icon from '../../assets/search.svg';

const Search = (props) => {
	return (
		<div className={styles.search}>
			<img
				src={search_icon.src}
				alt={'Search'}
				className={styles.img}
			/>
			<input
				type='text'
				name={props.name}
				value={props.value}
				placeholder='Search'
				onChange={props.onChange}
				className={styles.input}
			/>
		</div>
	);
};

export default Search;
