import data from './_tags.json';

let tags = data

tags.forEach(tag => {
	tag.html = tag.html.replace(/^\t{3}/gm, '');
});

export default tags;
