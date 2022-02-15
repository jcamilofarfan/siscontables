<script>
    import Sidebar from "./Sidebar.svelte";

</script>
<style>
    .Main-container{
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }
    .Main-content{
        margin: 2em 0 0 0;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 60px;
        justify-content: space-between;
    }
    /* add responsive */
    @media screen and (max-width: 1024px){
        .Main-container{
            width: 80%;
            margin: auto;
        }
        .Main-content{
            grid-template-columns: 1fr;
            
        }
    }

</style>

<main class="Main">
    <div class="Main-container">
        <div class="Main-content">
            <slot />
            <Sidebar/>
        </div>
    </div>
</main>