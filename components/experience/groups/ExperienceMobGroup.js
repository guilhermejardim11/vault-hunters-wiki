import { mobs } from '../../../database';

import ExperienceGroup from './ExperienceGroup';
import ClickableCard from '../../ui/card/ClickableCard';
import CardTitle from '../../ui/card/CardTitle';
import CardValue from '../../ui/card/CardValue';
import PixelImg from '../../ui/PixelImg';

const ExperienceMobGroup = (props) => {
	const experienceList = props.list;

	return (
		experienceList &&
		Object.keys(experienceList).length > 0 && (
			<ExperienceGroup title={props.title}>
				{Object.keys(experienceList).map((id) => {
					if (!mobs.hasOwnProperty(id)) {
						return;
					}

					const experience = experienceList[id];
					const mob = mobs[id];

					if (typeof experience === 'object') {
						return Object.keys(experience).map((variant) => {
							let alt;

							if (mob.variants?.hasOwnProperty(variant)) {
								alt = mob.variants[variant];
							} else if (mob.tiers?.hasOwnProperty(variant)) {
								alt = mob.tiers[variant];
							} else if (mob.special?.hasOwnProperty(variant)) {
								alt = mob.special[variant];
							} else {
								return;
							}

							return (
								<ClickableCard
									key={`${id}-${variant}`}
									href={`/vault/mobs/${id}`}
								>
									<PixelImg
										src={alt.icon}
										alt={mob.name}
									/>

									<CardTitle>
										<b>{alt.name}</b> {mob.name}
									</CardTitle>

									<CardValue
										label='Experience'
										value={`${experience[variant]}xp`}
									/>
								</ClickableCard>
							);
						});
					}

					return (
						<ClickableCard
							key={id}
							href={`/vault/mobs/${id}`}
						>
							<PixelImg
								src={mob.icon}
								alt={mob.name}
							/>

							<CardTitle>{mob.name}</CardTitle>

							<CardValue
								label='Experience'
								value={`${experience}xp`}
							/>
						</ClickableCard>
					);
				})}
			</ExperienceGroup>
		)
	);
};

export default ExperienceMobGroup;
