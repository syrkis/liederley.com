<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let formatedPrice = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
				lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
		<br/><br/>
		<div class='input'>
			<div>
				<label for="name">Name :</label>
				<input id="name" type='text' />
			</div>
			<div>
				<label for="measures">Measures :</label>
				<input id="measures" type='text' />
			</div>
			<div>
				<label for="mail">Mail :</label>
				<input id="mail" type='text' />
			</div>
			<div>
				<label for="address">Address :</label>
				<input id="address" type='text' />
			</div>
		</div>
		
		
		
	</div>
	<div class='gallery'>
		<div class='img' style='background-image: url({data.image})'></div>
		<br/><br/><br/>
		<div class='img' style='background-image: url({data.image})'></div>
	</div>
</div>

<style>

	.form {
		width: 95%;
		max-width: 450px;
		margin: auto;
	}

	.left { text-align: left; }
	.right { text-align: right; }

	.title {
		padding-bottom: 50px;
		display: grid;
		grid-template-columns: 1fr 1fr;
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
    grid-template-columns: 1fr 3fr;
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