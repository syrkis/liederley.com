export const handler = async (event, context) => {
    // Here, event.body contains the form data
    console.log('Received form data:', event.body);
  
    // You can then store this data or do whatever you want with it
    // For this example, let's just return it back
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted!' }),
    };
  };
  