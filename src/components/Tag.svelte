<script>
    export let tag
</script>
<style>
    .Tag-link{
        text-decoration: none;
        align-items: center;
        background: #fff;
        border-radius: 26px;
        border: 2px solid #eee;
        color: #111;
        display: flex;
        height: 55px;
        font-size: 1.3rem;
        padding: 0 24px;
        position: relative;
        transition: all .3s ease;
    }
    .Tag-img{
        width: 28px;
        height: 28px;
        object-fit: contain;
    }
    .Tag-link h4{
        padding-left: 12px;
    }
    .Tag-link:hover{
        border: 2px solid #09f;
    }
</style>

<div class="Tag-item">
    <a
        class = "Tag-link"
        rel="prefetch"
        href="tags/{tag.slug}">
        <img class="Tag-img" src="{tag.image}" alt="{tag.title}">
        <h4>{tag.title}</h4>
    </a>
</div>