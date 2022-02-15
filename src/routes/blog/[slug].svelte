<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import {onMount} from "svelte"
	import readingTime from "../../utils/readingTime";
	import formatIsoTime from "../../utils/formatIsoTime"
	export let post;
	post.tags = post.tags.map(tag =>{
		return tag.toLowerCase().replace(/\s/g, "-")
	})

	const disquis = () =>{
		if(document.readyState === 'complete'){
			let d = document, s = d.createElement('script');
			s.src = 'https://siscontables-dev.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		}
	};

	onMount (async () =>{
		await disquis();
	})
</script>

<style>
	h2{
		color: #22215b;
		font-size: 28px;
		margin: 0;
		padding: 0;
	}
	p {
		color: #555;
		font-size: 14px;
		font-weight: 300;
		margin-top: 5px;
		padding: 0;
	}
	.comments{
		margin: 2em 0 0 0;
	}
	.Post-tags{
		display: flex;
		grid-gap: 8px;
		padding: 16px 0 48px 16px;
		margin: 0 -16px;
		max-width: 100%;
		flex-wrap: wrap;
	}
	.Post-tags a{
		text-decoration: none;
        align-items: center;
        background: #fff;
        border-radius: 26px;
        border: 2px solid #eee;
        color: #111;
        display: flex;
        height: 55px;
        font-size: 1.3rem;
        padding: 0 24px;
        position: relative;
        transition: all .3s ease;
	}
	.Post-tags a:hover{
		border: 2px solid #09f;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="Post">
	<div class="Post-title">
		<h2>
			{post.title}
		</h2>
	</div>
	<p class="date">
		<time datetime="{post.createdAt}">
			📅 {formatIsoTime(
				post.createdAt
			)}
		</time>
		<span>
			{readingTime(post.html)}
		</span>
	</p>

	<div class="Post-tags">
		<span>Tags: </span>
		{#each post.tags as tag}
			<a href="tags/{tag}"> {tag.charAt(0).toUpperCase() + tag.slice(1)} </a>
		{/each}
	</div>

	<div class="content">
		<br>
		{@html post.html}
		
	</div>
	<div class="comments">
		<div id="disqus_thread"></div>
	</div>
</div>