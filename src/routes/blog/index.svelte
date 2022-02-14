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
	import Post from "../../components/Post.svelte"
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

<div class="Home">
	<div class="Posts">
		{#each posts as post}
			<Post {post}/>
		{/each}
	</div>
</div>

