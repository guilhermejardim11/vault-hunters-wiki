import styles from './MobDetailsGrid.module.scss';

import damage from '../../../assets/damage.png';
import critical_chance from '../../../assets/critical-chance.png';
import max_health from '../../../assets/max-health.png';
import critical_mult from '../../../assets/critical-mult.png';
import speed from '../../../assets/speed.png';
import knockback_resistance from '../../../assets/knockback-resistance.png';

import MobDetailsRow from './MobDetailsRow';

const MobDetails = (props) => {
	return (
		<div className={styles.details}>
			<MobDetailsRow
				image={damage.src}
				label='Attack Damage'
				value={props.damage}
			/>
			<MobDetailsRow
				image={critical_chance.src}
				label='Critical Chance'
				value={props.critical_chance}
			/>
			<MobDetailsRow
				image={max_health.src}
				label='Max Health'
				value={props.max_health}
			/>
			<MobDetailsRow
				image={critical_mult.src}
				label='Critical Chance Multiplier'
				value={props.critical_mult}
			/>
			<MobDetailsRow
				image={speed.src}
				label='Movement Speed'
				value={props.speed}
			/>
			<MobDetailsRow
				image={knockback_resistance.src}
				label='Knockback Resistance'
				value={props.knockback_resistance}
			/>
		</div>
	);
};

export default MobDetails;
