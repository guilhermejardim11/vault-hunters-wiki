import Columns from '../../layout/Columns';

const ExperienceGroup = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<Columns>{props.children}</Columns>
		</div>
	);
};

export default ExperienceGroup;
