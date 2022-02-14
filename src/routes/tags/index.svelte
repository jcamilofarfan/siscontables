<svelte:head>
	<title>Tags</title>
</svelte:head>
<script context="module">
	export function preload() {
		return this.fetch(`tags.json`).then(r => r.json()).then(tags => {
			return { tags };
		});
	}
</script>

<script>
  import Tags from "../../components/Tag.svelte"
  export let tags;
</script>

<style>
  .Tags-container{
    display: flex;
    grid-gap: 8px;
    padding: 16px 0 48px 16px;
    margin: 0 -16px;
    max-width: 100%;
    flex-wrap: wrap;
  }
</style>

<div>
  <h1>Artículos por temas</h1>
  <div class="Tags-container">
    {#each tags as tag}
      <Tags {tag}/>
    {/each}
  </div>

</div>
