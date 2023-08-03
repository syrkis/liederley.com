<script lang="ts">
  import Tile from '$lib/comps/Tile.svelte';

  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="container">
  <div class='logo'>
    <h1>
      FREDERIK
      LIEDERLEY
    </h1>
    <span>MILANO / ANTWERP</span>
  </div>
  <div class='pieces'>
    {#each data.body as piece}
    <div class='piece'>
      <Tile item={piece} />
    </div>
    {/each}
  </div>
</div>

<svelte:head>
  <title>FREDERIK LIEDERLEY</title>
  <meta name="description" content="Frederik Liederley is a bespoke designer based in Milano, Italy.">
  <meta name="keywords" content="Frederik Liederley, tailor, bespoke, Antwerp, Belgium, Milano, Italy">
</svelte:head>

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

  :global(body) {
    font-family: 'Crimson Pro', serif;
  }

  h1 {
    letter-spacing: 0.3em;
    line-height: 1.5em;
  }

  .logo {
    padding-top: 40vh;
    padding-bottom: 25vh;
    text-align: center;
  }

</style>
