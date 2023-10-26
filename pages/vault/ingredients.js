import vault_fighter from '../../assets/icons/mobs/vault_fighter.png';

import MobDetailsGrid from '../../components/details/mob/MobDetailsGrid';
import PageTitle from '../../components/page/PageTitle';
import Card from '../../components/ui/card/Card';
import ColumnGroup from '../../components/ui/card/ColumnGroup';
import CardValue from '../../components/ui/card/CardValue';
import LabeledCard from '../../components/ui/card/LabeledCard';
import PixelImg from '../../components/ui/PixelImg';
import Popover from '../../components/ui/Popover';
import PageContent from '../../components/layout/PageContent';

const IngredientsPage = () => {
	return (
		<>
			<PageTitle>Altar Ingredients</PageTitle>

			<PageContent>
				<div>
					<h2>Resources</h2>

					<ColumnGroup>
						<LabeledCard label='Rocks'>
							<PixelImg
								src={vault_fighter.src}
								alt='Vault Fighter'
							/>
							<CardValue
								label='Raw Room'
								value='Village'
							/>
						</LabeledCard>
					</ColumnGroup>
				</div>
			</PageContent>
		</>
	);
};

export default IngredientsPage;
