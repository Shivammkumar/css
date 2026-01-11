employee = {
  //key: value
  id: 1,
  name: "Sohan Kumar",
  age: 25,
};


// Traverse through each property of the employee object using a for...in loop
for (let key in employee) {
  // Check if the property is a direct property of the object (not inherited)
  if (employee.hasOwnProperty(key)) 
    {
        // Access the value of the property using the key
        console.log(key + ": " + employee[key]);
    }
  // Access the value of the property using the key
  console.log(key + ": " + employee[key]);
}