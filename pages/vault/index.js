import Link from 'next/link';

import PageContent from '../../components/page/PageContent';
import PageTitle from '../../components/page/PageTitle';
import PageTOC from '../../components/page/PageTOC';
import PageResume from '../../components/page/PageResume';

const VaultPage = () => {
	return (
		<>
			<PageTitle>The Vault</PageTitle>

			<PageResume>
				<p>The Vault have many misteries to unfold! Risky, scary, deadly and wonderful, filled with loot and richities. Every Vault is different, and depends on the crystal you used to enter it, no Vault will ever be the same.</p>
				<p>Experience incredible rewarding exploration and very challenging rooms. The vault will reward those who take risks, but with risks comes dangers…</p>
			</PageResume>

			<PageTOC
				links={[
					{
						label: 'Themes',
						href: '/vault/themes',
					},
					{
						label: 'Modifiers',
						href: '/vault/modifiers',
					},
					{
						label: 'Rooms',
						href: '/vault/rooms',
					},
					{
						label: 'Experience',
						href: '/vault/experience',
					},
					{
						label: 'Mobs',
						href: '/vault/mobs',
					},
					{
						label: 'Cooperative Vaults',
						href: '#coop-vaults',
					},
				]}
			/>

			<PageContent>
				<div>
					<h2 id='layout'>Layout</h2>

					<p>
						The first room in a Vault is the Portal Room. This is the Vault's exit for when the player decides to leave the Vault. Note that a player can also leave the Vault by completing the <Link href='/vault/objectives'>Objectives</Link>.
					</p>
					<p>
						The <Link href='/loot/items/vault-compass'>Vault Compass</Link> ........
					</p>
				</div>

				<div>
					<h2 id='coop-vaults'>Cooperative Vaults</h2>

					<p>A Vault can be ran together with others. This is done by simply entering the same Vault Portal as another player.</p>
					<p>
						Upon unaliving inside the Vault, a <a href='#spirit'>Spirit</a> spawns at the player's death location, given they are not the last remaining in that Vault.
					</p>
					<p>Once the player leaves the Vault, they can't rejoin.</p>
					<p>
						Running a Vault with others is made easier with <Link href='/game/parties'>Parties</Link>.
					</p>
				</div>
			</PageContent>
		</>
	);
};

export default VaultPage;
