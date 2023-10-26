import scavenger_mob_purple from '../../../assets/icons/items/scavenger/scavenger_mob_purple.png';
import vault_fighter from '../../../assets/icons/mobs/vault_fighter.png';
import vault_fighter_1 from '../../../assets/icons/mobs/vault_fighter_1.png';
import vault_fighter_2 from '../../../assets/icons/mobs/vault_fighter_2.png';
import vault_fighter_3 from '../../../assets/icons/mobs/vault_fighter_3.png';
import vault_fighter_4 from '../../../assets/icons/mobs/vault_fighter_4.png';

import MobDetailsGrid from '../../../components/details/mob/MobDetailsGrid';
import PageTitle from '../../../components/page/PageTitle';
import Card from '../../../components/ui/card/Card';
import ColumnGroup from '../../../components/ui/card/ColumnGroup';
import CardValue from '../../../components/ui/card/CardValue';
import LabeledCard from '../../../components/ui/card/LabeledCard';
import PixelImg from '../../../components/ui/PixelImg';
import Popover from '../../../components/ui/Popover';
import PageContent from '../../../components/layout/PageContent';

const MobDetailsPage = () => {
	return (
		<>
			<PageTitle>Vault Fighter</PageTitle>

			<div>
				<p>The Vault Fighter is a common mob in the Vaults.</p>

				<MobDetailsGrid
					damage='1-3'
					critical_chance='20%'
					max_health='2-20'
					critical_mult='2-20'
					speed='2-20'
					knockback_resistance='2-20'
				/>

				<ColumnGroup>
					<Card>
						<p>Scavenger Drop</p>

						<Popover label='Purple Essence'>
							<PixelImg
								src={scavenger_mob_purple.src}
								alt='Purple Essence'
							/>
						</Popover>
					</Card>

					<Card>
						<p>Soul Shards Drop</p>

						<CardValue
							label='Amount'
							value='1'
						/>
						<CardValue
							label='Odds'
							value='300%'
						/>
					</Card>
				</ColumnGroup>
			</div>

			<PageContent>
				<div>
					<h2>Tiers</h2>

					<ColumnGroup>
						<LabeledCard label='Tier 1'>
							<PixelImg
								src={vault_fighter.src}
								alt='Vault Fighter'
							/>
							<CardValue
								label='Spawn'
								value='lvl 0+'
							/>
							<CardValue
								label='Experience Drop'
								value='16xp'
							/>
						</LabeledCard>

						<LabeledCard label='Tier 2'>
							<PixelImg
								src={vault_fighter_1.src}
								alt='Vault Fighter T2'
							/>
							<CardValue
								label='Spawn'
								value='lvl 20+'
							/>
							<CardValue
								label='Experience Drop'
								value='24xp'
							/>
						</LabeledCard>

						<LabeledCard label='Tier 3'>
							<PixelImg
								src={vault_fighter_2.src}
								alt='Vault Fighter T3'
							/>
							<CardValue
								label='Spawn'
								value='lvl 50+'
							/>
							<CardValue
								label='Experience Drop'
								value='42xp'
							/>
						</LabeledCard>

						<LabeledCard label='Tier 4'>
							<PixelImg
								src={vault_fighter_3.src}
								alt='Vault Fighter T4'
							/>
							<CardValue
								label='Spawn'
								value='lvl 65+'
							/>
							<CardValue
								label='Experience Drop'
								value='60xp'
							/>
						</LabeledCard>
					</ColumnGroup>
				</div>

				<div>
					<h2>Special Traits</h2>

					<ColumnGroup>
						<LabeledCard label='Speedy'>
							<CardValue
								label='Spawn'
								value='lvl 30+'
							/>
						</LabeledCard>
					</ColumnGroup>
				</div>
			</PageContent>
		</>
	);
};

export default MobDetailsPage;
