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
    const filterPosts = posts.filter(post => {
            return post.tags.includes('Criptomoneda');
        })
</script>

<style>
    .Posts {
        display: grid;
        justify-content: space-between;
        grid-gap: 30px;
        grid-template-columns: 1fr;
    }
</style>

<svelte:head>
    <title>
        General
    </title>
</svelte:head>

<div class="General">
    <h1>General</h1>
    <div class="Posts">
        {#if filterPosts.length >= 0}
            {#each filterPosts as post}
                <Post {post} />
            {/each}
        {:else}
            <p>No hay posts....</p>
        {/if}
    </div>
</div>