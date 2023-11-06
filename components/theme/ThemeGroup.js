import { jsonToArray } from '../../helper';

import Columns from '../layout/Columns';
import ThemeCard from './ThemeCard';

const ThemeGroup = (props) => {
	const themeList = jsonToArray(props.list);

	return (
		themeList.length > 0 && (
			<div>
				<h2>{props.title}</h2>

				<Columns>
					{themeList.map((theme) => (
						<ThemeCard
							key={theme.id}
							theme={theme}
						/>
					))}
				</Columns>
			</div>
		)
	);
};

export default ThemeGroup;
