<script>
	import Nav from '../components/Nav.svelte';
	import Header from "../components/Header.svelte";
	import Main from '../components/Main.svelte';
	import Footer from "../components/Footer.svelte";
	export let segment;
</script>

<!-- <style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style> -->

<Header></Header>

<Nav {segment}/>

<Main>
	<slot />
</Main>
<Footer/>