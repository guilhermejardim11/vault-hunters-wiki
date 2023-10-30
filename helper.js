export const jsonToArray = (object) => {
	const mobArray = [];

	for (const id in object) {
		mobArray.push({
			...object[id],
			id: id,
		});
	}

	return mobArray;
};

export const capitalizeWords = (text) => {
	const words = text.replace('-', ' ').split(' ');

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}

	return words.join(' ');
};

export const importAll = (require) => {
	let images = {};

	require.keys().map((item, index) => {
		images[item.replace('./', '')] = require(item);
	});

	return images;
};
