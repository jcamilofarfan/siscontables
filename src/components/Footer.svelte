<style>
    .Footer{
        background: rgba(28, 41, 56, 0.8);
        color: #fff;
        padding: 1.5rem 0;
        margin: 2em 0 0 0;
        font-size: 13px;
        font-weight: 300;
    }
    .Footer-container{
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }

    .Footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Footer-svelte{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Footer-svelte img{
        margin: 8 0 0 0.5em;
    }
    /* responsive */
    @media screen and (max-width: 1024px) {
        .Footer-content{
            display: grid;
            grid-template-rows: 1fr;
            justify-content: space-around;
            width: 80%;
            margin: auto;
        }
    }

</style>
<footer class="Footer">
    <div class="Footer-container">
        <div class="Footer-content">
            <div class="Footer-copy">
                Hecho con amor por jcamilofarfan
            </div>
            <div class="Footer-svelte">
                Proudly powered by <a href="https://svelte.dev">Svelte</a>
                <img src="svelte.png" alt="Svelte">
            </div>
        </div>
    </div>
</footer>