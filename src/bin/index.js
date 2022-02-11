const fetch = require('node-fetch');
const fd = require('fs');
let postsObj = require('../routes/blog/_post.json');
require('dotenv').config();

const API = process.env.API_WORDPRESS;

const writeFile = (obj)=>{
    const parseData = JSON.stringify(obj);
    fd.writeFileSync('./src/routes/blog/_post.json', parseData);
    console.log('File written successfully');
}

const fetchData = async() => {
    const response = await fetch(API);
    const data = await response.json();
    const posts = await data.map(post => {
        return {
            "title": post.title.rendered,
            "html": post.content.rendered,
            "slug": post.slug,
            "createdAt": post.date,
            "id": post.id,
            "desc": post.excerpt.rendered,
            "tags": post.tags
            // "image": post.better_featured_image.source_url,
        }
    });
    writeFile(posts)
}

fetchData();
