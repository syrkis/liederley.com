<script lang="ts">

    import { onMount } from "svelte";
    import type { Piece } from '$lib/types';
    import VanillaTilt from "vanilla-tilt";
    export let item: Piece; 

    /* format data. month and year only */
    /* add tilt effect to post */
    onMount(() => {
        VanillaTilt.init(document.querySelectorAll(".piece"), {
            max: 0.0001,
            speed: 7000,
            reverse: true,
            scale: 1.04
        });
    });

    /* format price with commas and decimals */
    item.price = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

</script>

<div class="piece">
    <div class='img' style='background-image: url({item.image})'></div>
    <img class="image" src={item.image} alt={item.title}/>
    <div class='productHeader'>
        <p>{item.title}</p> <span>{item.price} €</span>
    </div> 
    <div class='description'>
        <p>{item.body}</p>
    </div>
</div>

<style>
    
    .img {
        background: no-repeat center center;
    }

    .description {
        text-align: left;
        padding: 0 10px;
    }

    .productHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .piece {
        height: 70vh;
        margin: auto;
        max-width: 95%;
        padding: 10vh 5vh;
        overflow: hidden;
    }

</style>