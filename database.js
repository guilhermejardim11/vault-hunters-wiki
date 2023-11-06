import { importAll } from './helper';

const mob_icons_alexsmobs = importAll(require.context('./assets/icons/mob_heads/alexsmobs', false, /\.(png)$/));
const mob_icons_auxiliaryblocks = importAll(require.context('./assets/icons/mob_heads/auxiliaryblocks', false, /\.(png)$/));
const mob_icons_ecologics = importAll(require.context('./assets/icons/mob_heads/ecologics', false, /\.(png)$/));
const mob_icons_minecraft = importAll(require.context('./assets/icons/mob_heads/minecraft', false, /\.(png)$/));
const mob_icons_quark = importAll(require.context('./assets/icons/mob_heads/quark', false, /\.(png)$/));
const mob_icons_rottencreatures = importAll(require.context('./assets/icons/mob_heads/rottencreatures', false, /\.(png)$/));
const mob_icons_the_vault = importAll(require.context('./assets/icons/mob_heads/the_vault', false, /\.(png)$/));
const modifier_icons = importAll(require.context('./assets/icons/modifiers', false, /\.(png)$/));
const objectives_icons = importAll(require.context('./assets/icons/objectives', false, /\.(png)$/));
const items_icons = importAll(require.context('./assets/icons/items', false, /\.(png|gif)$/));
const scav_items_icons = importAll(require.context('./assets/icons/items/scavenger', false, /\.(png)$/));

const theme_images = importAll(require.context('./assets/images/themes', false, /\.(png)$/));
const rooms_images = importAll(require.context('./assets/images/rooms', false, /\.(png)$/));

export const themes = {
	architect: {
		category: 'seal_architect',
		image: theme_images['architect.png'].default.src,
		name: 'Architect',
	},
	'blood-moon': {
		category: 'normal',
		image: theme_images['blood_moon.png'].default.src,
		name: 'Blood Moon',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '0',
			'20 - 29': '0.85',
			'30+': '1.86',
		},
	},
	caves: {
		category: 'normal',
		image: theme_images['caves.png'].default.src,
		name: 'Caves',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '3.72',
		},
	},
	'crimson-nether': {
		category: 'normal',
		image: theme_images['crimson_nether.png'].default.src,
		name: 'Crimson Nether',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '0',
			'20 - 29': '0.43',
			'30+': '0.93',
		},
	},
	'dark-nether': {
		category: 'normal',
		image: theme_images['dark_nether.png'].default.src,
		name: 'Dark Nether',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '0',
			'20 - 29': '0.43',
			'30+': '0.93',
		},
	},
	'deep-mesa': {
		category: 'normal',
		image: theme_images['deep_mesa.png'].default.src,
		name: 'Deep Mesa',
		spawn: {
			'0 - 9': '3.77',
			'10 - 19': '3.54',
			'20 - 29': '3.40',
			'30+': '3.72',
		},
	},
	'deepslate-caves': {
		category: 'normal',
		image: theme_images['deepslate_caves.png'].default.src,
		name: 'Deepslate Caves',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '3.72',
		},
	},
	desert: {
		category: 'normal',
		image: theme_images['desert.png'].default.src,
		name: 'Desert',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '7.44',
		},
	},
	'easter-egg': {
		category: 'normal',
		image: theme_images['easter_egg.png'].default.src,
		name: 'Easter Egg',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '1.77',
			'20 - 29': '1.28',
			'30+': '1.40',
		},
	},
	'easter-pastel': {
		category: 'normal',
		image: theme_images['easter_pastel.png'].default.src,
		name: 'Easter Pastel',
		spawn: {
			'0 - 9': '3.77',
			'10 - 19': '3.54',
			'20 - 29': '3.83',
			'30+': '4.19',
		},
	},
	'end-void': {
		category: 'normal',
		image: theme_images['end_void.png'].default.src,
		name: 'End Void',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '0',
			'20 - 29': '0',
			'30+': '0.93',
		},
	},
	'factory-void': {
		category: 'normal',
		image: theme_images['factory_void.png'].default.src,
		name: 'Factory Void',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '0',
			'20 - 29': '0',
			'30+': '0.93',
		},
	},
	festive: {
		category: 'festive',
		image: theme_images['festive.png'].default.src,
		name: 'Festive',
	},
	flooded: {
		category: 'normal',
		image: theme_images['flooded.png'].default.src,
		name: 'Flooded',
		spawn: {
			'0 - 9': '3.77',
			'10 - 19': '3.54',
			'20 - 29': '3.83',
			'30+': '4.19',
		},
	},
	'geode-caves': {
		category: 'normal',
		image: theme_images['geode_caves.png'].default.src,
		name: 'Geode Caves',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '3.72',
		},
	},
	gingerbread: {
		category: 'festive',
		image: theme_images['gingerbread.png'].default.src,
		name: 'Gingerbread',
	},
	haunted: {
		category: 'normal',
		image: theme_images['haunted.png'].default.src,
		name: 'Haunted',
		spawn: {
			'0 - 9': '3.77',
			'10 - 19': '3.54',
			'20 - 29': '3.83',
			'30+': '4.19',
		},
	},
	'honey-caves': {
		category: 'normal',
		image: theme_images['honey_caves.png'].default.src,
		name: 'Honey Caves',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '7.44',
		},
	},
	ice: {
		category: 'normal',
		image: theme_images['ice.png'].default.src,
		name: 'Ice',
		spawn: {
			'0 - 9': '2.83',
			'10 - 19': '2.65',
			'20 - 29': '2.55',
			'30+': '2.79',
		},
	},
	'ice-caves': {
		category: 'normal',
		image: theme_images['ice_caves.png'].default.src,
		name: 'Ice Caves',
		spawn: {
			'0 - 9': '2.83',
			'10 - 19': '2.65',
			'20 - 29': '2.55',
			'30+': '2.79',
		},
	},
	'lush-caves': {
		category: 'normal',
		image: theme_images['lush_caves.png'].default.src,
		name: 'Lush Caves',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '7.44',
		},
	},
	mesa: {
		category: 'normal',
		image: theme_images['mesa.png'].default.src,
		name: 'Mesa',
		spawn: {
			'0 - 9': '3.77',
			'10 - 19': '3.54',
			'20 - 29': '3.40',
			'30+': '3.72',
		},
	},
	mushroom: {
		category: 'normal',
		image: theme_images['mushroom.png'].default.src,
		name: 'Mushroom',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '7.44',
		},
	},
	oasis: {
		category: 'normal',
		image: theme_images['oasis.png'].default.src,
		name: 'Oasis',
		spawn: {
			'0 - 9': '3.77',
			'10 - 19': '3.54',
			'20 - 29': '3.83',
			'30+': '4.19',
		},
		mobs: ['vault-fighter', 'drowned', 'skeleton-pirate', 'coconut-crab', 'dead-beard', 'arbalist-piglins', 'mantis-shrimp'],
	},
	plastic: {
		category: 'seal_challenger',
		image: theme_images['plastic.png'].default.src,
		name: 'Plastic',
	},
	'sandy-caves': {
		category: 'normal',
		image: theme_images['sandy_caves.png'].default.src,
		name: 'Sandy Caves',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '7.44',
		},
	},
	'sea-floor': {
		category: 'normal',
		image: theme_images['sea_floor.png'].default.src,
		name: 'Sea Floor',
		spawn: {
			'0 - 9': '3.77',
			'10 - 19': '3.54',
			'20 - 29': '3.83',
			'30+': '4.19',
		},
	},
	shipwreck: {
		category: 'normal',
		image: theme_images['shipwreck.png'].default.src,
		name: 'Shipwreck',
		spawn: {
			'0 - 9': '3.77',
			'10 - 19': '3.54',
			'20 - 29': '3.83',
			'30+': '4.19',
		},
	},
	'soul-nether': {
		category: 'normal',
		image: theme_images['soul_nether.png'].default.src,
		name: 'Soul Nether',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '0',
			'20 - 29': '0.43',
			'30+': '0.93',
		},
	},
	'sweet-domains': {
		category: 'normal',
		image: theme_images['sweet_domains.png'].default.src,
		name: 'Sweet Domains',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '2.65',
			'20 - 29': '2.55',
			'30+': '2.79',
		},
	},
	void: {
		category: 'normal',
		image: theme_images['void.png'].default.src,
		name: 'Void',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '0',
			'20 - 29': '0',
			'30+': '0.93',
		},
	},
	'warped-nether': {
		category: 'normal',
		image: theme_images['warped_nether.png'].default.src,
		name: 'Warped Nether',
		spawn: {
			'0 - 9': '0',
			'10 - 19': '0',
			'20 - 29': '0.43',
			'30+': '0.93',
		},
	},
	'wasteland-caves': {
		category: 'normal',
		image: theme_images['wasteland_caves.png'].default.src,
		name: 'Wasteland Caves',
		spawn: {
			'0 - 9': '7.55',
			'10 - 19': '7.08',
			'20 - 29': '6.81',
			'30+': '3.72',
		},
	},
};

export const modifiers = {
	collapsing: {
		desc: 'Randomly Spawns Vault Bedrock',
		icon: modifier_icons['unlucky.png'].default.src,
		category: 'curses',
		title: 'Collapsing',
	},
	confused: {
		desc: 'Left and Right Controls are swapped',
		icon: modifier_icons['confused.png'].default.src,
		category: 'curses',
		title: 'Confused',
	},
	crab_walk: {
		desc: 'The only way is sideways',
		icon: modifier_icons['crab_walk.png'].default.src,
		category: 'curses',
		title: 'Crab Walk',
	},
	drained: {
		desc: '-70% Mana Regeneration',
		icon: modifier_icons['draining.png'].default.src,
		category: 'curses',
		title: 'Drained',
	},
	explosive: {
		desc: 'Ramdomly Spawns TNT',
		icon: modifier_icons['impossible.png'].default.src,
		category: 'curses',
		title: 'Explosive',
	},
	frenzy: {
		desc: '+Mob Damage, +Mob Speed, -Mob Health',
		icon: modifier_icons['frenzy.png'].default.src,
		category: 'curses',
		title: 'Frenzy',
	},
	hunger: {
		desc: '+6 Hunger',
		icon: modifier_icons['hunger.png'].default.src,
		category: 'curses',
		title: 'Hunger',
	},
	inert: {
		desc: '-10% Cooldown Reduction',
		icon: modifier_icons['inert.png'].default.src,
		category: 'curses',
		title: 'Inert',
	},
	jupiter_gravity: {
		desc: 'No Jumping',
		icon: modifier_icons['jupiter_gravity.png'].default.src,
		category: 'curses',
		title: 'Jupiter Gravity',
	},
	locked: {
		desc: 'Locks the Vault',
		icon: modifier_icons['no_exit.png'].default.src,
		category: 'curses',
		title: 'Locked',
	},
	minefield: {
		desc: '+40% Chest Trap Chance',
		icon: modifier_icons['trapped.png'].default.src,
		category: 'curses',
		title: 'Minefield',
	},
	mining_fatigue: {
		desc: '+1 Mining Fatigue',
		icon: modifier_icons['tired.png'].default.src,
		category: 'curses',
		title: 'Mining Fatigue',
	},
	poor: {
		desc: '-25% Item Quantity',
		icon: modifier_icons['poor.png'].default.src,
		category: 'curses',
		title: 'Poor',
	},
	rotten: {
		desc: 'Vault Fruit has no effect',
		icon: modifier_icons['rotten.png'].default.src,
		category: 'curses',
		title: 'Rotten',
	},
	shulkered: {
		desc: 'Randomly Summons Shulker Bullets',
		icon: modifier_icons['impossible.png'].default.src,
		category: 'curses',
		title: 'Shulkered',
	},
	slowed: {
		desc: '+1 Slowness',
		icon: modifier_icons['slowed.png'].default.src,
		category: 'curses',
		title: 'Slowed',
	},
	unlucky: {
		desc: '-50% Item Rarity',
		icon: modifier_icons['unlucky.png'].default.src,
		category: 'curses',
		title: 'Unlucky',
	},
	volcanic: {
		desc: 'Randomly Spawns Lava',
		icon: modifier_icons['volcanic.png'].default.src,
		category: 'curses',
		title: 'Volcanic',
	},
	weakened: {
		desc: '+1 Weakness',
		icon: modifier_icons['weakness.png'].default.src,
		category: 'curses',
		title: 'Weakened',
	},
	wounded: {
		desc: '-10 Max Health',
		icon: modifier_icons['injured.png'].default.src,
		category: 'curses',
		title: 'Wounded',
	},
	chunky_mobs: {
		desc: '+20% Mob Health',
		icon: modifier_icons['chunky.png'].default.src,
		category: 'negative',
		title: 'Chunky Mobs',
	},
	draining: {
		desc: '-10% Mana Regeneration',
		icon: modifier_icons['draining.png'].default.src,
		category: 'negative',
		title: 'Draining',
	},
	fatiguing: {
		desc: '+10% chance mobs apply Fatigue on hit',
		icon: modifier_icons['hex_chaining.png'].default.src,
		category: 'negative',
		title: 'Fatiguing',
	},
	frail: {
		desc: '+20% Durabillity Damage',
		icon: modifier_icons['frail.png'].default.src,
		category: 'negative',
		title: 'Frail',
	},
	freezing: {
		desc: '+10% chance mobs apply Slow on hit',
		icon: modifier_icons['hex_chilling.png'].default.src,
		category: 'negative',
		title: 'Freezing',
	},
	furious: {
		desc: '+20% Mob Damage',
		icon: modifier_icons['furious.png'].default.src,
		category: 'negative',
		title: 'Furious',
	},
	injured: {
		desc: '-2 Max Health',
		icon: modifier_icons['injured.png'].default.src,
		category: 'negative',
		title: 'Injured',
	},
	poisonous: {
		desc: '+10% chance mobs apply Poison on hit',
		icon: modifier_icons['hex_poison.png'].default.src,
		category: 'negative',
		title: 'Poisonous',
	},
	poor: {
		desc: '-25% Item Quantity',
		icon: modifier_icons['poor.png'].default.src,
		category: 'negative',
		title: 'Poor',
	},
	trapped: {
		desc: '+10% Chest trap chance',
		icon: modifier_icons['trapped.png'].default.src,
		category: 'negative',
		title: 'Trapped',
	},
	unlucky: {
		desc: '-50% Item Rarity',
		icon: modifier_icons['unlucky.png'].default.src,
		category: 'negative',
		title: 'Unlucky',
	},
	voiding: {
		desc: '+10% chance mobs apply Void Time on hit',
		icon: modifier_icons['hex_wither.png'].default.src,
		category: 'negative',
		title: 'Voiding',
	},
	wild: {
		desc: '+1 Set of Wildly spawning mobs',
		icon: modifier_icons['wild.png'].default.src,
		category: 'negative',
		title: 'Wild',
	},
	accustomed: {
		desc: '+20% Vault Experience',
		icon: modifier_icons['experienced.png'].default.src,
		category: 'positive',
		title: 'Accustomed',
	},
	bonus_gilded: {
		desc: '+1 Set of Gilded Chests',
		icon: modifier_icons['gilded_chests.png'].default.src,
		category: 'positive',
		title: 'Bonus Gilded',
	},
	bonus_living: {
		desc: '+1 Set of Living Chests',
		icon: modifier_icons['living_chests.png'].default.src,
		category: 'positive',
		title: 'Bonus Living',
	},
	bonus_ornate: {
		desc: '+1 Set of Ornate Chests',
		icon: modifier_icons['ornate_chests.png'].default.src,
		category: 'positive',
		title: 'Bonus Ornate',
	},
	coin_stacks: {
		desc: '+1 Set of Coin piles',
		icon: modifier_icons['wealthy.png'].default.src,
		category: 'positive',
		title: 'Coin Stacks',
	},
	extended: {
		desc: '+1 additional Minute of Vault time',
		icon: modifier_icons['extended.png'].default.src,
		category: 'positive',
		title: 'Extended',
	},
	gilded: {
		desc: '+25% Gilded Chests',
		icon: modifier_icons['gilded.png'].default.src,
		category: 'positive',
		title: 'Gilded',
	},
	haunted: {
		desc: '+50% Soul Shards',
		icon: modifier_icons['haunted.png'].default.src,
		category: 'positive',
		title: 'Haunted',
	},
	living: {
		desc: '+25% Living Chests',
		icon: modifier_icons['living.png'].default.src,
		category: 'positive',
		title: 'Living',
	},
	lucky: {
		desc: '+20% Item Rarity',
		icon: modifier_icons['lucky.png'].default.src,
		category: 'positive',
		title: 'Lucky',
	},
	opulent: {
		desc: '+10% Item Quantity',
		icon: modifier_icons['opulent.png'].default.src,
		category: 'positive',
		title: 'Opulent',
	},
	ornate: {
		desc: '+25% Ornate Chests',
		icon: modifier_icons['ornate.png'].default.src,
		category: 'positive',
		title: 'Ornate',
	},
	plentiful: {
		desc: '+20% additional Vault Ores',
		icon: modifier_icons['plentiful.png'].default.src,
		category: 'positive',
		title: 'Plentiful',
	},
	prosperous: {
		desc: '+50% Artifact Chance',
		icon: modifier_icons['more_artifact1.png'].default.src,
		category: 'positive',
		title: 'Prosperous',
	},
	wealthy: {
		desc: '+25% Coin Piles',
		icon: modifier_icons['wealthy.png'].default.src,
		category: 'positive',
		title: 'Wealthy',
	},
	wooden: {
		desc: '+25% Wooden Chests',
		icon: modifier_icons['wooden.png'].default.src,
		category: 'positive',
		title: 'Wooden',
	},
	afterlife: {
		desc: 'Restores your items on death, -50% XP',
		icon: modifier_icons['afterlife.png'].default.src,
		category: 'uber',
		title: 'Afterlife',
	},
	anger: {
		desc: '+1% Mob damage',
		icon: modifier_icons['frenzy.png'].default.src,
		category: 'uber',
		title: 'Anger',
	},
	beginners_grace: {
		desc: 'Restores your items on death',
		icon: modifier_icons['beginners_grace.png'].default.src,
		title: "Beginner's Grace",
	},
	beginners_insurance: {
		desc: 'Chests can not be trapped',
		icon: modifier_icons['safezone.png'].default.src,
		title: "Beginner's Insurance",
	},
	cake_haunted: {
		desc: '+10% Soul Shard Drop Rate',
		icon: modifier_icons['haunted.png'].default.src,
		category: 'uber',
		title: 'Cake Haunted',
	},
	casual_mode: {
		desc: 'Restores your items on death',
		icon: modifier_icons['beginners_grace.png'].default.src,
		category: 'uber',
		title: 'Casual Mode',
	},
	champions_abode: {
		desc: '+10% Champion Chance',
		icon: modifier_icons['champions_abode.png'].default.src,
		title: "Champion's Abode",
	},
	cherry: {
		desc: '+30 seconds to the Vault Timer',
		icon: modifier_icons['extended.png'].default.src,
		category: 'uber',
		title: 'Cherry',
	},
	delicious: {
		desc: '+1% Item Quantity',
		icon: modifier_icons['opulent.png'].default.src,
		category: 'uber',
		title: 'Delicious',
	},
	difficult: {
		desc: '+3 Vault Level',
		icon: modifier_icons['difficult.png'].default.src,
		category: 'uber',
		title: 'Difficult',
	},
	easy: {
		desc: '-3 Vault Level',
		icon: modifier_icons['easy.png'].default.src,
		category: 'uber',
		title: 'Easy',
	},
	enlightened: {
		desc: '+100% Vault Experience',
		icon: modifier_icons['experienced.png'].default.src,
		category: 'uber',
		title: 'Enlightened',
	},
	heavy: {
		desc: '+1% Mob Health',
		icon: modifier_icons['chunky.png'].default.src,
		category: 'uber',
		title: 'Heavy',
	},
	hoard: {
		desc: '+50% Item Quantity',
		icon: modifier_icons['hoard.png'].default.src,
		category: 'uber',
		title: 'Hoard',
	},
	looters_dream: {
		desc: 'Chests can not be trapped',
		icon: modifier_icons['safezone.png'].default.src,
		category: 'uber',
		title: 'Looters Dream',
	},
	mining_fatigue_t2: {
		desc: '+3 Mining Fatigue',
		icon: modifier_icons['tired.png'].default.src,
		category: 'uber',
		title: 'Mining Fatigue T2',
	},
	phoenix: {
		desc: 'Revives you like a Totem of undying,',
		icon: modifier_icons['phoenix.png'].default.src,
		category: 'uber',
		title: 'Phoenix',
	},
	prismatic: {
		desc: '+25% Catalyst Fragments',
		icon: modifier_icons['more_catalyst.png'].default.src,
		category: 'uber',
		title: 'Prismatic',
	},
	raffle: {
		desc: 'Locks the Vault',
		icon: modifier_icons['raffle.png'].default.src,
		category: 'uber',
		title: 'Raffle',
	},
	rapid_mobs: {
		desc: '+5% Mob Speed',
		icon: modifier_icons['rapid_mobs.png'].default.src,
		category: 'uber',
		title: 'Rapid Mobs',
	},
	reinforced: {
		desc: '-10% durabillity damage',
		icon: modifier_icons['reinforced.png'].default.src,
		category: 'uber',
		title: 'Reinforced',
	},
	shortened: {
		desc: '-1 minute of Vault time',
		icon: modifier_icons['rush.png'].default.src,
		category: 'uber',
		title: 'Shortened',
	},
	slowed_t2: {
		desc: '+2 Slowness',
		icon: modifier_icons['slowed.png'].default.src,
		category: 'uber',
		title: 'Slowed T2',
	},
	soul_surge: {
		desc: '+100% Soul Shard Drop Rate',
		icon: modifier_icons['haunted.png'].default.src,
		category: 'uber',
		title: 'Soul Surge',
	},
	sweet: {
		desc: '+1% Item Rarity',
		icon: modifier_icons['lucky.png'].default.src,
		category: 'uber',
		title: 'Sweet',
	},
	treasure: {
		desc: '+50% Item Rarity',
		icon: modifier_icons['treasure.png'].default.src,
		category: 'uber',
		title: 'Treasure',
	},
	vault_xp_reduction: {
		desc: '-25% Vault XP',
		icon: modifier_icons['impossible.png'].default.src,
		category: 'uber',
		title: 'Vault XP Reduction',
	},
	velaras_wrath: {
		desc: '-20% Healing Efficiency',
		icon: modifier_icons['velara.png'].default.src,
		title: "Velara's Wrath",
	},
	weakened_t2: {
		desc: '+3 Weakness',
		icon: modifier_icons['weakness.png'].default.src,
		category: 'uber',
		title: 'Weakened T2',
	},
	weakened_t3: {
		desc: '+6 Weakness',
		icon: modifier_icons['weakness.png'].default.src,
		category: 'uber',
		title: 'Weakened T3',
	},
	withering: {
		desc: '+10% chance mobs apply Wither on hit',
		icon: modifier_icons['hex_wither.png'].default.src,
		category: 'uber',
		title: 'Withering',
	},
};

export const rooms = {
	'crystal-caves': {
		name: 'Crystal Caves',
		image: rooms_images['crystal_caves.png'].default.src,
		category: 'challenge',
		desc: 'As the echoes of the crystals resonate, the fizzling of monsters can be heard from afar. This room contains valuable Vault Ores, but at the cost of great risk...',
		odds: '0.81',
		variants: '5',
		spawners: 'Freezle',
		loot: ['Ores'],
	},
	dragon: {
		name: 'Dragon',
		image: rooms_images['dragon.png'].default.src,
		category: 'challenge',
		desc: 'A sleeping dragon, guarding their treasured coins, is found deep within its nest. While it slumbers, monsters shield the loot from being stolen without a brawl...',
		odds: '0.33',
		variants: '1',
		spawners: 'Freezle',
		loot: ['Coin Piles'],
	},
	factory: {
		name: 'Factory',
		image: rooms_images['factory.png'].default.src,
		category: 'challenge',
		desc: 'As researchers found a way to compress blocks, their facility was ambushed. Now, it is being inhabitated by waves of monsters, said to be those very researchers...',
		odds: '0.98',
		variants: '1',
		spawners: 'Freezle',
		loot: ['Compressed Blocks'],
	},
	village: {
		name: 'Village',
		image: rooms_images['village.png'].default.src,
		category: 'challenge',
		desc: 'Once a flourishing place, this village became a ghost town, without a soul in sight. Living at day, gilded at night and ornate at dawn, the catacombs below are a menace to pathfind through...',
		odds: '0.33',
		variants: '3',
		spawners: 'Freezle',
		loot: ['Wooden', 'Living', 'Gilded', 'Ornate'],
	},
	'wild-west': {
		name: 'Wild West',
		image: rooms_images['wild_west.png'].default.src,
		category: 'challenge',
		desc: 'Monsters protect the gilded wealth of the nobility, where the aristocracy magnified. The more their resources get stolen, the more persistent they look to be...',
		odds: '1.63',
		variants: '4',
		spawners: 'Freezle',
		loot: ['Gilded'],
	},
	'x-mark': {
		name: 'X-Mark',
		image: rooms_images['x_mark.png'].default.src,
		category: 'challenge',
		desc: 'An ancient map led to this spot, which may contain the loot any scavenger desires. However, relics of the past reveal it to be the home of dozens of monsters...',
		odds: '1.63',
		variants: '4',
		spawners: 'Freezle',
		loot: ['Ornate'],
	},
	blacksmith: {
		name: 'Blacksmith',
		image: rooms_images['blacksmith.png'].default.src,
		category: 'omega',
		desc: 'An ancient Castle, once housing the antique Blacksmiths which created strong armor which was given to their warriors, now abandoned with their powerful gear left over as a relic from the past...',
		odds: '1.63',
		variants: '1',
		floors: '4',
		loot: ['Ornate'],
	},
	cove: {
		name: 'Cove',
		image: rooms_images['cove.png'].default.src,
		category: 'omega',
		desc: 'Pirates, that were looking on their treasure map, attempting to find a place full of goods ended up lost in a cove. Strong winds appeared and tore their ship to shreds, distributing all their wealth around the Cove...',
		odds: '1.63',
		variants: '1',
		floors: '1',
		loot: ['Coin Piles'],
	},
};

export const objectives = {
	'cake-vault': {
		name: 'Cake Vault',
		// icon: objectives_icons['cake_vault.png'].default.src,
	},
	elixir: {
		name: 'Elixir',
		// icon: objectives_icons['elixir.png'].default.src,
	},
};

export const blocks = {};

export const items = {
	the_vault: {
		'gorginite-gem': {
			name: 'Gorginite Gem',
			icon: items_icons['gem_gorginite.gif'].default.src,
		},
		'iskallium-gem': {
			name: 'Iskallium Gem',
			icon: items_icons['gem_iskallium.gif'].default.src,
		},
		'iskallium-cluster': {
			name: 'Iskallium Cluster',
			icon: items_icons['cluster_iskallium.gif'].default.src,
		},
		'sparkletine-gem': {
			name: 'Sparkletine Gem',
			icon: items_icons['gem_sparkletine.gif'].default.src,
		},
		'bomignite-gem': {
			name: 'Bomignite Gem',
			icon: items_icons['gem_bomignite.png'].default.src,
		},
		'petezanite-gem': {
			name: 'Petezanite Gem',
			icon: items_icons['gem_petzanite.png'].default.src,
		},
		'tubium-gem': {
			name: 'Tubium Gem',
			icon: items_icons['gem_tubium.png'].default.src,
		},
		'upaline-gem': {
			name: 'Upaline Gem',
			icon: items_icons['gem_upaline.png'].default.src,
		},
		'xeenium-gem': {
			name: 'Xeenium Gem',
			icon: items_icons['gem_xenium.png'].default.src,
		},
		'ashium-gem': {
			name: 'Ashium Gem',
			icon: items_icons['gem_ashium.png'].default.src,
		},
		pog: {
			name: 'POG',
			desc: 'A POG is high tier crafting ingredient, used in several mid-game recipes. It can be crafted with 1 of each unique gems, as well as found in Treasure Sand from a Treasure Room and by killing Vault Champions.',
			icon: items_icons['pog.gif'].default.src,
		},
		'black-mob-essence': {
			name: 'Black Mob Essence',
			desc: '',
			category: 'scavenger',
			icon: scav_items_icons['black_mob_essence.png'].default.src,
		},
		'blood-vial': {
			name: 'Blood Vial',
			desc: '',
			category: 'scavenger',
			icon: scav_items_icons['blood_vial.png'].default.src,
		},
		'cracked-pearl': {
			name: 'Cracked Pearl',
			desc: '',
			category: 'scavenger',
			icon: scav_items_icons['cracked_pearl.png'].default.src,
		},
	},
};

export const recipes = {
	crafting: [
		{
			output: 'the_vault:pog',
			input: [
				['the_vault:gorginite-gem', 'the_vault:iskallium-gem', 'the_vault:sparkletine-gem'],
				['the_vault:bomignite-gem', 'the_vault:petezanite-gem', 'the_vault:tubium-gem'],
				['the_vault:upaline-gem', 'the_vault:xeenium-gem', 'the_vault:ashium-gem'],
			],
			info: ['shapeless'],
		},
		{
			output: 'the_vault:iskallium-cluster',
			input: [
				['the_vault:iskallium-gem', 'the_vault:iskallium-gem', 'the_vault:iskallium-gem'],
				['the_vault:iskallium-gem', 'the_vault:perfect-black-opal', 'the_vault:iskallium-gem'],
				['the_vault:iskallium-gem', 'the_vault:iskallium-gem', 'the_vault:iskallium-gem'],
			],
		},
	],
	smelting: [
		{
			output: 'the_vault:iskallium-gem',
			input: {
				item: 'the_vault:iskallium-ore',
			},
		},
	],
};

export const mobs = {
	'alligator-snapping-turtle': {
		icon: mob_icons_alexsmobs['alligator_snapping_turtle.png'].default.src,
		name: 'Alligator Snapping Turtle',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
		spawn: '0+',
		xp: '32',
	},
	blaze: {
		icon: mob_icons_minecraft['blaze.png'].default.src,
		name: 'Blaze',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	bunfungus: {
		icon: mob_icons_alexsmobs['bunfungus.png'].default.src,
		name: 'Bunfungus',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	burned: {
		icon: mob_icons_rottencreatures['burned.png'].default.src,
		name: 'Burned',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'coconut-crab': {
		icon: mob_icons_ecologics['coconut_crab.png'].default.src,
		name: 'Coconut Crab',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	creeper: {
		icon: mob_icons_minecraft['creeper.png'].default.src,
		name: 'Creeper',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
		tiers: {
			1: {
				icon: mob_icons_minecraft['creeper.png'].default.src,
				name: 'Tier 1',
				spawn: '0+',
				xp: '48',
			},
			2: {
				icon: mob_icons_the_vault['t1_creeper.png'].default.src,
				name: 'Tier 2',
				spawn: '20+',
				xp: '60',
			},
			3: {
				icon: mob_icons_the_vault['t2_creeper.png'].default.src,
				name: 'Tier 3',
				spawn: '50+',
				xp: '80',
			},
			4: {
				icon: mob_icons_the_vault['t3_creeper.png'].default.src,
				name: 'Tier 4',
				spawn: '65+',
				xp: '100',
			},
		},
	},
	'dead-beard': {
		icon: mob_icons_rottencreatures['dead_beard.png'].default.src,
		name: 'Dead Beard',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	deathcap: {
		icon: mob_icons_the_vault['deathcap.png'].default.src,
		name: 'Deathcap',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'deep-dark-horror': {
		icon: mob_icons_the_vault['deep_dark_horror.png'].default.src,
		name: 'Deep Dark Horror',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'deep-dark-piglin': {
		icon: mob_icons_the_vault['deep_dark_piglin.png'].default.src,
		name: 'Deep Dark Piglin',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'deep-dark-silverfish': {
		icon: mob_icons_the_vault['deep_dark_silverfish.png'].default.src,
		name: 'Deep Dark Silverfish',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'deep-dark-skeleton': {
		icon: mob_icons_the_vault['deep_dark_skeleton.png'].default.src,
		name: 'Deep Dark Skeleton',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'deep-dark-zombie': {
		icon: mob_icons_the_vault['deep_dark_zombie.png'].default.src,
		name: 'Deep Dark Zombie',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	drowned: {
		icon: mob_icons_minecraft['drowned.png'].default.src,
		name: 'Drowned',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
		special: {
			elite: {
				icon: mob_icons_the_vault['elite_drowned.png'].default.src,
				name: 'Elite',
				soul_shards: {
					amount: '2 - 3',
					odds: '500',
				},
			},
		},
	},
	enderman: {
		icon: mob_icons_minecraft['enderman.png'].default.src,
		name: 'Enderman',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	foxhound: {
		icon: mob_icons_quark['foxhound.png'].default.src,
		name: 'Foxhound',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'gingerbread-man': {
		icon: mob_icons_auxiliaryblocks['gingerbread_man.png'].default.src,
		name: 'Gingerbread Man',
		scav_drop: 'purple',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'glacial-hunter': {
		icon: mob_icons_rottencreatures['glacial_hunter.png'].default.src,
		name: 'Glacial Hunter',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'gummy-soldier': {
		icon: mob_icons_the_vault['vault_blue_gummy_soldier.png'].default.src,
		name: 'Gummy Soldier',
		scav_drop: 'purple',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
		variants: {
			blue: {
				icon: mob_icons_the_vault['vault_blue_gummy_soldier.png'].default.src,
				name: 'Blue',
			},
			green: {
				icon: mob_icons_the_vault['vault_green_gummy_soldier.png'].default.src,
				name: 'Green',
			},
			red: {
				icon: mob_icons_the_vault['vault_red_gummy_soldier.png'].default.src,
				name: 'Red',
			},
			yellow: {
				icon: mob_icons_the_vault['vault_yellow_gummy_soldier.png'].default.src,
				name: 'Yellow',
			},
		},
	},
	husk: {
		icon: mob_icons_minecraft['husk.png'].default.src,
		name: 'Husk',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
		special: {
			elite: {
				icon: mob_icons_the_vault['elite_husk.png'].default.src,
				name: 'Elite',
				soul_shards: {
					amount: '2 - 3',
					odds: '500',
				},
				spawn: '0+',
			},
		},
		tiers: {
			1: {
				icon: mob_icons_minecraft['husk.png'].default.src,
				name: 'Tier 1',
				spawn: '0+',
			},
			2: {
				icon: mob_icons_the_vault['t1_husk.png'].default.src,
				name: 'Tier 2',
				spawn: '20+',
			},
			3: {
				icon: mob_icons_the_vault['t2_husk.png'].default.src,
				name: 'Tier 3',
				spawn: '50+',
			},
			4: {
				icon: mob_icons_the_vault['t3_husk.png'].default.src,
				name: 'Tier 4',
				spawn: '65+',
			},
		},
	},
	'magma-cube': {
		icon: mob_icons_minecraft['magma_cube.png'].default.src,
		name: 'Magma Cube',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'mantis-shrimp': {
		icon: mob_icons_alexsmobs['mantis_shrimp.png'].default.src,
		name: 'Mantis Shrimp',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'miner-zombie': {
		icon: mob_icons_the_vault['miner_zombie_t0.png'].default.src,
		name: 'Miner Zombie',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	mummy: {
		icon: mob_icons_the_vault['mummy_t0.png'].default.src,
		name: 'Mummy',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	mushroom: {
		icon: mob_icons_the_vault['mushroom_t0.png'].default.src,
		name: 'Mushroom',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'overgrown-zombie': {
		icon: mob_icons_the_vault['overgrown_zombie_t0.png'].default.src,
		name: 'Overgrown Zombie',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	piglin: {
		icon: mob_icons_the_vault['dungeon_piglin.png'].default.src,
		name: 'Piglin',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'piglin-brute': {
		icon: mob_icons_minecraft['piglin.png'].default.src,
		name: 'Piglin Brute',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	pillager: {
		icon: mob_icons_minecraft['pillager.png'].default.src,
		name: 'Pillager',
		scav_drop: '',
		soul_shards: {
			amount: '2 - 3',
			odds: '300',
		},
	},
	'polar-bear': {
		icon: mob_icons_minecraft['polar_bear.png'].default.src,
		name: 'Polar Bear',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	ravager: {
		icon: mob_icons_minecraft['ravager.png'].default.src,
		name: 'Ravager',
		scav_drop: '',
		soul_shards: {
			amount: '5 - 8',
			odds: '300',
		},
	},
	'rocky-roller': {
		icon: mob_icons_alexsmobs['rocky_roller.png'].default.src,
		name: 'Rocky Roller',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	shiver: {
		icon: mob_icons_the_vault['shiver.png'].default.src,
		name: 'Shiver',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	silverfish: {
		icon: mob_icons_minecraft['silverfish.png'].default.src,
		name: 'Silverfish',
		scav_drop: '',
		soul_shards: {
			amount: '0 - 1',
			odds: '3',
		},
	},
	skeleton: {
		icon: mob_icons_minecraft['skeleton.png'].default.src,
		name: 'Skeleton',
		scav_drop: 'black',
		special: {
			elite: {
				icon: mob_icons_the_vault['elite_skeleton.png'].default.src,
				name: 'Elite',
				soul_shards: {
					amount: '2 - 3',
					odds: '500',
				},
				spawn: '0+',
				xp: '2600',
			},
		},
		tiers: {
			1: {
				icon: mob_icons_minecraft['skeleton.png'].default.src,
				name: 'Tier 1',
				soul_shards: {
					amount: '1 - 2',
					odds: '300',
				},
				spawn: '0+',
				xp: '24',
			},
			2: {
				icon: mob_icons_the_vault['t1_skeleton.png'].default.src,
				name: 'Tier 2',
				soul_shards: {
					amount: '1 - 2',
					odds: '330',
				},
				spawn: '20+',
				xp: '32',
			},
			3: {
				icon: mob_icons_the_vault['t2_skeleton.png'].default.src,
				name: 'Tier 3',
				soul_shards: {
					amount: '1 - 2',
					odds: '380',
				},
				spawn: '50+',
				xp: '48',
			},
			4: {
				icon: mob_icons_the_vault['t3_skeleton.png'].default.src,
				name: 'Tier 4',
				soul_shards: {
					amount: '1 - 2',
					odds: '420',
				},
				spawn: '65+',
				xp: '60',
			},
		},
	},
	'skeleton-pirate': {
		icon: mob_icons_the_vault['skeleton_pirate_t0.png'].default.src,
		name: 'Skeleton Pirate',
		scav_drop: 'black',
		soul_shards: {
			amount: '1 - 2',
			odds: '300',
		},
	},
	slime: {
		icon: mob_icons_minecraft['slime.png'].default.src,
		name: 'Slime',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	snowdood: {
		icon: mob_icons_auxiliaryblocks['snowdood.png'].default.src,
		name: 'Snowdood',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'soul-vulture': {
		icon: mob_icons_alexsmobs['soul_vulture.png'].default.src,
		name: 'Soul Vulture',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	stray: {
		icon: mob_icons_minecraft['stray.png'].default.src,
		name: 'Stray',
		scav_drop: 'black',
		soul_shards: {
			amount: '1 - 2',
			odds: '300',
		},
	},
	swampy: {
		icon: mob_icons_rottencreatures['swampy.png'].default.src,
		name: 'Swampy',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	tusklin: {
		icon: mob_icons_alexsmobs['tusklin.png'].default.src,
		name: 'Tusklin',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'undead-miner': {
		icon: mob_icons_rottencreatures['undead_miner.png'].default.src,
		name: 'Undead Miner',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'vault-fighter': {
		icon: mob_icons_the_vault['vault_fighter.png'].default.src,
		name: 'Vault Fighter',
		scav_drop: 'purple',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'vault-guardian': {
		icon: mob_icons_the_vault['arbalist_guardian.png'].default.src,
		name: 'Vault Guardian',
		scav_drop: '',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'vault-spider': {
		icon: mob_icons_the_vault['vault_spider.png'].default.src,
		name: 'Vault Spider',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	vex: {
		icon: mob_icons_minecraft['vex.png'].default.src,
		name: 'Vex',
		scav_drop: '',
		soul_shards: {
			amount: '2 - 4',
			odds: '300',
		},
	},
	vindicator: {
		icon: mob_icons_minecraft['vindicator.png'].default.src,
		name: 'Vindicator',
		scav_drop: '',
		soul_shards: {
			amount: '2 - 3',
			odds: '300',
		},
	},
	'winter-walker': {
		icon: mob_icons_the_vault['winterwalker_t0.png'].default.src,
		name: 'Winterwalker',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	'winter-wolf': {
		icon: mob_icons_the_vault['winter_wolf.png'].default.src,
		name: 'Winter Wolf',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	witch: {
		icon: mob_icons_minecraft['witch.png'].default.src,
		name: 'Witch',
		scav_drop: '',
		soul_shards: {
			amount: '2 - 3',
			odds: '300',
		},
	},
	'wither-skeleton': {
		icon: mob_icons_minecraft['wither_skeleton.png'].default.src,
		name: 'Wither Skeleton',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	wraith: {
		icon: mob_icons_quark['wraith.png'].default.src,
		name: 'Wraith',
		scav_drop: 'black',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
	},
	zombie: {
		icon: mob_icons_minecraft['zombie.png'].default.src,
		name: 'Zombie',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
		special: {
			elite: {
				icon: mob_icons_the_vault['elite_zombie.png'].default.src,
				name: 'Elite',
				soul_shards: {
					amount: '2',
					odds: '500',
				},
				xp: '1400',
			},
		},
		tiers: {
			1: {
				icon: mob_icons_minecraft['zombie.png'].default.src,
				name: 'Normal',
				spawn: '0+',
				xp: '10',
			},
			2: {
				icon: mob_icons_the_vault['t1_zombie.png'].default.src,
				name: 'Tier 1',
				spawn: '20+',
				xp: '16',
			},
			3: {
				icon: mob_icons_the_vault['t2_zombie.png'].default.src,
				name: 'Tier 2',
				spawn: '50+',
				xp: '32',
			},
			4: {
				icon: mob_icons_the_vault['t3_zombie.png'].default.src,
				name: 'Tier 3',
				spawn: '20+',
				xp: '42',
			},
		},
	},
};

export const experience = {
	objectives: {
		'cake-vault': '200/cake',
		elixir: '9000',
	},
	mobs: {
		'alligator-snapping-turtle': '32',
		bunfungus: '60',
		burned: '64',
		creeper: {
			1: '48',
			2: '60',
			3: '80',
			4: '100',
		},
		'dead-beard': '80',
		deathcap: '24',
		'deep-dark-horror': '40',
		'deep-dark-piglin': '32',
		'deep-dark-silverfish': '16',
		'deep-dark-skeleton': '24',
		'deep-dark-zombie': '14',
		drowned: {
			1: '10',
			2: '14',
			3: '32',
			4: '40',
			elite: '1400',
		},
		enderman: {
			1: '20',
			2: '16',
			3: '32',
			4: '40',
		},
		foxhound: '28',
		'glacial-hunter': '64',
		husk: {
			1: '12',
			2: '14',
			3: '32',
			4: '40',
			elite: '1400',
		},
		'magma-cube': '50',
		'mantis-shrimp': '80',
		'miner-zombie': {
			1: '14',
			2: '32',
			3: '40',
			4: '48',
			5: '56',
			6: '64',
		},
		mummy: {
			1: '50',
			2: '60',
			3: '70',
			rotten: '64',
		},
		mushroom: {
			1: '12',
			2: '18',
			3: '24',
			4: '32',
			5: '40',
			6: '48',
		},
		'overgrown-zombie': {
			1: '12',
			2: '18',
			3: '24',
			4: '32',
			5: '40',
			6: '48',
		},
		piglin: {
			1: '16',
			2: '14',
			3: '32',
			4: '40',
		},
		'piglin-brute': '64',
		pillager: '28',
		'polar-bear': '64',
		ravenger: '90',
		'rocky-roller': '80',
		shiver: '70',
		shulker: '40',
		silverfish: '12',
		skeleton: {
			1: '24',
			2: '32',
			3: '48',
			4: '60',
			elite: '2600',
		},
		'skeleton-pirate': {
			1: '20',
			2: '28',
			3: '36',
			4: '44',
			5: '52',
			6: '64',
		},
		slime: '32',
		snowdood: '24',
		'soul-vulture': '72',
		stray: {
			1: '32',
			2: '32',
			3: '48',
			4: '60',
			elite: '2600',
		},
		swampy: '64',
		tusklin: '70',
		'undead-miner': '20',
		'vault-fighter': {
			1: '16',
			2: '24',
			3: '42',
			4: '60',
		},
		'vault-guardian': '100',
		'vault-spider': {
			all: '24',
			elite: '1800',
		},
		vindicator: '20',
		'winter-walker': {
			1: '14',
			2: '32',
			3: '40',
			4: '48',
			5: '60',
			6: '80',
		},
		'winter-wolf': '48',
		witch: {
			all: '96',
			elite: '2600',
		},
		'wither-skeleton': {
			1: '32',
			2: '32',
			3: '48',
			4: '60',
			elite: '3000',
		},
		wraith: '32',
		zombie: {
			1: '10',
			2: '16',
			3: '32',
			4: '42',
			elite: '1400',
		},
		other: '12',
	},
};
