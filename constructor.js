//Array of objects
// Define the person constructor function
function person(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

// Create an array to store person objects
let people = [];

// Populate the array with person objects
people.push(new person(1, "Amit", 30));
people.push(new person(2, "Sumit", 25));
people.push(new person(3, "Rajesh", 40));

// Traverse through each object in the people array
for (let i = 0; i < people.length; i++) {
  console.log("Person " + (i + 1) + ":");
  let individual = people[i];

  // Traverse through each key of the current person object
  for (let key in individual) {
    // Check if the property is a direct property of the object (not inherited)
    if (individual.hasOwnProperty(key)) {
      // Access the value of the property using the key
      console.log(key + ": " + individual[key]);
    }
  }
  console.log(); // Add an empty line for separation between people
}