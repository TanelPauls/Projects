//not very private, use other languages

class Student {
    #nimi
    #id
    #staatus
    constructor(name,id){
        this.#nimi=name
        this.#id=id
        this.#staatus="Active"
    }
    get getId(){
        return this.id
    }
    get getStatus(){
        return this.staatus
    }
    get getName(){
        return this.nimi
    }
    set setName(x){
        this.nimi=x
    }
    set setStatus(status){
        if(this.staatus=="Active" || this.staatus=="Expelled" || this.staatus=="Finished" || this.staatus=="Inactive" ){
            this.staatus=status
        }
    }
}

const student1=new Student("Nick",1)

student1.nimi="Nick"
student1.id=25
student1.staatus="Active"

console.log(student1.nimi)
console.log(student1.id)
console.log(student1.staatus)
console.log(student1.getId)
console.log(student1.getStatus)
console.log(student1.getName)
student1.setStatus="Finished"
console.log(student1.getStatus)
student1.setStatus="Sleeping"
console.log(student1.getStatus)
student1.setStatus="Not Sleeping"
console.log(student1.getStatus)
