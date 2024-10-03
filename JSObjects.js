const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 33;
person.eyeColor = "blue"; 

// Diplay Object Content
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";