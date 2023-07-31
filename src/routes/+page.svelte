<script lang="ts">
  import Tile from '$lib/comps/Tile.svelte';

  import type { PageData } from './$types';
  
  export let data: PageData;
  console.log(data);
</script>

<div class="container">
  <div class='logo-container'>
    <h1 class='logo'>
      FREDERIK
      <br/>
      LIEDERLEY
    </h1>
    <div class='text'>
      <p>
        Bespoke garments available upon request.
      </p>
    </div>
  </div>
  <div class='pieces'>
    {#each data.body as piece}
    <div class='piece'>
      <Tile item={piece} />
    </div>
    {/each}
  </div>
</div>

<style>

/* two columns pieces*/
  .pieces {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 95%;
    max-width: 1000px;
    margin: auto;
  }

  @media (max-width: 1000px) {
    .pieces {
      grid-template-columns: 1fr;
    }
  }

  .text {
    padding-top: 10vh;
    width: 95%;
    max-width: 500px;
    margin: auto;
  }

  :global(body) {
    font-family: 'Crimson Pro', serif;
  }

  h1 {
    padding-top: 35vh;
    letter-spacing: 0.3em;
    line-height: 1.5em;
  }

:global(hr) {
        width: 100%;
        margin: 0 auto;
        border: 0.5px solid white;
    }

    :global(.divider) {
        width: 200px;
        margin: auto;
        padding: 100px 0 0 0;
        text-align: center;
        padding-bottom: 80px;
    }

</style>
