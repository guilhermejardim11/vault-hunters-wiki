import style from './CardTitle.module.scss';

const CardTitle = (props) => {
	return <div className={style.title}>{props.children}</div>;
};

export default CardTitle;
