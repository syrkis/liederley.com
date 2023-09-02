<script lang="ts">
    let formSubmitted = false;
    export let piece: string;
    export let price: string;

    async function handleSubmit(event){
        event.preventDefault();
        const target = event.target;
        const formData = new FormData(target);

        try{
            formSubmitted = true;
            let response = await fetch("https://formspree.io/f/mvojrarz", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json' 
                }
            });

            if(response.ok){
                console.log("Form submission successful");
            }else{
                console.error("Form submission failed");
            }
        }catch(error){
            console.error("Error: ", error);
        }
    }
</script>

{#if !formSubmitted}

<form on:submit={handleSubmit} class='input'>
    <div class="form-group">
        <label>Name*:</label>
        <input type="text" name="name" required>
    </div>

    <div class="form-group">
        <label>Mail*:</label>
        <input type="email" name="mail" required>
    </div>

    <div class="form-group">
        <label>Note:</label>
        <input type="text" name="note">
    </div>
    
    <!-- make those values fixed--->
    <input type="hidden" name="piece" value="{piece}">
    <input type="hidden" name="price" value="{price}">
    <input type="text" name="_gotcha" style="display:none" />
    <input type="hidden" name="_next" value="/success">
    <div class="form-group button">
        <div></div>
        <button type="submit">Request purchase</button>
    </div>
</form>
{:else}
<div>
    <h2>We'll be in touch</h2>
 </div>
{/if}

<style>

    .input {
        line-height: 3em;
    }

    .form-group {
        display: grid;
        grid-template-columns: 1fr 4fr;
        align-items: center;
    }

    .form-group label {
        text-align: right;
        color: white;
        margin-right: 10px;
    }

    .form-group input[type="text"],
    .form-group input[type="email"] {
        width: 100%;
        border: none;
        border-bottom: 2px solid white;
        background: black;
        color: white;
        outline:none;
        font-size: 1.1em;
    }

    .button button {
        margin-top: 20px;
        outline: none;
        border: none;
        width: 100%;
        background: white;
        color: black;
        font: inherit;
    }
    .button button:hover {
        cursor: pointer;
    }
</style>
