<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from "../components/Post.svelte"
	export let posts;
</script>

<style>
	.Posts{
		display: grid;
		justify-content: space-between;
		grid-gap: 15px;
		grid-template-columns: 1fr;
	}
</style>

<svelte:head>
	<title>Jcamilofarfan - </title>
	<meta name="description" content="Blog Jcamilofarfan, software Developer and public Accountant"/>
	<meta name="keywords" content="Jcamilofarfan, software Developer, public Accountant"/>
	<meta name="author" content="Jcamilofarfan"/>
	<meta name="twitter:card" content="summary_large_image"/>
	<meta name="twitter:site" content="@jcamilofarfan"/>
	<meta name="twitter:creator" content="@jcamilofarfan"/>
	<meta name="twitter:title" content="Jcamilofarfan"/>
	<meta name="twitter:description" content="Blog Jcamilofarfan, software Developer and public Accountant"/>
	<meta name="twitter:image" content="https://contador.tech/wp-content/uploads/2021/12/Logo-Google-WorkSpace.png"/>
	
	<meta property="og:title" content="Jcamilofarfan"/>
	<meta property="og:description" content="Blog Jcamilofarfan, software Developer and public Accountant"/>
	<meta property="og:image" content="https://contador.tech/wp-content/uploads/2021/12/Logo-Google-WorkSpace.png"/>
	<meta property="og:url" content="https://blog.siscontables.dev/"/>
	<meta property="og:site_name" content="Jcamilofarfan"/>
	<meta property="og:locale" content="es_ES"/>
	<meta property="og:type" content="article"/>
	<meta property="fb:app_id" content="1085117785665000"/>

</svelte:head>

<div class="Home">
	<div class="Posts">
		{#each posts as post}
			<Post {post}/>
		{/each}
	</div>
</div>


