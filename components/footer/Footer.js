import styles from './Footer.module.scss';

import FooterLogo from './FooterLogo';
import Button from '../ui/Button';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.socials}>
				<FooterLogo />

				<ul>
					<li>
						<a
							href='https://vaulthunters.gg/'
							rel='external'
							target='_blank'
						>
							Official Website
						</a>
					</li>
					<li>
						<a
							href='https://www.reddit.com/r/VaultHuntersMinecraft/'
							rel='external'
							target='_blank'
						>
							Reddit
						</a>
					</li>
					<li>
						<a
							href='https://discord.gg/vaulthunters/'
							rel='external'
							target='_blank'
						>
							Discord
						</a>
					</li>
				</ul>
			</div>

			<div className={styles.version}>
				<div className={styles.version__name}>Vault Hunters 3rd Edition</div>

				<p className={styles.version__desc}>
					Minecraft Modpack
					<br />
					v3.11.5
				</p>

				<div className={styles.version__actions}>
					<Button href='https://vaulthunters.gg/how-to-play'>Play Now</Button>

					<Button
						href='https://vaulthunters.gg/patch-notes'
						alt
					>
						Patch Notes
					</Button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
