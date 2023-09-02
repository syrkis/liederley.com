<script>
    import { onMount } from "svelte";
  
    let formHtml = "";
  
    onMount(async () => {
      const response = await fetch("/form.html");
      formHtml = await response.text();
    });
  </script>
  
  <div id="dynamic-form-container">
    {@html formHtml}
  </div>
  