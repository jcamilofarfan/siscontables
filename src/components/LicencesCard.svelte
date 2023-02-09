<script>
    export let licence;
</script>
<style>
    .img_school{
        height:40px;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr 7fr;
    }
    .container_info{
        padding-left: 10px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
    .container_info > h4 {
        font-weight: bold;
        font-size: 15px;
        margin: 0;
    }
    .container_info > p {
        margin: 0;
        font-size: 13px;
    }
    .container_img{
        display: flex;
    }
    a{
        text-decoration: none;
    }
</style>

<a href={licence.credentialUrl} target="_blank" >
<div class="container">
    <div class="container_img">
            <img class="img_school" src="certificado.png" alt={licence.name}>
    </div>
    <div class="container_info">
        <h4>{licence.name}</h4>
        <p>{licence.companyName}</p>
        <span>
            {licence.date}
        </span>
    </div>
</div>
</a>