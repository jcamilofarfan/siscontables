<script>
  export let skill;
</script>

  <style>
    .zoom {
        transition: transform 0.5s; /* Animation */
    }

    .zoom:hover {
        cursor: pointer;
        background-color: rgb(27, 27, 27);
        color: wheat;
        transform: scale(
            1.5
        ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
    .container {
        border-radius:10px;
        display: inline-flex;
        margin: 5px;
        border: 1px solid black;
        width: fit-content;
        height: fit-content;
        padding: 5px;
    }
    p {
        margin: 0;
    }
</style>
<div class="container zoom">
    <p>{skill.name}</p>
</div>

