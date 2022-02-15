const fetch = require('node-fetch');
const fd = require('fs');
// let postsObj = require('../routes/blog/_post.json');
require('dotenv').config();

const APIPOST = process.env.API_WORDPRESS_POSTS;
const APITAGS = process.env.API_WORDPRESS_TAGS;

const blogTitle = process.env.BLOG_TITLE
const blogUrl = process.env.BLOG_URL
const blogCover = process.env.BLOG_COVER
const blogDesc = process.env.BLOG_DESC
const blogAuthor = process.env.BLOG_AUTHOR
const blogFavicon = process.env.BLOG_FAVICON

let tagsDB = [];

const getDate= (date) => {
    if(date){
        return new Date(date).toUTCString()
    }else{
        return new Date().toUTCString()
    }
}


const createRss = async (data) => {
    const parseItems = await data.map(item=>{
        const pubDate = getDate(item.createdAt);
        return `
            <item>
                <title>
                    <![CDATA[${item.title}]]>
                </title>
                <link>
                    ${blogUrl}blog/${item.slug}
                </link>
                <description>
                    <![CDATA[${item.desc}]]>
                </description>
                <category>
                    <![CDATA[${item.tags.join()}]]>
                </category>
                <pubDate>
                    ${pubDate}
                </pubDate>
                <content:encoded
                    xmlns:content="${blogUrl}"
                >
                    <![CDATA[${item.html}]]>
                </content:encoded>
            </item>
            `
    }).join('');

    const template = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="1.0">
    <channel>
        <title>
            <![CDATA[${blogTitle}]]>
        </title>
        <description>
            <![CDATA[${blogDesc}]]>
        </description>
        <image>
            <url>
                ${blogFavicon}
            </url>
            <title>
                <![CDATA[${blogTitle}]]>
            </title>
            <link>
                ${blogUrl}
            </link>
        </image>
        <generator>
            Jcamilofarfan
        </generator>
        <latBuildDate>
            ${getDate()}
        </latBuildDate>
        <atom10:link
            xmlns:atom10="${blogUrl}rss.xml"
            rel="selft"
            type="application/rss+xml"
        />
        <ttl>60</ttl>
        ${parseItems}
    </channel>
    </rss>`
    return template;
}

const createSiteMap = async (data) => {
    const parseItems = await data.map(item=>{
        return`
            <url>
                <loc>${blogUrl}blog/${item.slug}</loc>
                <lastmod>${getDate(item.createdAt)}</lastmod>
                <priority>0.80</priority>
            </url>
        `
    }).join('');
    const template =`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${blogUrl}</loc>
                <lastmod>${getDate()}</lastmod>
                <priority>1.0</priority>
            </url>
            ${parseItems}
        </urlset>
    `
    return template
}

const writeFilePosts = async (obj) => {
    const parseData = JSON.stringify(obj);
    const rss = await createRss(obj);
    const siteMap = await createSiteMap(obj);
    fd.writeFileSync('./src/routes/blog/_post.json', parseData);
    console.log('Updated posts successfully');
    fd.writeFileSync('./static/rss.xml', rss);
    console.log('Update RSS file');
    fd.writeFileSync('./static/sitemap.xml', siteMap);
    console.log('Update SiteMap file');
}
const writeFileTags = (obj) => {
    const parseData = JSON.stringify(obj);
    fd.writeFileSync('./src/routes/tags/_tags.json', parseData);
    console.log('Updated tags successfully');
}
const fetchDataPosts = async () => {
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
            "tags": getTagsId(post.tags),
            "image": post.yoast_head_json.og_image[0].url

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

const fetchDataTags = async () => {
    const response = await fetch(APITAGS);
    const data = await response.json();
    const tags = await data.map(tag => {
        return {
            "id": tag.id,
            "name": tag.name,
            "slug": tag.slug,
            "desc": tag.description,
            "count": tag.count,
            "image": tag.yoast_head_json.og_image[0].url
        }
    });
    tagsDB = tags;
    writeFileTags(tags)
}


const fetchData = async () => {
    fetchDataTags();
    fetchDataPosts();
}

fetchData();
