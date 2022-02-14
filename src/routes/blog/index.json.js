import posts from './_post.json';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		desc: post.desc,
		createdAt: post.createdAt,
		tags: post.tags,
		html: post.html,
		image: post.image,
		id: post.id
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}