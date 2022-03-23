<script context="module">
    export async function preload(){
      return this.fetch(`about.json`)
        .then((r) => r.json())
        .then((about) => {
          return {about};
        });
    }
  </script>
  
  <script>
    export let about;
    console.log(about[0]);
  </script>
  
  <svelte:head>
    <title>About</title>
  </svelte:head>
  
  <div class="About">
    <h1>About Juan Camilo Farfan</h1>
    <p> {about[0].general.description}</p>
  </div>
  