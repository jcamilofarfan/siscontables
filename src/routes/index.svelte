<script context="module">
	export async function preload() {
		let tags = await this.fetch(`tags.json`)
			.then((r) => r.json())
			.then((tags) => {
				return tags;
			});
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts, tags };
		});
	}
</script>

<script>
	import Post from "../components/Post.svelte"
	import Tags from "../components/Tag.svelte";
	export let posts;
	export let tags;
</script>

<style>
	.Posts{
		display: grid;
		justify-content: space-between;
		grid-gap: 15px;
		grid-template-columns: 1fr;
	}
	.Tags-container{
    display: flex;
    grid-gap: 8px;
    padding: 16px 0 48px 16px;
    margin: 0 -16px;
    max-width: 100%;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
	<title>Jcamilofarfan - </title>


</svelte:head>

<div class="Home">
	<div class="Posts">
		{#each posts as post}
			<Post {post}/>
		{/each}
	</div>
	<h1>Artículos por temas</h1>
	<div class="Tags-container">
	  {#each tags as tag}
		<Tags {tag}/>
	  {/each}
	</div>

</div>


