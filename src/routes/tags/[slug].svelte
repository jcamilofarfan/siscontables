<script context="module">
  export async function preload({ params }) {
    let slugTag = params.slug;
    // traer tags para pintar
    let tags = await this.fetch(`tags.json`)
      .then((r) => r.json())
      .then((tags) => {
        return tags;
      });
    let tag = tags.filter((tag) => {
      return tag.slug === slugTag;
    });
    tag = tag[0];
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        const filterPosts = posts.filter((post) => {
          return post.tags.includes(tag.title);
        });
        return { filterPosts, tags, tag };
      });
  }
</script>

<script>
  import Post from "../../components/Post.svelte";
  import Tags from "../../components/Tag.svelte";
  export let filterPosts;
  export let tag;
  export let tags;
</script>

<svelte:head>
  <title>Tags</title>
</svelte:head>
<div>
  <div class="Tags-container">
    {#each tags as tag}
      <Tags {tag}/>
    {/each}
  </div>
  <h1>{tag.title}</h1>
  <p>{@html tag.desc}</p>
  <div class="Posts">
    {#if filterPosts.length > 0}
      {#each filterPosts as post}
        <Post {post} />
      {/each}
    {:else}
      <div class="Post">
        <span class="Not-post">Esta Etiqueta no tiene Publicaciones</span>
      </div>
    {/if}
  </div>
</div>

<style>
  .Posts {
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
  .Not-post{
    margin: 15px 0 20px 0;
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    color: #9b9b9b;
    text-align: center;
  }
</style>
