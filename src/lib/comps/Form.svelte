<script>
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });
  
        if (response.ok) {
          console.log("Form successfully submitted");
        } else {
          console.log("Form submission failed");
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };
  </script>
  
  <form on:submit={handleSubmit}>
    <input type="hidden" name="form-name" value="contactForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <button type="submit">Submit</button>
  </form>
  