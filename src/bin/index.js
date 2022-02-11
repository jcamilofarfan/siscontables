const fetch = require('node-fetch');
const fd = require('fs');
let postsObj = require('../routes/blog/_post.json');
require('dotenv').config();

const APIPOST = process.env.API_WORDPRESS_POSTS;
const APITAGS = process.env.API_WORDPRESS_TAGS;
let tagsDB = [];

const writeFilePosts = (obj)=>{
    const parseData = JSON.stringify(obj);
    fd.writeFileSync('./src/routes/blog/_post.json', parseData);
    console.log('File written successfully');
}
const writeFileTags = (obj)=>{
    const parseData = JSON.stringify(obj);
    fd.writeFileSync('./src/routes/blog/_tags.json', parseData);
    console.log('File written successfully');
}
const fetchDataPosts = async() => {
    const response = await fetch(APIPOST);
    const data = await response.json();
    const posts = await data.map(post => {
        return {
            "title": post.title.rendered,
            "html": post.content.rendered,
            "slug": post.slug,
            "createdAt": post.date,
            "id": post.id,
            "desc": post.excerpt.rendered,
            "tags": getTagsId(post.tags)
        }
    });
    writeFilePosts(posts)
}
// buscar nombre de tags por id
const getTagsId = (tags) => {
    let tagsId = [];
    tagsDB.map(
        tag => {
            tags.map(
                tagId => {
                    if (tag.id === tagId) {
                        tagsId.push(tag.name);
                    }
                }
            )
        }
    )
    return tagsId;
}


const fetchDataTags = async() => {
    const response = await fetch(APITAGS);
    const data = await response.json();
    const tags = await data.map(tag => {
        return {
            "id": tag.id,
            "name": tag.name,
            "slug": tag.slug,
            "desc": tag.description,
            "count": tag.count
        }
    });
    tagsDB = tags;
    writeFileTags(tags)
}


const fetchData = async() => {
    fetchDataTags();
    fetchDataPosts();
}

fetchData();
