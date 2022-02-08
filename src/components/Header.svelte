<script>
    import analyticsTracking from "../utils/analytics";
</script>
<style>
    .Header{
        background-color: #fafbfc;
        color: white;
        padding: 1em 0 0 0;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    .Header-container{
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }

    .Header-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .Header h1{
        color: #191a22;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.8px;
        cursor: pointer;
    }

    Header h1 span{
        display: block;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: normal;
        margin: 0.3em 0 0 0;
    }

    .Header ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .Header li{
        display: inline-block;
        margin: 0 0.5em 0 0;
    }

    .Header a{
        text-decoration: none;
        font-weight: 300;
        font-size: 14px;
        /* color: white;
        letter-spacing: normal;
        cursor: pointer; */
    }

    .Header-social img {
        width: 20px;
        /* height: 20px;
        margin: 0 0.5em 0 0; */
    }

</style>

<header class="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <h1>Juan Farfan</h1>
                <span>BackEnd Devloper and Public accountan</span>
            </div>
            <div class="Header-social">
                <ul>
                    <li>
                        <a href="https://github.com/jcamilofarfan" target="_blank" rel="noreferrer" on:click={analyticsTracking('github')}>
                            <img src="github.png" alt="GitHub">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jcamilofarfan/" target="_blank" rel="noreferrer"on:click={analyticsTracking('linkedin')}>
                            <img src="linkedin.png" alt="LinkedIn">
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/jcamilofarfan" target="_blank" rel="noreferrer" on:click={analyticsTracking('twitter')}>
                            <img src="twitter.png" alt="Twitter">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jcamilofarfan/" target="_blank" rel="noreferrer" on:click={analyticsTracking('instagram')}>
                            <img src="instagram.png" alt="Instagram">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>