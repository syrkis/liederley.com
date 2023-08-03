<script lang="ts">
    import Footer from '$lib/comps/Footer.svelte';
</script>

<slot />
<Footer />

<svelte:head>
    <meta property="og:image" content="https://syrkis.ams3.cdn.digitaloceanspaces.com/noah/virian/virian.png" />
    <meta property="og:title" content="FREDERIK LIEDERLEY" />
    <meta property="og:url" content="https://liederley.com" />
</svelte:head>

<style>
    :global(body) {
        letter-spacing: 0.02em;
        font-size: 1.2em;
        background-color: #000000;
        color: white;
        text-align: center;
        font-family: 'Crimson Pro', serif;
        line-height: 2em;
    }
    

    @media (prefers-color-scheme: light) {
        :global(body) {
            filter: invert(1);
            background-color: white;
        }
        :global(img, .img) {
            filter: invert(1);
        }
    }

    :global(a) {
        color: white;
        text-decoration: none;
        padding: 5px;
    }

    :global(h1) {
        font-weight: normal;
        letter-spacing: 0.1em;
    }

    :global(h2) {
        font-size: 1.3rem;
        font-weight: 300;
        margin: 0;
        letter-spacing: 0.1em;
    }

    :global(hr) {
        width: 100%;
        margin: 0 auto;
        border: 0.5px solid white;
    }

    :global(.divider) {
        width: 200px;
        margin: auto;
        text-align: center;
        padding-bottom: 80px;
    }

</style>