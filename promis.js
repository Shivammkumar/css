/ Simulating an asynchronous operation that resolves after a delay
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 1000); // Simulating a delay of 1 second
  });
};

// Consuming the Promise using multiple .then() methods
fetchData()
  .then((result) => {
    console.log(result); // Output: "Data fetched successfully"
    return 'Additional data processing';
  })
  .then((processedData) => {
    console.log(processedData); // Output: "Additional data processing"
    return 'Final data processing';
  })
  .then((finalData) => {
    console.log(finalData); // Output: "Final data processing"
  })
  .catch((error) => {
    console.error(error.message); // This will not be triggered in this example
  });