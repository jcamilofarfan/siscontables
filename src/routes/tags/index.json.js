import tags from './_tags.json';

const contents = JSON.stringify(tags.map(tag => {
	return {
		title: tag.name,
		slug: tag.slug,
		desc: tag.desc,
		image: tag.image,
		id: tag.id
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}