import Slot from './Slot';

const Output = (props) => {
	return (
		<Slot
			item={props.output}
			highlighted={props.current === props.output}
		/>
	);
};

export default Output;
