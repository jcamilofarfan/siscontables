<script>
	import Nav from '../components/Nav.svelte';
	import Header from "../components/Header.svelte";
	import Main from '../components/Main.svelte';
	import Footer from "../components/Footer.svelte";
	export let segment;
</script>

<style>
</style>

<Header></Header>

<Nav {segment}/>

<Main>
	<slot />
</Main>
<Footer/>