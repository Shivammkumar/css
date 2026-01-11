//Implement the same code using forEach
// Define the human constructor function
function human(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

// Create an array to store human objects
let humans = [];

// Populate the array with human objects
humans.push(new human(1, "John Doe", 30));
humans.push(new human(2, "Jane Smith", 25));
humans.push(new human(3, "Michael Johnson", 40));

// Iterate over each human object in the humans array using forEach
humans.forEach(function (human, index) {
  // Log the index and label each human
  console.log("Human " + (index + 1) + ":");

  // Traverse through each key of the current human object
  Object.keys(human).forEach(function (key) {
    // Check if the property is a direct property of the object (not inherited)
    if (human.hasOwnProperty(key)) {
      // Access the value of the property using the key and log it
      console.log(key + ": " + human[key]);
    }
  });

  // Add an empty line for separation between humans
  console.log();
});