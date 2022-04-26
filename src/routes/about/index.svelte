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
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="About">
  <h1>About Juan Camilo Farfan</h1>
  <img src={about[0].general.imgUrl} alt="jcamilofarfan" />
  <p>{about[0].general.headline}</p>
  <h3>Quien Soy?</h3>
  <p>{about[0].general.description}</p>
  <h3>Habilidades</h3>
  <ul>
    {#each about[0].skills as skill}
      <li>{skill.name}</li>
    {/each}
  </ul>
  <h3>Experiencia</h3>
  <ul>
    {#each about[0].jobs as job}
      <li>{job.jobTitle}</li>
    {/each}
  </ul>
  <h3>Educacion</h3>
  <ul>
    {#each about[0].schools as school}
      <li>{school.schoolName}</li>
    {/each}
  </ul>
  <h3>Cursos</h3>
  <ul>
    {#each about[0].licences as licence}
      <li>
        {licence.name}
      </li>
    {/each}
  </ul>
</div>
