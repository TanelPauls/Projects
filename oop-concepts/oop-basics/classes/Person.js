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