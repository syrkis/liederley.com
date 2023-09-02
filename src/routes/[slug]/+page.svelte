<script lang="ts">
	import Form from '$lib/comps/Form.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;
	let formatedPrice = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	let nImages = data.images.length;
	

</script>

<div class="container">
	<div class='form'>
		<div class='title'>
			<h2 class='left'>
				{data.title}
			</h2>
			<span class='right'>
				€ {formatedPrice}
			</span>
		</div>
		<div class='text'>
			<p>
				{data.body}
			</p>
		</div>

		<Form piece={data.title} price={data.price} />
		  
	</div>
	<div class='gallery'>
		<div class='img' style='background-image: url({data.images[0].image})'></div>
		<br/><br/><br/>
		<div class='img' style='background-image: url({data.images[nImages - 1].image})'></div>
	</div>
</div>

<style>
    /* your previous styles... */
    
	.form {
		width: 95%;
		max-width: 500px;
		margin: auto;
	}

	.gallery {
		width: 95%;
		max-width: 600px;
		margin: auto;
	}

	.left { text-align: left; }
	.right { text-align: right; }

	.title {
		padding-bottom: 50px;
		display: grid;
		grid-template-columns: 4fr 1fr;
	}

	.text {
		text-align: justify;
	}
	.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;
    padding: 100px;
    align-items: center; /* centers items vertically */
}

@media (max-width: 1000px) {
    .container {
        grid-template-columns: 1fr;
        grid-gap: 50px;
        padding: 10px;
        align-items: start; /* aligns items at the top */
    }

    .title {
        text-align: left;
    }
}

	.img {
		/* make image square*/
		width: 100%;
		height: 0;
		padding-top: 100%;
		background-size: cover;
		background-position: center;
	}

	@media (max-width: 1000px) {
		.gallery {
			grid-template-columns: 1fr;
		}
	}



</style>