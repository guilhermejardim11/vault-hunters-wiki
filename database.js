import { importAll } from './helper';

const mob_icons_alexsmobs = importAll(require.context('./assets/icons/mob_heads/alexsmobs', false, /\.(png)$/));
const mob_icons_auxiliaryblocks = importAll(require.context('./assets/icons/mob_heads/auxiliaryblocks', false, /\.(png)$/));
const mob_icons_ecologics = importAll(require.context('./assets/icons/mob_heads/ecologics', false, /\.(png)$/));
const mob_icons_minecraft = importAll(require.context('./assets/icons/mob_heads/minecraft', false, /\.(png)$/));
const mob_icons_quark = importAll(require.context('./assets/icons/mob_heads/quark', false, /\.(png)$/));
const mob_icons_rottencreatures = importAll(require.context('./assets/icons/mob_heads/rottencreatures', false, /\.(png)$/));
const mob_icons_the_vault = importAll(require.context('./assets/icons/mob_heads/the_vault', false, /\.(png)$/));
const modifier_icons = importAll(require.context('./assets/icons/modifiers', false, /\.(png)$/));
const theme_images = importAll(require.context('./assets/images/themes', false, /\.(png)$/));

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
		tiers: [
			{
				icon: mob_icons_minecraft['creeper.png'].default.src,
				name: 'Tier 1',
				spawn: '0+',
				xp: '48',
			},
			{
				icon: mob_icons_the_vault['t1_creeper.png'].default.src,
				name: 'Tier 2',
				spawn: '20+',
				xp: '60',
			},
			{
				icon: mob_icons_the_vault['t2_creeper.png'].default.src,
				name: 'Tier 3',
				spawn: '50+',
				xp: '80',
			},
			{
				icon: mob_icons_the_vault['t3_creeper.png'].default.src,
				name: 'Tier 4',
				spawn: '65+',
				xp: '100',
			},
		],
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
		special: [
			{
				icon: mob_icons_the_vault['elite_drowned.png'].default.src,
				name: 'Elite',
				soul_shards: {
					amount: '2 - 3',
					odds: '500',
				},
			},
		],
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
		variants: [
			{
				icon: mob_icons_the_vault['vault_blue_gummy_soldier.png'].default.src,
				name: 'Blue',
			},
			{
				icon: mob_icons_the_vault['vault_green_gummy_soldier.png'].default.src,
				name: 'Green',
			},
			{
				icon: mob_icons_the_vault['vault_red_gummy_soldier.png'].default.src,
				name: 'Red',
			},
			{
				icon: mob_icons_the_vault['vault_yellow_gummy_soldier.png'].default.src,
				name: 'Yellow',
			},
		],
	},
	husk: {
		icon: mob_icons_minecraft['husk.png'].default.src,
		name: 'Husk',
		scav_drop: 'green',
		soul_shards: {
			amount: '1',
			odds: '300',
		},
		special: [
			{
				icon: mob_icons_the_vault['elite_husk.png'].default.src,
				name: 'Elite',
				soul_shards: {
					amount: '2 - 3',
					odds: '500',
				},
				spawn: '0+',
				xp: '1400',
			},
		],
		tiers: [
			{
				icon: mob_icons_minecraft['husk.png'].default.src,
				name: 'Tier 1',
				spawn: '0+',
				xp: '12',
			},
			{
				icon: mob_icons_the_vault['t1_husk.png'].default.src,
				name: 'Tier 2',
				spawn: '20+',
				xp: '14',
			},
			{
				icon: mob_icons_the_vault['t2_husk.png'].default.src,
				name: 'Tier 3',
				spawn: '50+',
				xp: '32',
			},
			{
				icon: mob_icons_the_vault['t3_husk.png'].default.src,
				name: 'Tier 4',
				spawn: '65+',
				xp: '40',
			},
		],
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
		special: [
			{
				icon: mob_icons_the_vault['elite_skeleton.png'].default.src,
				name: 'Elite',
				soul_shards: {
					amount: '2 - 3',
					odds: '500',
				},
				spawn: '0+',
				xp: '2600',
			},
		],
		tiers: [
			{
				icon: mob_icons_minecraft['skeleton.png'].default.src,
				name: 'Tier 1',
				soul_shards: {
					amount: '1 - 2',
					odds: '300',
				},
				spawn: '0+',
				xp: '24',
			},
			{
				icon: mob_icons_the_vault['t1_skeleton.png'].default.src,
				name: 'Tier 2',
				soul_shards: {
					amount: '1 - 2',
					odds: '330',
				},
				spawn: '20+',
				xp: '32',
			},
			{
				icon: mob_icons_the_vault['t2_skeleton.png'].default.src,
				name: 'Tier 3',
				soul_shards: {
					amount: '1 - 2',
					odds: '380',
				},
				spawn: '50+',
				xp: '48',
			},
			{
				icon: mob_icons_the_vault['t3_skeleton.png'].default.src,
				name: 'Tier 4',
				soul_shards: {
					amount: '1 - 2',
					odds: '420',
				},
				spawn: '65+',
				xp: '60',
			},
		],
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
		special: [
			{
				icon: mob_icons_the_vault['elite_zombie.png'].default.src,
				name: 'Elite',
				soul_shards: {
					amount: '2',
					odds: '500',
				},
				xp: '1400',
			},
		],
		tiers: [
			{
				icon: mob_icons_minecraft['zombie.png'].default.src,
				name: 'Normal',
				spawn: '0+',
				xp: '10',
			},
			{
				icon: mob_icons_the_vault['t1_zombie.png'].default.src,
				name: 'Tier 1',
				spawn: '20+',
				xp: '16',
			},
			{
				icon: mob_icons_the_vault['t2_zombie.png'].default.src,
				name: 'Tier 2',
				spawn: '50+',
				xp: '32',
			},
			{
				icon: mob_icons_the_vault['t3_zombie.png'].default.src,
				name: 'Tier 3',
				spawn: '20+',
				xp: '42',
			},
		],
	},
};

export const modifiers = {
	curses: {
		collapsing: {
			desc: 'Randomly Spawns Vault Bedrock',
			icon: modifier_icons['unlucky.png'].default.src,
			title: 'Collapsing',
		},
		confused: {
			desc: 'Left and Right Controls are swapped',
			icon: modifier_icons['confused.png'].default.src,
			title: 'Confused',
		},
		crab_walk: {
			desc: 'The only way is sideways',
			icon: modifier_icons['crab_walk.png'].default.src,
			title: 'Crab Walk',
		},
		drained: {
			desc: '-70% Mana Regeneration',
			icon: modifier_icons['draining.png'].default.src,
			title: 'Drained',
		},
		explosive: {
			desc: 'Ramdomly Spawns TNT',
			icon: modifier_icons['impossible.png'].default.src,
			title: 'Explosive',
		},
		frenzy: {
			desc: '+Mob Damage, +Mob Speed, -Mob Health',
			icon: modifier_icons['frenzy.png'].default.src,
			title: 'Frenzy',
		},
		hunger: {
			desc: '+6 Hunger',
			icon: modifier_icons['hunger.png'].default.src,
			title: 'Hunger',
		},
		inert: {
			desc: '-10% Cooldown Reduction',
			icon: modifier_icons['inert.png'].default.src,
			title: 'Inert',
		},
		jupiter_gravity: {
			desc: 'No Jumping',
			icon: modifier_icons['jupiter_gravity.png'].default.src,
			title: 'Jupiter Gravity',
		},
		locked: {
			desc: 'Locks the Vault',
			icon: modifier_icons['no_exit.png'].default.src,
			title: 'Locked',
		},
		minefield: {
			desc: '+40% Chest Trap Chance',
			icon: modifier_icons['trapped.png'].default.src,
			title: 'Minefield',
		},
		mining_fatigue: {
			desc: '+1 Mining Fatigue',
			icon: modifier_icons['tired.png'].default.src,
			title: 'Mining Fatigue',
		},
		poor: {
			desc: '-25% Item Quantity',
			icon: modifier_icons['poor.png'].default.src,
			title: 'Poor',
		},
		rotten: {
			desc: 'Vault Fruit has no effect',
			icon: modifier_icons['rotten.png'].default.src,
			title: 'Rotten',
		},
		shulkered: {
			desc: 'Randomly Summons Shulker Bullets',
			icon: modifier_icons['impossible.png'].default.src,
			title: 'Shulkered',
		},
		slowed: {
			desc: '+1 Slowness',
			icon: modifier_icons['slowed.png'].default.src,
			title: 'Slowed',
		},
		unlucky: {
			desc: '-50% Item Rarity',
			icon: modifier_icons['unlucky.png'].default.src,
			title: 'Unlucky',
		},
		volcanic: {
			desc: 'Randomly Spawns Lava',
			icon: modifier_icons['volcanic.png'].default.src,
			title: 'Volcanic',
		},
		weakened: {
			desc: '+1 Weakness',
			icon: modifier_icons['weakness.png'].default.src,
			title: 'Weakened',
		},
		wounded: {
			desc: '-10 Max Health',
			icon: modifier_icons['injured.png'].default.src,
			title: 'Wounded',
		},
	},
	negative: {
		chunky_mobs: {
			desc: '+20% Mob Health',
			icon: modifier_icons['chunky.png'].default.src,
			title: 'Chunky Mobs',
		},
		draining: {
			desc: '-10% Mana Regeneration',
			icon: modifier_icons['draining.png'].default.src,
			title: 'Draining',
		},
		fatiguing: {
			desc: '+10% chance mobs apply Fatigue on hit',
			icon: modifier_icons['hex_chaining.png'].default.src,
			title: 'Fatiguing',
		},
		frail: {
			desc: '+20% Durabillity Damage',
			icon: modifier_icons['frail.png'].default.src,
			title: 'Frail',
		},
		freezing: {
			desc: '+10% chance mobs apply Slow on hit',
			icon: modifier_icons['hex_chilling.png'].default.src,
			title: 'Freezing',
		},
		furious: {
			desc: '+20% Mob Damage',
			icon: modifier_icons['furious.png'].default.src,
			title: 'Furious',
		},
		injured: {
			desc: '-2 Max Health',
			icon: modifier_icons['injured.png'].default.src,
			title: 'Injured',
		},
		poisonous: {
			desc: '+10% chance mobs apply Poison on hit',
			icon: modifier_icons['hex_poison.png'].default.src,
			title: 'Poisonous',
		},
		poor: {
			desc: '-25% Item Quantity',
			icon: modifier_icons['poor.png'].default.src,
			title: 'Poor',
		},
		trapped: {
			desc: '+10% Chest trap chance',
			icon: modifier_icons['trapped.png'].default.src,
			title: 'Trapped',
		},
		unlucky: {
			desc: '-50% Item Rarity',
			icon: modifier_icons['unlucky.png'].default.src,
			title: 'Unlucky',
		},
		voiding: {
			desc: '+10% chance mobs apply Void Time on hit',
			icon: modifier_icons['hex_wither.png'].default.src,
			title: 'Voiding',
		},
		wild: {
			desc: '+1 Set of Wildly spawning mobs',
			icon: modifier_icons['wild.png'].default.src,
			title: 'Wild',
		},
	},
	positive: {
		accustomed: {
			desc: '+20% Vault Experience',
			icon: modifier_icons['experienced.png'].default.src,
			title: 'Accustomed',
		},
		bonus_gilded: {
			desc: '+1 Set of Gilded Chests',
			icon: modifier_icons['gilded_chests.png'].default.src,
			title: 'Bonus Gilded',
		},
		bonus_living: {
			desc: '+1 Set of Living Chests',
			icon: modifier_icons['living_chests.png'].default.src,
			title: 'Bonus Living',
		},
		bonus_ornate: {
			desc: '+1 Set of Ornate Chests',
			icon: modifier_icons['ornate_chests.png'].default.src,
			title: 'Bonus Ornate',
		},
		coin_stacks: {
			desc: '+1 Set of Coin piles',
			icon: modifier_icons['wealthy.png'].default.src,
			title: 'Coin Stacks',
		},
		extended: {
			desc: '+1 additional Minute of Vault time',
			icon: modifier_icons['extended.png'].default.src,
			title: 'Extended',
		},
		gilded: {
			desc: '+25% Gilded Chests',
			icon: modifier_icons['gilded.png'].default.src,
			title: 'Gilded',
		},
		haunted: {
			desc: '+50% Soul Shards',
			icon: modifier_icons['haunted.png'].default.src,
			title: 'Haunted',
		},
		living: {
			desc: '+25% Living Chests',
			icon: modifier_icons['living.png'].default.src,
			title: 'Living',
		},
		lucky: {
			desc: '+20% Item Rarity',
			icon: modifier_icons['lucky.png'].default.src,
			title: 'Lucky',
		},
		opulent: {
			desc: '+10% Item Quantity',
			icon: modifier_icons['opulent.png'].default.src,
			title: 'Opulent',
		},
		ornate: {
			desc: '+25% Ornate Chests',
			icon: modifier_icons['ornate.png'].default.src,
			title: 'Ornate',
		},
		plentiful: {
			desc: '+20% additional Vault Ores',
			icon: modifier_icons['plentiful.png'].default.src,
			title: 'Plentiful',
		},
		prosperous: {
			desc: '+50% Artifact Chance',
			icon: modifier_icons['more_artifact1.png'].default.src,
			title: 'Prosperous',
		},
		wealthy: {
			desc: '+25% Coin Piles',
			icon: modifier_icons['wealthy.png'].default.src,
			title: 'Wealthy',
		},
		wooden: {
			desc: '+25% Wooden Chests',
			icon: modifier_icons['wooden.png'].default.src,
			title: 'Wooden',
		},
	},
	uber: {
		afterlife: {
			desc: 'Restores your items on death, -50% XP',
			icon: modifier_icons['afterlife.png'].default.src,
			title: 'Afterlife',
		},
		anger: {
			desc: '+1% Mob damage',
			icon: modifier_icons['frenzy.png'].default.src,
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
			title: 'Cake Haunted',
		},
		casual_mode: {
			desc: 'Restores your items on death',
			icon: modifier_icons['beginners_grace.png'].default.src,
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
			title: 'Cherry',
		},
		delicious: {
			desc: '+1% Item Quantity',
			icon: modifier_icons['opulent.png'].default.src,
			title: 'Delicious',
		},
		difficult: {
			desc: '+3 Vault Level',
			icon: modifier_icons['difficult.png'].default.src,
			title: 'Difficult',
		},
		easy: {
			desc: '-3 Vault Level',
			icon: modifier_icons['easy.png'].default.src,
			title: 'Easy',
		},
		enlightened: {
			desc: '+100% Vault Experience',
			icon: modifier_icons['experienced.png'].default.src,
			title: 'Enlightened',
		},
		heavy: {
			desc: '+1% Mob Health',
			icon: modifier_icons['chunky.png'].default.src,
			title: 'Heavy',
		},
		hoard: {
			desc: '+50% Item Quantity',
			icon: modifier_icons['hoard.png'].default.src,
			title: 'Hoard',
		},
		looters_dream: {
			desc: 'Chests can not be trapped',
			icon: modifier_icons['safezone.png'].default.src,
			title: 'Looters Dream',
		},
		mining_fatigue_t2: {
			desc: '+3 Mining Fatigue',
			icon: modifier_icons['tired.png'].default.src,
			title: 'Mining Fatigue T2',
		},
		phoenix: {
			desc: 'Revives you like a Totem of undying,',
			icon: modifier_icons['phoenix.png'].default.src,
			title: 'Phoenix',
		},
		prismatic: {
			desc: '+25% Catalyst Fragments',
			icon: modifier_icons['more_catalyst.png'].default.src,
			title: 'Prismatic',
		},
		raffle: {
			desc: 'Locks the Vault',
			icon: modifier_icons['raffle.png'].default.src,
			title: 'Raffle',
		},
		rapid_mobs: {
			desc: '+5% Mob Speed',
			icon: modifier_icons['rapid_mobs.png'].default.src,
			title: 'Rapid Mobs',
		},
		reinforced: {
			desc: '-10% durabillity damage',
			icon: modifier_icons['reinforced.png'].default.src,
			title: 'Reinforced',
		},
		shortened: {
			desc: '-1 minute of Vault time',
			icon: modifier_icons['rush.png'].default.src,
			title: 'Shortened',
		},
		slowed_t2: {
			desc: '+2 Slowness',
			icon: modifier_icons['slowed.png'].default.src,
			title: 'Slowed T2',
		},
		soul_surge: {
			desc: '+100% Soul Shard Drop Rate',
			icon: modifier_icons['haunted.png'].default.src,
			title: 'Soul Surge',
		},
		sweet: {
			desc: '+1% Item Rarity',
			icon: modifier_icons['lucky.png'].default.src,
			title: 'Sweet',
		},
		treasure: {
			desc: '+50% Item Rarity',
			icon: modifier_icons['treasure.png'].default.src,
			title: 'Treasure',
		},
		vault_xp_reduction: {
			desc: '-25% Vault XP',
			icon: modifier_icons['impossible.png'].default.src,
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
			title: 'Weakened T2',
		},
		weakened_t3: {
			desc: '+6 Weakness',
			icon: modifier_icons['weakness.png'].default.src,
			title: 'Weakened T3',
		},
		withering: {
			desc: '+10% chance mobs apply Wither on hit',
			icon: modifier_icons['hex_wither.png'].default.src,
			title: 'Withering',
		},
	},
};

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
