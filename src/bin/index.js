const fetch = require('node-fetch');
const fd = require('fs');
require('dotenv').config();

const APIPOST = process.env.API_WORDPRESS_POSTS;
const APITAGS = process.env.API_WORDPRESS_TAGS;

const APIPHANTOM = process.env.API_PHANTOM;

const blogTitle = process.env.BLOG_TITLE
const blogUrl = process.env.BLOG_URL
const blogCover = process.env.BLOG_COVER
const blogDesc = process.env.BLOG_DESC
const blogAuthor = process.env.BLOG_AUTHOR
const blogFavicon = process.env.BLOG_FAVICON



let tagsDB = [];
let postSisContables = {}

const getDate= (date) => {
    if(date){
        return new Date(date).toUTCString()
    }else{
        return new Date().toUTCString()
    }
}
const getDateSiteMap= (date)=>{
    if(date){
        date = new Date(date).toISOString().split('T')[0];
    }else{
        date = new Date().toISOString().split('T')[0]
    }
    return date;
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
                <lastmod>${getDateSiteMap(getDate(item.createdAt))}</lastmod>
                <priority>0.80</priority>
            </url>
        `
    }).join('');
    const template =`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${blogUrl}</loc>
                <lastmod>${getDateSiteMap(getDate())}</lastmod>
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
const writeFileLinkedin = (obj) =>{
    const parseData = JSON.stringify(obj);
    fd.writeFileSync('./src/routes/about/_about.json', parseData);
    console.log('Updated linkedin successfully');
}
const fetchDataPosts = async () => {
    const response = await fetch(APIPOST);
    const data = await response.json();
    const posts = await data.posts.map(post => {
        return {
            "title": post.title,
            "html": post.html,
            "slug": post.slug,
            "createdAt": post.published_at,
            "id": post.id,
            "desc": post.excerpt,
            "tags": getTagsName(post.tags),
            "image": post.feature_image
        }
    });
    postSisContables = posts.filter(post => {
        return post.title === 'Sistemas Contables'
    })
    // console.log(postSisContables);
    writeFilePosts(posts)
}

const fetchDataLinkedin = async () =>{
    const response = await fetch(APIPHANTOM);
    const data = await response.json();
    writeFileLinkedin(data)
}
const getTagsName = (tags) => {
    let tagsName = [];
    tags.map(tag => {
        tagsName.push(
            tag.name
        )
    })
    return tagsName;
}
const fetchDataTags = async () => {
    const response = await fetch(APITAGS);
    const data = await response.json();
    const tags = await data.tags.map(tag => {
        return {
            "id": tag.id,
            "name": tag.name,
            "slug": tag.slug,
            "desc": tag.description,
            "image": tag.feature_image
        }
    });
    tagsDB = tags;
    writeFileTags(tags)
}
const fetchData = async () => {
//     fetchDataTags();
//     fetchDataPosts();
    fetchDataLinkedin();
}
fetchData();
