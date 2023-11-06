import Link from 'next/link';

import styles from './Navigation.module.scss';

import Button from '../ui/Button';
import DropdownLink from '../ui/DropdownLink';

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<DropdownLink
						label='Vault'
						href='/vault'
						links={[
							{
								label: 'Themes',
								href: '/themes',
							},
							// {
							// 	label: 'Objectives',
							// 	href: '/objectives',
							// },
							{
								label: 'Modifiers',
								href: '/modifiers',
							},
							{
								label: 'Rooms',
								href: '/rooms',
							},
							{
								label: 'Experience',
								href: '/experience',
							},
							{
								label: 'Mobs',
								href: '/mobs',
							},
							// {
							// 	label: 'Altar Ingredients',
							// 	href: '/ingredients',
							// },
						]}
					/>
				</li>
				<li>
					<DropdownLink
						label='Loot'
						href='/loot'
						links={[
							{
								label: 'Items',
								href: '/items',
							},
						]}
					/>
				</li>
				{/* <li>
					<Link href='/gear'>Gear</Link>
				</li>
				<li>
					<Link href='/skills'>Skills</Link>
				</li>
				<li>
					<Link href='/research'>Research</Link>
				</li>
				<li>
					<Link href='/other'>Other</Link>
				</li> */}
				<li>
					<Button href='https://vaulthunters.gg/how-to-play/'>Play Now</Button>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
