import PageTitle from '../../components/page/PageTitle';
import PageResume from '../../components/page/PageResume';
import PageTOC from '../../components/page/PageTOC';

const LootPage = () => {
	return (
		<>
			<PageTitle>Loot</PageTitle>

			<PageResume></PageResume>

			<PageTOC
				links={[
					{
						label: 'Items',
						href: '/loot/items',
					},
				]}
			/>
		</>
	);
};

export default LootPage;
