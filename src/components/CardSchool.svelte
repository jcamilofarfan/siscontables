<script>
    export let school;
</script>
<style>
    .img_school{
        width: 100%;
        border-radius: 50%;
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
        font-size: 20px;
    }
    .container_info > p {
        font-size: 15px;
    }



</style>

<div class="container">
    <div class="container_img">
        {#if school.logoUrl}
            <img class="img_school" src={school.logoUrl} alt={school.schoolName}>
        {:else}
            <img class="img_school" src="Imagen_no_disponible.png" alt="" srcset="">
        {/if}
    </div>
    <div class="container_info">
        <h4>{school.schoolName}</h4>
        <p>{school.degree}</p>
    </div>
</div>