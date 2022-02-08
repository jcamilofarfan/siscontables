<svelte:head>
	<title>Blog</title>
</svelte:head>

<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>

</style>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
