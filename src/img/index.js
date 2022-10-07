const importAll = (r) => {
	let images = {};

	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item);
	});

	return images
}

const images = {
	projects: importAll(require.context('./project', false, /\.(png|jpe?g|svg)$/)),
	screenshots: importAll(require.context('./project/raw_screenshots', false, /\.(png|jpe?g|svg)$/)),
};

export default images;