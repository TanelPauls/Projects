class Person {
    constructor(name){
        this.name = name
    } 

    setDateOfBirth(year){
        this.year = year
    }

    getDateOfBirth(){
        return this.year
    } 
    
    age(){
        return new Date().getFullYear() - this.year
    } 

    getName(){
        return this.name
    } 

    description(){
        return `Person ${this.name}`
    } 
}

module.exports = Person

console.log(student1)
console.log(student1.name)
console.log(student1.age())
student1.setDateOfBirth(1900)
console.log(student1.age())