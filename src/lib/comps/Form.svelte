<script lang="ts">
    export let piece: string;
</script>

<form action="https://formspree.io/f/mvojrarz" method="POST">
    <label>
        Name*:
      <input type="text" name="name">
    </label>
    <label>
        Mail*:
      <input type="email" name="mail">
    </label>
    <label>
        Note:
      <textarea name="note"></textarea>
    </label>
    <input type="hidden" name="piece" value="{piece}">
    <input type="hidden" name="_next" value="https://liederley.com/thankyou">
    <button type="submit">Request Purchase</button>
</form>
  