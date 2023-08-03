<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let formatedPrice = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	console.log(data);
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
		<br/><br/>
		<div class='input'>
			<h3>Personal Information:</h3>
			<div>
				<label for="name">Name :</label>
				<input id="name" type='text' />
			</div>
			<div>
				<label for="mail">Mail :</label>
				<input id="mail" type='text' />
			</div>
			<div>
				<label for="address">Address :</label>
				<input id="address" type='text' />
			</div>
			<br/>
			<h3>Measurements:</h3>	
			{#each data.measurements as measure}
				<div>
					<label for="name">{measure.measurement} :</label>
					<input id="name" type='text' />
				</div>
			{/each}
			<br/><br/>
			<button>Purchase</button>
		</div>
		
		
		
	</div>
	<div class='gallery'>
		<div class='img' style='background-image: url({data.images[0].image})'></div>
		<br/><br/><br/>
		<div class='img' style='background-image: url({data.images[1].image})'></div>
	</div>
</div>

<style>

.input button {
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
	font-family: 'Crimson Pro', serif;
    transition: background-color 0.3s ease;
    outline: none;  /* Removes the outline on focus */
}

.input button:hover {
    background-color: black;
    color: white;
	border: 2px solid white;
}

.input button:active {
    background-color: black;
    color: white;
}

	h3 {
		font-weight: normal;
		text-align: left;
		line-height: 1em;
		font-size: 1em;
	}

	.measurements {
		padding-top: 20px;

	}
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


	.input {
    display: grid;
    gap: 10px;
}

.input div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
}

.input label {
    color: white;
    text-align: right;
    padding-right: 10px;
}

.input input[type='text'] {
	border: none;
    border-bottom: 2px solid white;
    background-color: black;
    color: white;
    padding: 10px;
    font-size: 18px;
    caret-color: white;
	outline: none;

}

</style>