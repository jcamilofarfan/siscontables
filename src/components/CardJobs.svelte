<!-- {
    "companyUrl": "https://www.linkedin.com/company/1388979/",
    "companyName": "Banco de Bogotá",
    "logoUrl": "https://media.licdn.com/dms/image/C4E0BAQHeD6q5h2Q98g/company-logo_400_400/0/1651265821925?e=1683763200&v=beta&t=_qlqlI56zenEqQKSyaxJauhni2EaA4Tn9-E3Ho6Nk0g",
    "jobTitle": "Full-stack Developer",
    "dateRange": "may. 2022 - actualidad · 10 meses",
    "description": "Full stack (Java Spring Boot-Go-TypeScritp/Angular), desarrollador en la nube de AWS (Lambdas con JavaScript) y serverless para soluciones bancarias.",
    "location": "Bogotá, Distrito Capital, Colombia"
}, -->
<script>
    export let job;
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
    .container_info > span {
        font-size: 15px;
    }
</style>

<div class="container">
    <div class="container_img">
        {#if job.logoUrl}
            <img class="img_school" src={job.logoUrl} alt={job.companyName}>
        {:else}
            <img class="img_school" src="Imagen_no_disponible.png" alt="" srcset="">
        {/if}
    </div>
    <div class="container_info">
        <h4>{job.companyName}</h4>
        <span>{job.jobTitle}</span>
        <p>{job.description}</p>
    </div>
</div>