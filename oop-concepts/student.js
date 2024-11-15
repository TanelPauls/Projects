class Person {
    constructor(name){
        this.firstname = name
        this.lastname = ""
        this.age = 0
    }
    get cnam(){
        return this.firstname
    }
    set cnam(x){
        this.firstname=x
    }
}


const student1 = new Person();


student1.firstname="John"
student1.lastname="Smith"
student1.age=33

console.log(student1.firstname)
console.log(student1.lastname)
console.log(student1.age)
console.log(student1.cnam)
student1.cnam="Jack"
console.log(student1.cnam)
console.log(student1.firstname)