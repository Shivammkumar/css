//Including a method in an object
// Define a constructor function named testEmp that takes id, name, and age as parameters
function testEmp(id, name, age) {
  // Inside the constructor, assign the id, name, and age to properties of the newly created object
  this.id = id;
  this.name = name;
  this.age = age;

  // Define a function named updateName and assign it to the property updateName of the object being created
  this.updateName = updateName;

  // Define the updateName function which takes nm as a parameter
  function updateName(nm) {
    // Inside updateName function, update the name property of the object to the value of nm
    this.name = nm;
  }
}

// Create a new instance of the testEmp object with id=2, name="Amit Kumar", and age=20
e = new testEmp(2, "Amit Kumar", 20);

// Print the id, name, and age of the object e
console.log(e.id + "  " + e.name + " " + e.age);

// Call the updateName method of the object e and pass "Sujit Kumar" as argument
e.updateName("Sujit Kumar");

// Print the id, updated name, and age of the object e
console.log(e.id + "  " + e.name + " " + e.age);