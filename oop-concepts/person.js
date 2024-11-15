class Person {
    constructor(name){
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    }
}

class Student {
    constructor(name){
        this.name = name
        this.finished = false
    }
}

const student1 = new Person();
const student2 = new Person();
const student3 = new Person();

const student11 = new Student();
const student22 = new Student();
const student33 = new Student();
student1.firstname="John"
student1.lastname="Smith"
student1.age=33
student2.firstname="Johnny"
student2.lastname="Smithy"
student2.age=33
student3.firstname="Agent"
student3.lastname="Smith"
student3.age=33

student11.firstname="John_D"
student11.lastname="Smith_D"
student11.age=33
student22.firstname="Johnny_D"
student22.lastname="Smithy_D"
student22.age=33
student33.firstname="Agent_D"
student33.lastname="Smith_D"
student33.age=33
console.log(student33.firstname)
console.log(student1.lastname)
console.log(student1.age)