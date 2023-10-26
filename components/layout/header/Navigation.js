import Link from 'next/link';

import styles from './Navigation.module.scss';

import Button from '../../ui/Button';
import DropdownLink from '../../ui/DropdownLink';

function Navigation() {
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
							{
								label: 'Objectives',
								href: '/objectives',
							},
							{
								label: 'Modifiers',
								href: '/modifiers',
							},
							{
								label: 'Rooms',
								href: '/rooms',
							},
							{
								label: 'Mobs',
								href: '/mobs',
							},
							{
								label: 'Altar Ingredients',
								href: '/ingredients',
							},
						]}
					/>
				</li>
				<li>
					<Link href='/loot'>Loot</Link>
				</li>
				<li>
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
				</li>
				<li>
					<Button href='https://vaulthunters.gg/how-to-play'>Play Now</Button>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
