const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 33;
person.eyeColor = "blue";
person.fullName = function() { // Define fullName as a function
  return this.firstName + " " + this.lastName;
};

const person2 = {
    firstName: "Johnny",
    lastName: "Black",
    id: 5566,
    age: 34,
    eyeColor: "black",
    fullName() {
      return this.firstName + " " + this.lastName;
    }
};


document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old. "+
"Their eye color is " +person["eyeColor"]+". "+person.fullName();

document.getElementById("demo2").innerHTML =
person2.firstName + " is " + person2.age + " years old. "+
"Their eye color is " +person2["eyeColor"]+". "+person2.fullName();