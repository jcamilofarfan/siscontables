<script context="module">
  export async function preload() {
    return this.fetch(`about.json`)
      .then((r) => r.json())
      .then((about) => {
        return { about };
      });
  }
</script>

<script>
  function noReferer(i, u){
    i.src = 'javascript:document.write("<iframe src=\\"'+u+'\\" style=\\"width:100%;height:100%;border:0\\"></iframe>");';
  }
  export let about;
  import CardSchool from "../../components/CardSchool.svelte";
  import LicencesCard from "../../components/LicencesCard.svelte";
  import CardSkill from "../../components/CardSkill.svelte";
</script>

<style>
  .img_perfil{
    width: 100px;
  }
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  h3{
    margin-top: 20px;
    font-weight: 500;
    font-size: large;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="About">
  <h1>About Juan Camilo Farfan</h1>
  <img class="img_perfil" src={about[0].general.imgUrl} alt="jcamilofarfan" />
  <p>{about[0].general.headline}</p>
  <h3>Quien Soy?</h3>
  <p>{about[0].general.description}</p>
  <h3>Habilidades</h3>
  <div>
    {#each about[0].skills as skill}
      <CardSkill {skill}/>
    {/each}
  </div>
  <h3>Experiencia</h3>
  <ul>
    {#each about[0].jobs as job}
      <li>{job.jobTitle}</li>
    {/each}
  </ul>
  <h3>Educacion</h3>
  <div>
    {#each about[0].schools as school}
      <CardSchool {school}/>
    {/each}
  </div>
  <h3>Cursos</h3>
  <div class="container">
    {#each about[0].licences as licence}
      <LicencesCard {licence}/>
    {/each}
  </div>
</div>
